import Router, { useRouter } from 'next/router';

import DailyProfit from '@components/organisms/dailyProfit';
import DailyRevenue from '@components/organisms/dailyRevenue';
import MonthlyProfit from '@components/organisms/monthlyProfit';
import WeekItem from '@components/organisms/weekItem';
import Title from '@components/molecules/title';
import Line from '@components/line';

const Statistics = () => {

    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <Title text="우리 가게 NOW" />
            <DailyProfit id={id} />
            <Line />
            <DailyRevenue id={id} />
            <Line />
            <MonthlyProfit id={id} />
            <Line />
            <WeekItem id={id} />
        </>
    )
}

export default Statistics