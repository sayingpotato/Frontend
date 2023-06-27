import { DiscountContentWholeDiv, DiscountContent  } from './style';

import Image from '@atoms/image';
import InlineText from '@molecules/inlineText';


const MypageDiscountInfo = ({discountData}) => {

    return (
        <DiscountContentWholeDiv>
        {discountData.map((item, index) => {
        return (
            <DiscountContent key={index}>
                <Image src="images/coin.svg" alt="돈 사진"/>
                <InlineText divClassName="discountContentValue" textOne={item.value.name} textTwo={item.value.discountMoney} textOneClassName="discountContentName" textTwoClassName="discountContentMoney" />
            </DiscountContent>
        )})}
        </DiscountContentWholeDiv>
    );
};

export default MypageDiscountInfo;