import storeService from "services/store.service";
import { useEffect, useState } from "react";

const useGetSearchList = (searchKey) => {
    const [data, setData] = useState("");

   useEffect(() => {
        const getSearchList = async() => {
            if (searchKey !== "") {
                const fetchData = await storeService.getSearchList(searchKey);
                setData(fetchData);
            }   
        }
        getSearchList();
    }, [searchKey]);
   
    return data;
}

export default useGetSearchList;