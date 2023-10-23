import Router, { useRouter } from 'next/router';

import DailyItem from '@components/organisms/dailyItem';
import DailyItemTomorrow from '@components/organisms/dailyItemTomorrow';
import Profit from '@components/organisms/profit';
import ProfitTommorow from '@components/organisms/profitTomorrow';

const Prediction = () => {

    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <DailyItem id={id} />
            <DailyItemTomorrow id={id} />
            <Profit id={id} />
            <ProfitTommorow id={id} />
        </>
    )
}

export default Prediction