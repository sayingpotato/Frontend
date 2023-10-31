import Router, { useRouter } from 'next/router';
import { useState } from 'react';

import DailyItem from '@components/organisms/dailyItem';
import DailyItemTomorrow from '@components/organisms/dailyItemTomorrow';
import Profit from '@components/organisms/profit';
import ProfitTomorrow from '@components/organisms/profitTomorrow';
import Title from '@components/molecules/title';
import Line from '@components/line';
import InlineButton from "@molecules/inlineButton"

const Prediction = () => {

    const router = useRouter();
    const id = router.query.id;

    const [type, setType] = useState("todayPrediction");
    const [titleText, setTitleText] = useState("오늘 우리 가게는...");

    const todayPredictionClick = () => {
        setType("todayPrediction")
        setTitleText("오늘 우리 가게는...")
    }

    const tommorowPredictionClick = () => {
        setType("tommorowPrediction")
        setTitleText("내일 우리 가게는...")
    }

    return (
        <>
            <Title text={titleText} />
            <InlineButton textOne="오늘" textTwo="내일" 
                textOneClassName="typeTodayPrediction" textTwoClassName="typeTommorowPrediction"
                textOneOnClick={todayPredictionClick} textTwoOnClick={tommorowPredictionClick}
                state={type}
                divClassName="center"
            />

            {type === "todayPrediction" ? (
                <>
                    <DailyItem id={id} />
                    <Line />
                    <Profit id={id} />
                </>
            ) : (
                <>
                    <DailyItemTomorrow id={id} />
                    <Line />
                    <ProfitTomorrow id={id} />
                </>
            )}
        </>
    )
}

export default Prediction