import { MypageUserInfoDiv } from './style';

import Text from '@atoms/text';
import Title from '@molecules/title';
import ImageText from '@molecules/imageText';

const MypageUserInfoTemplates = ({name, totalMoney}) => {
    const userName = `${name}님`;

    return (
        <MypageUserInfoDiv>
            <Title text={userName} className="mypageName" />
            <div>
                <Text text="할인 금액" className="mypageMoneyTitle" />
                <ImageText imageClassName="mypageMoneyIcon" divClassName="basic" text={totalMoney} src="images/coin.svg" alt="images/coin.svg" textClassName="mypageMoneyTotal" />
            </div>
        </MypageUserInfoDiv>
    );
};

export default MypageUserInfoTemplates;