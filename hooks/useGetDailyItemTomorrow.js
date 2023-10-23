import { useEffect, useState } from "react";
import predictionService from "services/prediction.service";

const useGetDailyItemTomorrow = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDailyItemTomorrow = async() => {
            if (id !== undefined) {
                const fetchData = await predictionService.getDailyItemTomorrow(id);
                setData(fetchData);
            }
        }

        getDailyItemTomorrow();
    }, [id]);
    
    return data;
}

export default useGetDailyItemTomorrow;