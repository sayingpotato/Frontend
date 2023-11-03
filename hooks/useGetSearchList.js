import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetSearchList = (searchKeyword) => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getSearchList = async() => {
            if (searchKeyword !== undefined) {
                const fetchData = await storeService.getSearchList(searchKeyword);
                setData(fetchData);
            }
        }

        getSearchList();
    }, [searchKeyword]);
    
    return data;
}

export default useGetSearchList;