import { TodayDiscountHeaderDiv } from './style';

import InlineButton from "@molecules/inlineButton"
import DayInfo from "@organisms/dayInfo"

const TodayDiscountHeader = ({FoodOnClick, CafeOnClick, state, prevDay, nowDay, nextDay}) => {
    return (
        <TodayDiscountHeaderDiv>
            <InlineButton textOne="식당" textTwo="카페" 
                textOneClassName="typeCafeButton" textTwoClassName="typeFoodButton"
                textOneOnClick={FoodOnClick} textTwoOnClick={CafeOnClick}
                state={state}
                divClassName="center"
            />
            <DayInfo mainClassName='mainTitle' subClassName='subTitle' 
                prevDay={prevDay} nowDay={nowDay} nextDay={nextDay}
            />
        </TodayDiscountHeaderDiv>
    );
};

export default TodayDiscountHeader;
