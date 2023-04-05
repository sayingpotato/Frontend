import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

import {
  ImageWholeDiv,
  FirstImageDiv,
  SecondImageDiv,
  ThirdImageDiv,
  FourthImageDiv,
  One,
  Two,
  Three,
} from './style'

const StorelistImage = (props) => {
  const imageSrc = JSON.parse(props.imageSrc)

  return (
    <ImageWholeDiv>
      <One>
        <FirstImageDiv>
          <img
            src={`${imageSrc['firstImage']}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </FirstImageDiv>
      </One>
      <Two>
        <SecondImageDiv>
          <img
            src={`${imageSrc['secondImage']}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SecondImageDiv>
        <ThirdImageDiv>
          <img
            src={`${imageSrc['thirdImage']}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ThirdImageDiv>
      </Two>
      <Three>
        <FourthImageDiv>
          <img
            src={`${imageSrc['fourthImage']}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </FourthImageDiv>
      </Three>
    </ImageWholeDiv>
  )
}

export default StorelistImage
