import { TodayDiscountContentDiv } from './style';

import ImageTitle from '@molecules/imageTitle'

const TodayDiscountContent = ({src, alt, text, onClick}) => {
    return (
        <TodayDiscountContentDiv>
            <ImageTitle onClick={onClick} imageClassName='todayDiscountLogoImage' textClassNameName='todayDiscountLogoName' src={src} alt={alt} text={text} />
        </TodayDiscountContentDiv>
    );
};

export default TodayDiscountContent;
