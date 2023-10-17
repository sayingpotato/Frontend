import { useEffect, useState } from "react";
import statisticsService from "services/statistics.service";

const useGetDailyProfit = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDailyProfit = async() => {
            if (id !== undefined) {
                const fetchData = await statisticsService.getDailyProfit(id);
                setData(fetchData);
            }
        }

        getDailyProfit();
    }, [id]);
    
    return data;
}

export default useGetDailyProfit;