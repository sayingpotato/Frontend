import { DiscountContentWholeDiv, DiscountContent  } from './style';

import Image from '@atoms/image';
import InlineText from '@molecules/inlineText';


const MypageDiscountInfo = ({discountDataDetail}) => {

    return (
        <DiscountContentWholeDiv>
        {discountDataDetail && discountDataDetail.map((item, index) => {
        return (
            <DiscountContent key={index}>
                <Image src="images/coin.svg" alt="돈 사진"/>
                <InlineText divClassName="discountContentValue" textOne={item.storeName} textTwo={item.discountPrice.toLocaleString()} textOneClassName="discountContentName" textTwoClassName="discountContentMoney" />
            </DiscountContent>
        )})}
        </DiscountContentWholeDiv>
    );
};

export default MypageDiscountInfo;