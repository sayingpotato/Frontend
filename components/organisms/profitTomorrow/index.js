import React from 'react';
import { useEffect, useState } from "react";

import {
    WholeDiv,
    SemiDiv,
    Div,
} from './style'
import Text from '@components/atoms/text';

import useGetProfitTomorrow from '@hooks/useGetProfitTomorrow';

const ProfitTomorrow = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getProfitTomorrow = useGetProfitTomorrow(storeId);

    useEffect(() => { 
        setData(getProfitTomorrow); 
    },[getProfitTomorrow]);

    const totalCountText = data && data.totalCount + "건";
    const averageCountText = data && data.averageCount + "건";
    const totalPriceText = data && data.totalPrice.toLocaleString() + "원";
    const averagePriceText = data && data.averagePrice.toLocaleString() + "원";

    return (
        <WholeDiv>
            <SemiDiv>
                <Div>
                    <Text text="총 판매 개수" className="predictionTitle" />
                    <Text text={totalCountText} className="predictionContent" />
                </Div>

                <Div>
                    <Text text="평균 판매 개수" className="predictionTitle" />
                    <Text text={averageCountText} className="predictionContent" />
                </Div>
            </SemiDiv>

            <SemiDiv>
                <Div>
                    <Text text="총 금액" className="predictionTitle" />
                    <Text text={totalPriceText} className="predictionContent" />
                </Div>

                <Div>
                    <Text text="평균 금액" className="predictionTitle" />
                    <Text text={averagePriceText} className="predictionContent" />
                </Div>
            </SemiDiv>
            
        </WholeDiv>
    )
}

export default ProfitTomorrow