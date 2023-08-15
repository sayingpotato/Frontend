import { StoreVisitorReviewDiv } from './style';

import PercentBlock from '@molecules/percentBlock';
import ImageText from '@molecules/imageText';
import InlineText from '@molecules/inlineText';

const StoreVisitorReview = ({reviewData}) => {
    return (
        <StoreVisitorReviewDiv>
                <InlineText divClassName="basic" textOne="방문자 리뷰" textTwo={reviewData.allNum} textOneClassName="storeDetailMiniTitle" textTwoClassName="storeDetailReviewTotal" />
                <PercentBlock>
                    <ImageText text={"커피가 맛있어요"} textClassName="reviewName" inlineBlockClass="oneVisitorReviewInside" out="visitorReviewOutside" reviewCountText={reviewData.greatBeverageNum} reviewCountTextClassName="reviewCount" />
                    <ImageText text={"가성비가 좋아요"} textClassName="reviewName" inlineBlockClass="twoVisitorReviewInside" out="visitorReviewOutside" reviewCountText={reviewData.manyOutletNum} reviewCountTextClassName="reviewCount" />
                    <ImageText text={"화장실이 좋아요"} textClassName="reviewName" inlineBlockClass="threeVisitorReviewInside" out="visitorReviewOutside" reviewCountText={reviewData.greatFoodNum} reviewCountTextClassName="reviewCount" />
                    <ImageText text={"분위기가 좋아요"} textClassName="reviewName" inlineBlockClass="fourVisitorReviewInside" out="visitorReviewOutside" reviewCountText={reviewData.greatFoodNum} reviewCountTextClassName="reviewCount" />
                </PercentBlock>
        </StoreVisitorReviewDiv>
    );
};

export default StoreVisitorReview;