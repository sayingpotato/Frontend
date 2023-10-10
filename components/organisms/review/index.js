import { ReviewDiv } from './style';

import PercentBlock from "@molecules/percentBlock"
import ImageText from "@molecules/imageText"

const Review = ({reviewTopArr}) => {
    return (
        <ReviewDiv>
            <PercentBlock>
                <ImageText divClassName="basic" src="images/goldMedal.svg" alt="images/goldMedal.svg" text={reviewTopArr.firstGradeReviewName} textClassName="reviewName" inlineBlockClass="oneInside" out="outside" />
                <ImageText divClassName="basic" src="images/silverMedal.svg" alt="images/silverMedal.svg" text={reviewTopArr.secondGradeReviewName} textClassName="reviewName" inlineBlockClass="twoInside" out="outside"/>
                <ImageText divClassName="basic" src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text={reviewTopArr.thirdGradeReviewName} textClassName="reviewName" inlineBlockClass="threeInside" out="outside"/>
            </PercentBlock>
        </ReviewDiv>
    );
};

export default Review;