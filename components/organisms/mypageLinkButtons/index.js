import { useRouter } from 'next/router';

import Button from '@atoms/button'
import Text from '@atoms/text';
import ImageText from '@molecules/imageText'

const ImageLists = [
    { image: 'images/modify.svg', title: '프로필 수정', path: 'modify' },
    { image: 'images/notice.svg', title: '공지사항', path: 'notice' },
    { image: 'images/medal.svg', title: '내 랭킹 보기', path: 'myrank' },
    { image: 'images/chart.svg', title: '통계 보기', path: 'mychart' },
    { image: 'images/call.svg', title: '고객센터', path: 'service' }
]

const MypageLinkButtons = () => {
    const router = useRouter();

    const handleButtonClick = (path) => {
        router.push(path);
    };

    return (
        <>
        {ImageLists.map((item, index) => {
        return (
            <Button key={index} className="mypageButtons" onClick={() => handleButtonClick(item.path)}>
                <ImageText text={item.title} src={item.image} divClassName="mypageButtonsDiv" textClassName="mypageButtonsName"/>
            </Button>   
        )})}
        <Button className="mypageButtons" onClick={() => handleButtonClick("login")}>
            <Text text="로그아웃" className="mypageButtonsLogoutName"/>
        </Button>
        </>
    );
};

export default MypageLinkButtons;