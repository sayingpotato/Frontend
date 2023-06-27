import storeService from "services/store.service";
import { useEffect, useState } from "react";

const useGetSurroundStoreList = (latitude, longtitude) => {
    const [data, setData] = useState("");

   useEffect(() => {
    const getList = async() => {
        if (latitude !== undefined) {
        const data = await storeService.getSurroundStoreList(latitude, longtitude);
        setData(data);
        }
    }
    getList();
   },[latitude, longtitude]);
   
    return data;
}

export default useGetSurroundStoreList;