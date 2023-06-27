import { MypageDiscountInfoDiv } from './style';

import Title from '@molecules/title';
import MypageDiscountContentWhole from "@organisms/mypageDiscountContentWhole"

const MypageDiscountInfo = ({discountData}) => {

    return (
        <MypageDiscountInfoDiv>
            <Title text="최근 받은 할인" className="mypageDiscountTitle"/>
            <MypageDiscountContentWhole discountData={discountData} />
        </MypageDiscountInfoDiv>
    );
};

export default MypageDiscountInfo;