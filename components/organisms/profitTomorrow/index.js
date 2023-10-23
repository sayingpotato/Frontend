import React from 'react';
import { useEffect, useState } from "react";

import useGetProfitTomorrow from '@hooks/useGetProfitTomorrow';

const ProfitTomorrow = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getProfitTomorrow = useGetProfitTomorrow(storeId);

    useEffect(() => { 
        setData(getProfitTomorrow); 
    },[getProfitTomorrow]);


    return (
        <>
            <p>totalCount</p>
            <h1>{data.totalCount}</h1>
            <p>averageCount</p>
            <h1>{data.averageCount}</h1>
            <p>totalPrice</p>
            <h1>{data.totalPrice}</h1>
            <p>averagePrice</p>
            <h1>{data.averagePrice}</h1>
        </>
    )
}

export default ProfitTomorrow