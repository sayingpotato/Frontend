import { ReviewDiv } from './style';

import PercentBlock from "@molecules/percentBlock"
import ImageText from "@molecules/imageText"

const Review = () => {
    return (
        <ReviewDiv>
            <PercentBlock>
                <ImageText divClassName="basic" src="images/goldMedal.svg" alt="images/goldMedal.svg" text="리뷰명" textClassName="reviewName" inlineBlockClass="oneInside" out="outside" />
                <ImageText divClassName="basic" src="images/silverMedal.svg" alt="images/silverMedal.svg" text="리뷰명" textClassName="reviewName" inlineBlockClass="twoInside" out="outside"/>
                <ImageText divClassName="basic" src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text="리뷰명" textClassName="reviewName" inlineBlockClass="threeInside" out="outside"/>
            </PercentBlock>
        </ReviewDiv>
    );
};

export default Review;