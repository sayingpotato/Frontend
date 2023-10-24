import React from 'react';
import { useEffect, useState } from "react";

import useGetProfit from '@hooks/useGetProfit';
import {
    WholeDiv,
    SemiDiv,
    Div,
} from './style'
import Text from '@components/atoms/text';

const Profit = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getProfit = useGetProfit(storeId);

    useEffect(() => { 
        setData(getProfit); 
    },[getProfit]);


    return (
        <WholeDiv>
            <SemiDiv>
                <Div>
                    <Text text="총 판매 개수" className="predictionTitle" />
                    <Text text={data.totalCount} className="predictionContent" />
                </Div>

                <Div>
                    <Text text="평균 판매 개수" className="predictionTitle" />
                    <Text text={data.averageCount} className="predictionContent" />
                </Div>
            </SemiDiv>

            <SemiDiv>
                <Div>
                    <Text text="총 금액" className="predictionTitle" />
                    <Text text={data.totalPrice} className="predictionContent" />
                </Div>

                <Div>
                    <Text text="평균 금액" className="predictionTitle" />
                    <Text text={data.averagePrice} className="predictionContent" />
                </Div>
            </SemiDiv>
            
        </WholeDiv>
    )
}

export default Profit