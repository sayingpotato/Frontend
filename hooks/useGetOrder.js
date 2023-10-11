import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetOrder = () => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getOrder = async() => {
        const fetchData = await storeService.getOrder();
        setData(fetchData);
    }

    getOrder();
    }, []);
    
    return data;
}

export default useGetOrder;