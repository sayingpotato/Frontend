import { useEffect, useState, useRef, use } from 'react'
import router from "next/router";

import date from '@utils/date'

import Title from '@molecules/title'
import TodayDiscountHeader from '@organisms/todayDiscountHeader'
import TodayDiscountTemplate from '@templates/todayDiscountTemplate'

import useGetDailyDiscountStore from '@hooks/useGetDailyDiscountStoreList';
import { ContentWholeDiv, ContentDiv } from './style';

const TodayDiscount = () => {

  const [clickValue, setClickValue] = useState('FOOD');

  const [nowDay, setNowDay] = useState("");
  const [englishNowDay, setEnglishNowDay] = useState("");
  const [prevDay, setPrevDay] = useState("");
  const [nextDay, setNextDay] = useState("");

  const [data, setData] = useState(null);

  const daysOfWeek = [["일요일", "SUN"], ["월요일", "MON"], ["화요일", "TUE"], ["수요일", "WED"], ["목요일", "THU"], ["금요일", "FRI"], ["토요일", "SAT"]];

  useEffect(() => {
    const dateIndex = date();
    const todayName = daysOfWeek[dateIndex][0]
    const prevName = daysOfWeek[dateIndex-1][0]
    const nextName = daysOfWeek[dateIndex+1][0]

    setPrevDay(prevName)
    setNextDay(nextName)
    setNowDay(todayName)
    setEnglishNowDay("MON") // DB에 데이터 삽입 이후 변경 예정 
  }, [])

  const getDailyDiscountStore = useGetDailyDiscountStore(englishNowDay);

  useEffect(() => {
    setData(getDailyDiscountStore);
  }, [nowDay, getDailyDiscountStore])

  const discountTable = (oneData, index) => {
    const dataValue = {
      id : oneData.id,
      name : oneData.name, 
      storeTodayDiscountThumbnail : oneData.storeTodayDiscountThumbnail,
      category : oneData.category
    }
    return (
      <TodayDiscountTemplate
        className={index === data.length - 1 ? 'last' : ''}
        key={`${oneData.id}`}
        data={dataValue}
      ></TodayDiscountTemplate>
    )
  }

  const CafeArr = data && data.map((oneData, index) => {
    return oneData.category === 'CAFE' && discountTable(oneData, index)
  })
  
  const FoodArr = data && data.map((oneData, index) => {
    return oneData.category === 'FOOD' && discountTable(oneData, index)
  })

  const typeFoodClick = (e) => {
    setClickValue('FOOD')
  }

  const typeCafeClick = (e) => {
    setClickValue('CAFE')
  }


  return (
    <>
      <Title text="오늘의 할인"/>
      <TodayDiscountHeader FoodOnClick={typeFoodClick} CafeOnClick={typeCafeClick} 
        state={clickValue}
        prevDay={`${prevDay}`} nowDay={`${nowDay}`} nextDay={`${nextDay}`}
        />
      <ContentWholeDiv>
        <ContentDiv>{`${clickValue}` === 'CAFE' ? CafeArr : FoodArr}</ContentDiv>
      </ContentWholeDiv>
    </>
  )
}

export default TodayDiscount
