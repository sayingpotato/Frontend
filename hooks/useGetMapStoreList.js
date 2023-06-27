import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetMapStoreList = (latitude, longitude) => {
    const [data, setData] = useState("");

    useEffect(() => {
        const getMapStoreList = async() => {
            if (latitude && longitude) {
                const fetchData = await storeService.getMapStoreList(latitude, longitude);
                setData(fetchData);
            }   
        }
        getMapStoreList();
    }, [latitude, longitude]);
   
    return data;
}

export default useGetMapStoreList;