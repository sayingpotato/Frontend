import { useEffect, useState, useRef } from 'react'

import Title from '@molecules/title';
import MypageContentInfoTemplate from '@components/templates/mypageContentInfoTemplate';
import useGetNickName from '@hooks/useGetNickName';
import useGetDiscountTotal from '@hooks/useGetDiscountTotal';

const Mypage = () => {

  const [userInfo, setUserInfo] = useState("");
  const [discountInfo, setDiscountInfo] = useState("");

  const getNickName = useGetNickName();
  const getDiscountTotal = useGetDiscountTotal();

  useEffect(() => { 
    setUserInfo(getNickName); 
    setDiscountInfo(getDiscountTotal);
  },[getNickName, getDiscountTotal]);

  return (
    <>
      <Title text="마이페이지" />
      <MypageContentInfoTemplate name={userInfo.nickname} discountData={discountInfo}/>
    </>
  )
}

export default Mypage
