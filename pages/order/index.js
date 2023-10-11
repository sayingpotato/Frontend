import { useEffect, useState, useRef } from 'react'

import Title from '@components/title'
import OrderedContent from '@components/orderedContent'
import useGetOrder from '@hooks/useGetOrder';

import { ContentDiv } from '../../styles/order/style'

const Order = () => {

  const [data, setData] = useState("");
  const getOrder = useGetOrder();

  useEffect(() => { 
    setData(getOrder); 
  },[getOrder]);

  const orderedResult = data && data.map((oneData, index) => {
    return (
      <OrderedContent
        key={index}
        data={oneData}
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

export default Order
