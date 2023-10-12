import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetOwnerOrder = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getOwnerOrder = async() => {
        const fetchData = await storeService.getOwnerOrder(id);
        setData(fetchData);
    }

    getOwnerOrder();
    }, [id]);
    
    return data;
}

export default useGetOwnerOrder;