import { useEffect, useState, useRef } from 'react'

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

import Title from '@molecules/title';
import MypageContentInfoTemplate from '@components/templates/mypageContentInfoTemplate';
import useGetInfo from '@hooks/useGetInfo';
import useGetOwnerInfo from '@hooks/useGetOwnerInfo';
import useGetDiscountTotal from '@hooks/useGetDiscountTotal';
import useGetDiscountDetail from '@hooks/useGetDiscountDetail';

const Mypage = () => {

  const whoStatus = useRecoilValue(WhoStatus);

  const [userInfo, setUserInfo] = useState("");
  const [discountInfo, setDiscountInfo] = useState("");
  const [discountDetail, setDiscountDetail] = useState("");

  const getInfo = useGetInfo();
  const getDiscountTotal = useGetDiscountTotal();
  const getDiscountDetail = useGetDiscountDetail();

  const getOwnerInfo = useGetOwnerInfo();

  useEffect(() => { 
    if (whoStatus === "customer") {
      setUserInfo(getInfo); 
      setDiscountInfo(getDiscountTotal);
      setDiscountDetail(getDiscountDetail)
    } else {
      setUserInfo(getOwnerInfo); 
      // setDiscountInfo("");
      // setDiscountDetail("")
    }
    

  },[getInfo, getDiscountTotal, getDiscountDetail, getOwnerInfo]);

  return (
    <>
      <Title text="마이페이지" />
      {
        whoStatus === "customer" ?
        (
          <MypageContentInfoTemplate info={userInfo} discountData={discountInfo} discountDataDetail={discountDetail} />
        ) :
        (
          <MypageContentInfoTemplate info={userInfo} discountData={0} discountDataDetail={0} />
        )
      }
      
    </>
  )
}

export default Mypage
