import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetStoreDetail = (id) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getStoreDetail = async() => {
        const fetchData = await storeService.getStoreDetail(id);
        setData(fetchData);
    }

    getStoreDetail();
    }, [id]);
    
    return data;
}

export default useGetStoreDetail;