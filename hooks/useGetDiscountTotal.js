import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetDiscountTotal = () => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDiscountTotal = async() => {
        const fetchData = await storeService.getDiscountTotal();
        setData(fetchData);
    }

    getDiscountTotal();
    }, []);
    
    return data;
}

export default useGetDiscountTotal;