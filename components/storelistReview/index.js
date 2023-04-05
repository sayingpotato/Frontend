import Image from 'next/image'

import {
  ReviewWholeDiv,
  ReviewDiv,
  ReviewName,
  OneColoredDiv,
  TwoColoredDiv,
  ThreeColoredDiv,
} from './style'

const StorelistReview = (props) => {
  const reviewList = JSON.parse(props.review)
  return (
    <ReviewWholeDiv>
      <ReviewDiv>
        <OneColoredDiv>
          <ReviewName>{`🍭 ${reviewList['firstTopReview']}`}</ReviewName>
        </OneColoredDiv>
      </ReviewDiv>
      <ReviewDiv>
        <TwoColoredDiv>
          <ReviewName>{`💰 ${reviewList['secondTopReview']}`}</ReviewName>
        </TwoColoredDiv>
      </ReviewDiv>
      <ReviewDiv>
        <ThreeColoredDiv>
          <ReviewName>{`💓 ${reviewList['thirdTopReview']}`}</ReviewName>
        </ThreeColoredDiv>
      </ReviewDiv>
    </ReviewWholeDiv>
  )
}

export default StorelistReview
