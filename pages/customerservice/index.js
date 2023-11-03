import { useEffect, useState } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";

import { Div, WholeDiv, TelDiv } from '../../styles/customerservice/style'

import Back from "@components/back";
import Line from "@components/line";

import Text from "@components/atoms/text";
import Title from "@components/molecules/title";

const Customerservice = () => {
    return (
        <>
            <Back/>
            <Div>
                <Title text="고객 센터" />
                <WholeDiv>
                    <Text text="TEL" className="customerServiceTitle" />
                    <TelDiv>
                        <Text text="010-3005-2033" className="customerServiceContent" />
                        <Text text="010-3535-5909" className="customerServiceContent" />
                        <Text text="010-7412-9263" className="customerServiceContent" />
                    </TelDiv>
                </WholeDiv>
                <WholeDiv>
                    <Text text="이용 시간" className="customerServiceTitle" />
                    <Text text="10:00~18:00" className="customerServiceContent" />
                </WholeDiv>
                <WholeDiv>
                    <Text text="문의 사항" className="customerServiceTitle" />
                    <Text text="https://github.com/sayingpotato/Backend/issues" className="customerServiceContent" />
                </WholeDiv>
            </Div>
            <Line />
        </>
    )
}

export default Customerservice