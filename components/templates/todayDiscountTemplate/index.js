import Router, { useRouter } from 'next/router'

import { TodayDiscountTemplateDiv } from './style';
import TodayDiscountContent from '@organisms/todayDiscountContent';

const TodayDiscountTemplate = ({data}) => {
    const value = JSON.parse(data)

    return (
        <TodayDiscountTemplateDiv>
            <TodayDiscountContent src={value['imageSrc']} alt="logo" text={value['name']} />
        </TodayDiscountTemplateDiv>
    );
};

export default TodayDiscountTemplate;