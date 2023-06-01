import { MypageDiscountInfoDiv } from './style';

import Title from '@molecules/title';
import InlineText from '@molecules/inlineText';
import ImageText from '@molecules/imageText';

const MypageDiscountInfo = () => {
    return (
        <MypageDiscountInfoDiv>
            <Title text="최근 받은 할인" />
            <InlineText text1="권낙현님" text2="할인금액" text1ClassName="mypageUserName" text2ClassName="mypageMoneyTitle" />
            <ImageText text="15000" src="images/coin.svg" alt="images/coin.svg" textClass="mypageMoneyTotal" />
        </MypageDiscountInfoDiv>
    );
};

export default MypageDiscountInfo;