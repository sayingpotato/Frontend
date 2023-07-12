import Router, { useRouter } from 'next/router'

import { TodayDiscountTemplateDiv } from './style';
import TodayDiscountContent from '@organisms/todayDiscountContent';

const TodayDiscountTemplate = ({data}) => {
    console.log(data)

    return (
        <TodayDiscountTemplateDiv>
            <TodayDiscountContent src={data.storeTodayDiscountThumbnail} alt="logo" text={data.name} />
        </TodayDiscountTemplateDiv>
    );
};

export default TodayDiscountTemplate;