import Router, { useRouter } from 'next/router'
import { StoredetailTemplateDiv } from './style';

import Line from "@atoms/line"
import Title from "@molecules/title"
import StoreInformation from "@organisms/storeInformation"
import StoreVisitorReview from "@organisms/storeVisitorReview"
import StoreImages from "@organisms/storeImages"
import MenuImages from "@organisms/menuImages"

const StorelistTemplate = ({data}) => {

    let value = data[0]

    const router = useRouter()

    return (
        <StoredetailTemplateDiv>
            <Title text={value['name']} />
            <Line />
            <StoreInformation address={value['address']} time={value['time']} call={value['call']} concent={value['concent']} rank={value['rank']} room={value['roomImage']}/>
            <Line />
            <StoreVisitorReview reviewData={value['review']}/>
            <Line />
            <StoreImages images={value['storeImages']}/>
            <Line />
            <MenuImages menuData={value['menus']}/>
        </StoredetailTemplateDiv>
    );
};

export default StorelistTemplate;