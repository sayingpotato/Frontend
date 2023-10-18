import { useEffect, useState } from "react";
import statisticsService from "services/statistics.service";

const useGetDailyRevenue = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDailyRevenue = async() => {
            if (id !== undefined) {
                const fetchData = await statisticsService.getDailyRevenue(id);
                setData(fetchData);
            }
        }

        getDailyRevenue();
    }, [id]);
    
    return data;
}

export default useGetDailyRevenue;