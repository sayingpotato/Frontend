import { useEffect, useState } from "react";
import guestService from "services/guest.service";

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

const useGetOwnerInfo = () => {
    const [data, setData] = useState(""); 
    const whoStatus = useRecoilValue(WhoStatus);
    
    useEffect(() => {
        const getInfo = async() => {
            if (whoStatus === "owner") {
                const fetchData = await guestService.getOwnerInfo();
                setData(fetchData);
            }
    }

    getInfo();
    }, []);
    
    return data;
}

export default useGetOwnerInfo;