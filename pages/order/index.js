import { useEffect, useState, useRef } from 'react'

import Title from '@components/title'
import OrderedContent from '@components/orderedContent'

import { ContentDiv } from './style'

const index = () => {
  let data = [
    {
      id: 1,
      value: {
        name: '좋은 원두',
        imageSrc: '/images/bronzeMedal.svg',
        menu: [
          '카페라떼 : 1',
          '카페라떼 : 3',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
        ],
      },
      type: 'food',
    },
    {
      id: 2,
      value: {
        name: '좋은 원두2',
        imageSrc: '/images/silverMedal.svg',
        menu: [
          '카페라떼 : 1',
          '카페라떼 : 3',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
          '카페 모카 : 5',
          '카라멜마끼아또 : 5',
        ],
      },
      type: 'cafe',
    },
    {
      id: 3,
      value: {
        name: '좋은 원두3',
        imageSrc: '/images/goldMedal.svg',
        menu: [
          '카페라떼 : 1',
          '카페라떼 : 3',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
        ],
      },
      type: 'food',
    },
    {
      id: 4,
      value: {
        name: '좋은 원두4',
        imageSrc: '/images/close.svg',
        menu: [
          '카페라떼 : 1',
          '카페라떼 : 3',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
          '카라멜마끼아또 : 5',
        ],
      },
      type: 'food',
    },
  ]

  const orderedResult = data.map((oneData) => {
    return (
      <OrderedContent
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
        type={`${oneData.type}`}
      ></OrderedContent>
    )
  })
  return (
    <>
      <Title>주문 내역</Title>
      <ContentDiv>{orderedResult}</ContentDiv>
    </>
  )
}

export default index
