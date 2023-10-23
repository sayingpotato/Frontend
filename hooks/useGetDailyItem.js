import { useEffect, useState } from "react";
import predictionService from "services/prediction.service";

const useGetDailyItem = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDailyItem = async() => {
            if (id !== undefined) {
                const fetchData = await predictionService.getDailyItem(id);
                setData(fetchData);
            }
        }

        getDailyItem();
    }, [id]);
    
    return data;
}

export default useGetDailyItem;