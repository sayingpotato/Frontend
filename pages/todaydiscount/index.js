import { useEffect, useState, useRef } from 'react'

import date from '@utils/date'

import Title from '@molecules/title'
import TodayDiscountHeader from '@organisms/todayDiscountHeader'
import TodayDiscountTemplate from '@templates/todayDiscountTemplate'

import useGetDailyDiscountStore from '@hooks/useGetDailyDiscountStoreList';
import { ContentWholeDiv, ContentDiv } from './style';

const TodayDiscount = () => {
  const [nowDay, setNowDay] = useState('')
  const [prevDay, setPrevDay] = useState('')
  const [nextDay, setNextDay] = useState('')
  const [clickValue, setClickValue] = useState('food')
  const [datas, setData] = useState(null);  
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  const days2 = [
    'SUN', 'MON','TUE', 'MON', 'THU', 'FRI', 'SAT'
  ];

  const englishDay = days2[days.indexOf(nowDay)];
  const getDailyDiscountStore = useGetDailyDiscountStore(englishDay);
  const dates = date();

  useEffect(() => {
    setData(getDailyDiscountStore);
  }, [dates])

  useEffect(() => {  
    setNowDay(dates)

    const idx = days.indexOf(dates)
    
    if (idx === 0) {
      setPrevDay('토요일')
      setNextDay(days[idx + 1])
      return
    } else if (idx === 6) {
      setNextDay('일요일')
      setPrevDay(days[idx - 1])
      return
    } else {
      setNextDay(days[idx + 1])
      setPrevDay(days[idx - 1])
    }
  }, [dates])

  let data = [
    {
      id: 1,
      value: {
        name: '좋은 원두',
        imageSrc: '/images/bronzeMedal.svg',
      },
      type: 'food',
    },
    {
      id: 2,
      value: {
        name: '좋은 원두2',
        imageSrc: '/images/silverMedal.svg',
      },
      type: 'cafe',
    },
    {
      id: 3,
      value: {
        name: '좋은 원두3',
        imageSrc: '/images/goldMedal.svg',
      },
      type: 'food',
    },
    {
      id: 4,
      value: {
        name: '좋은 원두4',
        imageSrc: '/images/close.svg',
      },
      type: 'food',
    },
    {
      id: 5,
      value: {
        name: '좋은 원두5',
        imageSrc: '/images/close.svg',
      },
      type: 'cafe',
    },
    {
      id: 6,
      value: {
        name: '좋은 원두6',
        imageSrc: '/images/close.svg',
      },
      type: 'food',
    },
  ]

  const discountTable = (oneData, index) => {
    return (
      <TodayDiscountTemplate
        className={index === data.length - 1 ? 'last' : ''}
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
      ></TodayDiscountTemplate>
    )
  }
  
  const CafeArr = data.map((oneData, index) => {
    return oneData.type === 'cafe' &&  discountTable(oneData, index)
  })
  const FoodArr = data.map((oneData, index) => {
    return oneData.type === 'food' &&  discountTable(oneData, index)
  })

  const typeFoodClick = (e) => {
    setClickValue('food')
  }

  const typeCafeClick = (e) => {
    setClickValue('cafe')
  }

  return (
    <>
      <Title text="오늘의 할인"/>
      <div>
        {datas && datas.map((item, index) => {
          return (
            <div key = {index}>{item.name}</div>
          )
        })}
      </div>
      <TodayDiscountHeader FoodOnClick={typeFoodClick} CafeOnClick={typeCafeClick} 
        state={clickValue}
        prevDay={`${prevDay}`} nowDay={`${nowDay}`} nextDay={`${nextDay}`}
        />
      <ContentWholeDiv>
        <ContentDiv>{`${clickValue}` === 'cafe' ? CafeArr : FoodArr}</ContentDiv>
      </ContentWholeDiv>
    </>
  )
}

export default TodayDiscount
