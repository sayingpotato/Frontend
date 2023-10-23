import { useEffect, useState } from "react";
import predictionService from "services/prediction.service";

const useGetProfitTomorrow = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getProfitTomorrow = async() => {
            if (id !== undefined) {
                const fetchData = await predictionService.getProfitTomorrow(id);
                setData(fetchData);
            }
        }

        getProfitTomorrow();
    }, [id]);
    
    return data;
}

export default useGetProfitTomorrow;