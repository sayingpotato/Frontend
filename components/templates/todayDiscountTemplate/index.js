import Router, { useRouter } from 'next/router'

import { TodayDiscountTemplateDiv } from './style';
import TodayDiscountContent from '@organisms/todayDiscountContent';

const TodayDiscountTemplate = ({data}) => {
    const onClickTodayDiscountValue = () => {
        Router.push({
          pathname: '/storedetail',
          query: { id: data.id },
        })
    }
    return (
        <TodayDiscountTemplateDiv>
            <TodayDiscountContent onClick={onClickTodayDiscountValue} src={data.storeTodayDiscountThumbnail} alt="logo" text={data.name} />
        </TodayDiscountTemplateDiv>
    );
};

export default TodayDiscountTemplate;