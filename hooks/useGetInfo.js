import { useEffect, useState } from "react";
import guestService from "services/guest.service";

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

const useGetInfo = () => {
    const [data, setData] = useState(""); 
    const whoStatus = useRecoilValue(WhoStatus);
    
    useEffect(() => {
        const getInfo = async() => {
            if (whoStatus === "customer") {
                const fetchData = await guestService.getInfo();
                setData(fetchData);
            }
    }

    getInfo();
    }, []);
    
    return data;
}

export default useGetInfo;