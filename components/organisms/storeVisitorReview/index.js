import { StoreVisitorReviewDiv } from './style';

import PercentBlock from '@molecules/percentBlock';
import ImageText from '@molecules/imageText';
import InlineText from '@molecules/inlineText';

const StoreVisitorReview = ({reviewData}) => {

    return (
        <>
            <StoreVisitorReviewDiv>
                    <InlineText divClassName="basic" textOne="방문자 리뷰" textTwo={reviewData.total} textOneClassName="storeDetailMiniTitle" textTwoClassName="storeDetailReviewTotal" />
                    <PercentBlock>
                        <ImageText text={reviewData.review1.text} textClassName="reviewName" inlineBlockClass="oneVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review1.count} />
                        <ImageText text={reviewData.review2.text} textClassName="reviewName" inlineBlockClass="twoVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review2.count} />
                        <ImageText text={reviewData.review3.text} textClassName="reviewName" inlineBlockClass="threeVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review3.count} />
                        <ImageText text={reviewData.review4.text} textClassName="reviewName" inlineBlockClass="fourVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review4.count} />
                    </PercentBlock>
            </StoreVisitorReviewDiv>
        </>
    );
};

export default StoreVisitorReview;