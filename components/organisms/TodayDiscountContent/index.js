import { TodayDiscountContentDiv } from './style';

import ImageTitle from '@molecules/imageTitle'

const TodayDiscountContent = ({src, alt, text}) => {
    return (
        <TodayDiscountContentDiv>
            <ImageTitle imageClassName='todayDiscountLogoImage' textClassName='todayDiscountLogoName' src={src} alt={alt} text={text} />
        </TodayDiscountContentDiv>
    );
};

export default TodayDiscountContent;