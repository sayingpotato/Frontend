import { useRouter } from 'next/router';
import { useRecoilValue } from "recoil";

import Button from '@atoms/button'
import Text from '@atoms/text';
import ImageText from '@molecules/imageText'
import { useState } from 'react';
import { WhoStatus } from '@utils/recoil/atom';

const ImageLists = [
    { image: 'images/modify.svg', title: '나의 정보', path: 'myinfo' },
    // { image: 'images/notice.svg', title: '공지사항', path: 'notice' },
    // { image: 'images/medal.svg', title: '내 랭킹 보기', path: 'myrank' },
    // { image: 'images/chart.svg', title: '통계 보기', path: 'mychart' },
    { image: 'images/call.svg', title: '고객센터', path: 'customerservice' }
]

const MypageLinkButtons = (props) => {
    const router = useRouter();
    const whoStatus = useRecoilValue(WhoStatus);

    const handleButtonClick = (path) => {
        
        router.push({
            pathname: path,
            query: { 
                loginId : props.info.loginId, 
                nickname: props.info.nickname,
                ownerBusinessNumber: WhoStatus === "owner" ? props.info.ownerBusinessNumber : "",
                customerNumber : WhoStatus === "customer" ? props.info.customerNumber : "",
                customerDept : WhoStatus === "customer" ? props.info.customerDept : "",
                customerCollege : WhoStatus === "customer" ? props.info.customerCollege : "",
                customerGrade : WhoStatus === "customer" ? props.info.customerGrade : "",
            }
        });
    };

    return (
        <>
        {ImageLists.map((item, index) => {
        return (
            <Button key={index} className="mypageButtons" onClick={() => handleButtonClick(item.path)}>
                <ImageText text={item.title} src={item.image} divClassName="mypageButtonsDiv" textClassName="mypageButtonsName"/>
            </Button>   
        )})}
        <Button className="mypageButtons" onClick={() => handleButtonClick("who")}>
            <Text text="로그아웃" className="mypageButtonsLogoutName"/>
        </Button>
        </>
    );
};

export default MypageLinkButtons;