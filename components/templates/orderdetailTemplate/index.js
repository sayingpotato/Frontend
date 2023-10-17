import { useEffect, useState, useRef } from 'react'

import {
  Div,
  TimeDiv,
  Header,
  ContentDiv,
  MenuDiv,
  PriceDiv,
  ButtonDiv,
  SummaryDiv,
  SummaryPriceDiv,
  SummaryPeopleDiv,
} from './style'

import { useRecoilState } from "recoil";
import { StoreId } from "@utils/recoil/atom";

import Text from '@components/atoms/text'
import Button from '@components/atoms/button'
import Line from '@components/atoms/line'

import useSubmitAcceptOrder from '@hooks/useSubmitAcceptOrder';
import useSubmitRejectOrder from '@hooks/useSubmitRejectOrder';

const OrderdetailTemplate = ({data}) => {

  const [submitStoreId, setSubmitStoreId] = useRecoilState(StoreId);

  const accept = useSubmitAcceptOrder();
  const reject = useSubmitRejectOrder();

  const approvalButtonClick = () => {
    setSubmitStoreId(data.orderId);

    accept();
  }

  const cancelButtonClick = () => {
    setSubmitStoreId(data.orderId);

    reject();
  }

  return (
    <Div>
      <TimeDiv>
        <Text text="주문 시각" className="orderDetailTitle"></Text>
        <Text text={data.orderTime} className="orderDetailContent"></Text>
        <Text className={data.orderStatus === "ORDER" ? "orderStart" : "orderFinish"} text={data.orderStatus === "ORDER" ? "대기 중" : "계산 완료"}></Text>
      </TimeDiv>

      <Header>
        <Text text="주문 내역" className="orderDetailTitle"></Text>
        <Text text="항목 가격" className="orderDetailTitle"></Text>
      </Header>

      <ContentDiv>
        <MenuDiv>
          {data.orderOwnerItems.map((item, index) => (
            <Text key={index} text={item.itemName} className="orderDetailContent"/>
          ))}
        </MenuDiv>
        <PriceDiv>
          {data.orderOwnerItems.map((item, index) => (
            <Text key={index} text={item.price} className="orderDetailContent" />
          ))}
        </PriceDiv>
        <ButtonDiv>
          {data.orderStatus === "ORDER" ? <Button text="거절" className="cancelOrderButton" onClick={cancelButtonClick} /> : null}
          {data.orderStatus === "ORDER" ? <Button text="승인" className="approvalOrderButton" onClick={approvalButtonClick} /> : null}
        </ButtonDiv>
      </ContentDiv>

      <SummaryDiv>
        <SummaryPriceDiv>
          <Text text={"총 금액"} className="orderDetailTitle"/>
          <Text text={data.totalPrice} className="orderDetailContent"/>
        </SummaryPriceDiv>
        <SummaryPeopleDiv>
          <Text text={"총 인원"} className="orderDetailTitle"/>
          <Text text={data.totalPeople} className="orderDetailContent"/>
        </SummaryPeopleDiv>
      </SummaryDiv>        

      <Line />
    </Div>
  )
}

export default OrderdetailTemplate
