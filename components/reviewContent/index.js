import { useEffect, useState, useRef } from 'react'
import { Wholediv, ReviewWholeDiv, ReviewButtonDiv, ReviewResetButton, ReviewConfirmButton, ReviewButtonName } from './style'
import { useRecoilState } from "recoil";

import { ReviewData } from "@utils/recoil/atom";
import useSubmitReview from "@hooks/useSubmitReview";

const Review = (props) => {
  const type = props.type;
  const reviewStatus = props.reviews.reviewStatus;
  const reviewsDetail = props.reviews;

  const [clickedIndex, setClickedIndex] = useState([]);
  const [submitReview, setSubmitReview] = useRecoilState(ReviewData);
  const submit = useSubmitReview();
  
  const cafeReviewArr = [
    { id: 0, name: reviewsDetail.greatCoffeeContent, state: reviewsDetail.greatCoffee}, // 커피가 맛있어요
    { id: 1, name: reviewsDetail.quietMoodContent, state: reviewsDetail.quietMood }, // 조용해요
    { id: 2, name: reviewsDetail.manyOutletContent, state: reviewsDetail.manyOutlet }, // 콘센트가 많아요
    { id: 3, name: reviewsDetail.goodMoodContent, state: reviewsDetail.goodMood }, // 분위기가 좋아요
    { id: 4, name: reviewsDetail.goodPriceContent, state: reviewsDetail.goodPrice }, // 가성비가 좋아요
    { id: 5, name: reviewsDetail.goodWifiContent, state: reviewsDetail.goodWifi }, // 와이파이가 잘 터져요
    { id: 6, name: reviewsDetail.goodDesertContent, state: reviewsDetail.goodDesert }, // 디저트가 맛있어요
    { id: 7, name: reviewsDetail.greatBeverageContent, state: reviewsDetail.greatBeverage }, // 음료가 맛있어요
  ];

  const foodReviewArr = [
    { id: 0, name: reviewsDetail.greatFoodContent, state: reviewsDetail.greatFood}, // 음식이 맛있어요
    { id: 1, name: reviewsDetail.quietMoodContent, state: reviewsDetail.quietMood }, // 조용해요
    { id: 2, name: reviewsDetail.goodMoodContent, state: reviewsDetail.goodMood }, // 분위기가 좋아요
    { id: 3, name: reviewsDetail.cleanToiletContent, state: reviewsDetail.cleanToilet }, // 화장실이 깨끗해요
    { id: 4, name: reviewsDetail.goodPriceContent, state: reviewsDetail.goodPrice }, // 가성비가 좋아요
    { id: 5, name: reviewsDetail.goodServiceContent, state: reviewsDetail.goodService }, // 서비스를 많이 줘요
    { id: 6, name: reviewsDetail.goodKindContent, state: reviewsDetail.goodKind }, // 친절해요
  ];

  useEffect(() => {
    if (reviewStatus === "EXPIRED" || reviewStatus === "REVIEWING") {
      const filteredReviews = reviewArr.filter(review => review.state === 1);
      setClickedIndex(filteredReviews.map(review => review.id));
    }
  }, [reviewStatus])

  const handleClick = (index) => {
    if (clickedIndex.includes(index)) {
      const removedArr = clickedIndex.filter(item => item !== index);
      setClickedIndex(removedArr);
    } else {
      setClickedIndex([...clickedIndex, index]);
    }
  }

  const confirmButtonClick = () => {
  const selectedReviews = reviewArr.filter((review) => clickedIndex.includes(review.id));
  const selectedReviewNames = selectedReviews.map((review) => review.name);
  setSubmitReview({
    "reviewId": reviewsDetail.id,
    "reviewContents": selectedReviewNames
  })

  submit();
}

  const resetButtonClick = () => {
    setClickedIndex([-1])
  }

  const reviewArr = type === "CAFE" ? cafeReviewArr : foodReviewArr;
  
  return (
    <Wholediv>
      <ReviewWholeDiv>
      {reviewArr.map((data, index) => (
        <ReviewButtonName
          key={index}
          onClick={reviewStatus !== "EXPIRED" ? () => handleClick(index) : null}
          state={clickedIndex.includes(index)}
        >
          {data.name}
        </ReviewButtonName>
      ))}
      </ReviewWholeDiv>
      <ReviewButtonDiv>
        {reviewStatus !== "EXPIRED" ? <ReviewResetButton onClick={resetButtonClick}>초기화</ReviewResetButton> : null}
        {reviewStatus !== "EXPIRED" ? <ReviewConfirmButton onClick={confirmButtonClick}>확인</ReviewConfirmButton> : null}
      </ReviewButtonDiv>
    </Wholediv>
  )
}

export default Review
