import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetOwnerStoreList = () => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getOwnerStoreList = async() => {
        const fetchData = await storeService.getOwnerStoreList();
        setData(fetchData);
    }

    getOwnerStoreList();
    }, []);
    
    return data;
}

export default useGetOwnerStoreList;