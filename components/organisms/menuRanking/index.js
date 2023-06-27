import { MenuRankingDiv } from './style';
import ImageText from "@molecules/imageText"

const MenuRanking = () => {
    return (
        <MenuRankingDiv>
            <ImageText divClassName="storeListMenuRanking" src="images/goldMedal.svg" alt="images/goldMedal.svg" text="메뉴명" textClassName="reviewMenuName"/>
            <ImageText divClassName="storeListMenuRanking" src="images/silverMedal.svg" alt="images/silverMedal.svg" text="메뉴명" textClassName="reviewMenuName"/>
            <ImageText divClassName="storeListMenuRanking" src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text="메뉴명" textClassName="reviewMenuName"/>
        </MenuRankingDiv>
    );
};

export default MenuRanking;