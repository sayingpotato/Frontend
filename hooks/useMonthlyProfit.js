import { useEffect, useState } from "react";
import statisticsService from "services/statistics.service";

const useGetMonthlyProfit = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getMonthlyProfit = async() => {
            if (id !== undefined) {
                const fetchData = await statisticsService.getMonthlyProfit(id);
                setData(fetchData);
            }
        }

        getMonthlyProfit();
    }, [id]);
    
    return data;
}

export default useGetMonthlyProfit;