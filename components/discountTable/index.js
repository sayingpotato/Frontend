import { Div, StyledImage, StyledName } from './style'
import { useRef, useEffect, useState } from 'react'

const DiscountTable = (props) => {
  const value = JSON.parse(props.data)

  return (
    <Div>
      <StyledImage src={value['imageSrc']} alt="logo" />
      <StyledName>{value['name']}</StyledName>
    </Div>
  )
}

export default DiscountTable
