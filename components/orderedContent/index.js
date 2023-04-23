import { useEffect, useState, useRef } from 'react'

import {
  Div,
  ContentDiv,
  StoreDiv,
  PName,
  MenuDiv,
  PMenu,
  MoreButton,
  StyledImage,
  ReviewDiv,
  ReviewButton,
  ReviewContent,
} from './style'

import Review from '@components/reviewContent'

const OrderedContent = (props) => {
  const value = JSON.parse(props.data)
  const type = props.type

  const [open, setOpen] = useState(false)

  const reviewButtonClick = () => {
    setOpen(!open)
  }

  let data = value['menu']

  const menuData = () => {
    const result = []
    if (data.length <= 5) {
      for (let i = 0; i < data.length; i++) {
        result.push(<PMenu key={i}>{data[i]}</PMenu>)
      }
    } else {
      for (let i = 0; i < 5; i++) {
        result.push(<PMenu key={i}>{data[i]}</PMenu>)
      }
      result.push(<PMenu key={5}>...</PMenu>)
    }

    return result
  }

  return (
    <Div state={open}>
      <ContentDiv>
        <StyledImage src={value['imageSrc']} alt="logo" />
        <StoreDiv>
          <PName>{value['name']}</PName>
          <MenuDiv>{menuData()}</MenuDiv>
          <MoreButton>주문 상세</MoreButton>
        </StoreDiv>
      </ContentDiv>
      <ReviewDiv state={open}>
        <ReviewButton onClick={reviewButtonClick}>
          {open ? '▲ 접기' : '▼ 리뷰하기'}
        </ReviewButton>
        <ReviewContent state={open}>
          <Review type={type}/>
        </ReviewContent>
      </ReviewDiv>
    </Div>
  )
}

export default OrderedContent
