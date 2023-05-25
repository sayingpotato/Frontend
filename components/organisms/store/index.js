import { StyledStoreInfoDiv, StyledReviewInfoDiv } from './style';

import Text from "@atoms/text"
import ImageLayout from "@molecules/imageLayout"
import InlineText from "@molecules/inlineText"
import MenuRanking from '@organisms/menuRanking';
import Review from '@organisms/review';

const Store = ({storeName, imageSrc, minDiscount, maxDisount}) => {
    return (
        <div>
            <ImageLayout />
            <StyledStoreInfoDiv>
                <Text text={storeName} className="storeName" />
                <InlineText text1={minDiscount} text1ClassName="minDiscount" text2={maxDisount} text2ClassName="maxDiscount"/>
            </StyledStoreInfoDiv>
            <StyledReviewInfoDiv>
                <MenuRanking />
                <Review />
            </StyledReviewInfoDiv>
        </div>
    );
};

export default Store;