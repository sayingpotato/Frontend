import { TodayDiscountHeaderDiv } from './style';

import InlineButton from "@molecules/inlineButton"
import DayInfo from "@organisms/dayInfo"

const TodayDiscountHeader = ({FoodOnClick, CafeOnClick, state, prevDay, nowDay, nextDay}) => {
    return (
        <TodayDiscountHeaderDiv>
            <InlineButton text1="식당" text2="카페" 
                text1ClassName="typeCafeButton" text2ClassName="typeFoodButton"
                text1OnClick={FoodOnClick} text2OnClick={CafeOnClick}
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