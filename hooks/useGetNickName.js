import { useEffect, useState } from "react";
import guestService from "services/guest.service";

const useGetNickName = () => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getNickName = async() => {
        const fetchData = await guestService.getNickName();
        setData(fetchData);
    }

    getNickName();
    }, []);
    
    return data;
}

export default useGetNickName;