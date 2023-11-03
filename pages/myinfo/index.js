import { useEffect, useState } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

import { useRouter } from 'next/router';

import Back from "@components/back";
import Line from "@components/line";

import CustomerInfoForm from "@components/organisms/customerInfoForm";
import OwnerInfoForm from "@components/organisms/ownerInfoForm";

const MyInfo = () => {
    const whoStatus = useRecoilValue(WhoStatus);
    const router = useRouter();
    
    const loginId = router.query.loginId;
    const nickname = router.query.nickname;
    const ownerBusinessNumber = WhoStatus === "owner" ? router.query.ownerBusinessNumber : ""
    const customerNumber = WhoStatus === "customer" ? router.query.customerNumber : ""
    const customerDept = WhoStatus === "customer" ? router.query.customerDept : ""
    const customerCollege = WhoStatus === "customer" ? router.query.customerCollege : ""
    const customerGrade = WhoStatus === "customer" ? router.query.customerGrade : ""

    return (
        <>
            <Back/>
            <Line />
            {
                whoStatus === "customer" ? 
                    <CustomerInfoForm loginId={loginId} nickname={nickname} customerCollege={customerCollege} customerGrade={customerGrade} customerNumber={customerNumber} customerDept={customerDept} /> 
                    : <OwnerInfoForm loginId={loginId} nickname={nickname} ownerBusinessNumber={ownerBusinessNumber} />
            }
        </>
    )
}

export default MyInfo