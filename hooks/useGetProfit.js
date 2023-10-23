import { useEffect, useState } from "react";
import predictionService from "services/prediction.service";

const useGetProfit = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getProfit = async() => {
            if (id !== undefined) {
                const fetchData = await predictionService.getProfit(id);
                setData(fetchData);
            }
        }

        getProfit();
    }, [id]);
    
    return data;
}

export default useGetProfit;