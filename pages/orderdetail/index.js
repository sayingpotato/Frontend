import { useEffect, useState, useRef } from 'react'
import Router, { useRouter } from 'next/router'

import Title from '@components/title'
import useGetOwnerOrder from '@hooks/useGetOwnerOrder';
import OrderdetailTemplate from '@templates/orderdetailTemplate'

const Orderdetail = () => {

    const router = useRouter();

    const id = router.query.id;
    const storeName = router.query.storeName;
    const [data, setData] = useState("");
    const getOwnerOrder = useGetOwnerOrder(id);

    useEffect(() => { 
        setData(getOwnerOrder); 
    },[getOwnerOrder]);

    const title = "'" + storeName + "'" + " 주문 내역";

    return (
        <>
            <Title>{title}</Title>
            {data && data.map((oneData) => (
              <OrderdetailTemplate key={oneData.orderId} data={oneData} />
            ))}
        </>
    );
};

export default Orderdetail;