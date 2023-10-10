import { StyledStoreInfoDiv, StyledReviewInfoDiv } from './style';

import Text from "@atoms/text"
import ImageLayout from "@molecules/imageLayout"
import InlineText from "@molecules/inlineText"
import MenuRanking from '@organisms/menuRanking';
import Review from '@organisms/review';

const Store = ({storeName, imageSrc, minDiscount, maxDisount, menuTopArr, reviewTopArr}) => {
    return (
        <div>
            <ImageLayout imageSrc={imageSrc} />
            <StyledStoreInfoDiv>
                <Text text={storeName} className="storeName" />
                <InlineText divClassName="basic" textOne={minDiscount} textOneClassName="minDiscount" textTwo={maxDisount} textTwoClassName="maxDiscount"/>
            </StyledStoreInfoDiv>
            <StyledReviewInfoDiv>
                <MenuRanking menuTopArr={menuTopArr} />
                <Review reviewTopArr={reviewTopArr} />
            </StyledReviewInfoDiv>
        </div>
    );
};

export default Store;