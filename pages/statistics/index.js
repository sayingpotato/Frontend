import Router, { useRouter } from 'next/router';

import DailyProfit from '@components/organisms/dailyProfit';
import DailyRevenue from '@components/organisms/dailyRevenue';
import MonthlyProfit from '@components/organisms/monthlyProfit';
import WeekItem from '@components/organisms/weekItem';

const Statistics = () => {

    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <DailyProfit id={id} />
            <DailyRevenue id={id} />
            <MonthlyProfit id={id} />
            <WeekItem id={id} />
        </>
    )
}

export default Statistics