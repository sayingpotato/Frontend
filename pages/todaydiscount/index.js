import { useEffect, useState, useRef } from 'react'

import date from '@utils/date'
import Title from '@components/title'
import DiscountTable from '@components/discountTable'

import {
  InfoDiv,
  TypeButtonDiv,
  TypeFoodButton,
  TypeCafeButton,
  DayInfoDiv,
  NotNowDay,
  NowDay,
  BackDiv,
  WholeDiv,
} from './style'

const TodayDiscount = () => {
  const [nowDay, setNowDay] = useState('')
  const [prevDay, setPrevDay] = useState('')
  const [nextDay, setNextDay] = useState('')

  const [clickValue, setClickValue] = useState('food')

  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  useEffect(() => {
    setNowDay(date())

    const idx = days.indexOf(date())

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
  }, [date()])

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

  const CafeArr = data.map((oneData, index) => {
    return oneData.type === 'cafe' ? (
      <DiscountTable
        className={index === data.length - 1 ? 'last' : ''}
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
      ></DiscountTable>
    ) : null
  })

  const FoodArr = data.map((oneData, index) => {
    return oneData.type === 'food' ? (
      <DiscountTable
        className={index === data.length - 1 ? 'last' : ''}
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
      ></DiscountTable>
    ) : null
  })

  const typeFoodClick = (e) => {
    setClickValue('food')
  }

  const typeCafeClick = (e) => {
    setClickValue('cafe')
  }

  return (
    <>
      <Title>오늘의 할인</Title>
      <InfoDiv>
        <TypeButtonDiv>
          <TypeFoodButton state={clickValue} onClick={typeFoodClick}>
            식당
          </TypeFoodButton>
          <TypeCafeButton state={clickValue} onClick={typeCafeClick}>
            카페
          </TypeCafeButton>
        </TypeButtonDiv>
        <DayInfoDiv>
          <NotNowDay>{`${prevDay}`}</NotNowDay>
          <NowDay>{`${nowDay}`}</NowDay>
          <NotNowDay>{`${nextDay}`}</NotNowDay>
        </DayInfoDiv>
      </InfoDiv>
      <BackDiv>
        <WholeDiv>{`${clickValue}` === 'cafe' ? CafeArr : FoodArr}</WholeDiv>
      </BackDiv>
    </>
  )
}

export default TodayDiscount
