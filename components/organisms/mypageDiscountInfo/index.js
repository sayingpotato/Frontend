import { MypageDiscountInfoDiv } from './style';

import Title from '@molecules/title';
import MypageDiscountContentWhole from "@organisms/mypageDiscountContentWhole"

const MypageDiscountInfo = ({discountDataDetail}) => {

    return (
        <MypageDiscountInfoDiv>
            <Title text="최근 받은 할인" className="mypageDiscountTitle"/>
            <MypageDiscountContentWhole discountDataDetail={discountDataDetail} />
        </MypageDiscountInfoDiv>
    );
};

export default MypageDiscountInfo;