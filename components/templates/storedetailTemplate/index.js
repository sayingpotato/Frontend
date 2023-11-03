import Router, { useRouter } from 'next/router'
import { StoredetailTemplateDiv } from './style';

import Line from "@atoms/line"
import Title from "@molecules/title"
import StoreInformation from "@organisms/storeInformation"
import StoreVisitorReview from "@organisms/storeVisitorReview"
import DiscountInformation from '@organisms/discountInformation';
import StoreImages from "@organisms/storeImages"
import MenuImages from "@organisms/menuImages"

const StorelistTemplate = ({data}) => {
    const router = useRouter()

    return (
        <StoredetailTemplateDiv>
            <Title text={data.name} />
            <Line />
            <StoreInformation address={data.address.roadAddr} time={data.storeOperationHours} call={data.phone} concent={data.outletNum} rank={"1위 무질서도"} room={data.tableImg} />
            <Line />
            <DiscountInformation discountData={data.discounts} />
            <Line />
            <StoreVisitorReview reviewData={data.reviewResult}/>
            <Line />
            <StoreImages images={data.storeDetailStoreImages}/>
            <Line />
            <MenuImages menuData={data.storeDetailItems} discountData={data.discounts} />
        </StoredetailTemplateDiv>
    );
};

export default StorelistTemplate;