import { useEffect, useState, useRef } from 'react'
import Router, { useRouter } from 'next/router'
import useGetStoreDetail from '@hooks/useGetStoreDetail';
import StoredetailTemplate from '@templates/storedetailTemplate'

import {  } from './style'; 
import { GiConsoleController } from 'react-icons/gi';

const Storedetail = () => {

    const router = useRouter();

    const id = router.query.id;
    const [data, setData] = useState("");
    const getStoreDetail = useGetStoreDetail(id);

    useEffect(() => { 
        setData(getStoreDetail); 
    },[getStoreDetail]);

    return (
        <div>
            {data && <div>
                {/* <div>{data.name}</div> */}
                <StoredetailTemplate data={data}/>
            </div>}
        </div>
    );
};

export default Storedetail;