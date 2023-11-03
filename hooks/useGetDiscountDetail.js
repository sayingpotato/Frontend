import { useEffect, useState } from "react";
import guestService from "services/guest.service";

const useGetDiscountDetail = () => {
    const [data, setData] = useState(""); 
    
    useEffect(() => {
        const getDiscountDetail = async() => {
        const fetchData = await guestService.getDiscountDetail();
        setData(fetchData);
    }

    getDiscountDetail();
    }, []);
    
    return data;
}

export default useGetDiscountDetail;