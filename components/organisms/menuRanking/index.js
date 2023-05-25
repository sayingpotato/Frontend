import { MenuRankingDiv } from './style';
import ImageText from "@molecules/imageText"

const MenuRanking = () => {
    return (
        <MenuRankingDiv>
            <ImageText src="images/goldMedal.svg" alt="images/goldMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
            <ImageText src="images/silverMedal.svg" alt="images/silverMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
            <ImageText src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
        </MenuRankingDiv>
    );
};

export default MenuRanking;