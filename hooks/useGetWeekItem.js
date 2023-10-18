import { useEffect, useState } from "react";
import statisticsService from "services/statistics.service";

const useGetWeekItem = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getWeekItem = async() => {
            if (id !== undefined) {
                const fetchData = await statisticsService.getWeekItem(id);
                setData(fetchData);
            }
        }

        getWeekItem();
    }, [id]);
    
    return data;
}

export default useGetWeekItem;