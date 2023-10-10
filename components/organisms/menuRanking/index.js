import { MenuRankingDiv } from './style';
import ImageText from "@molecules/imageText"

const MenuRanking = ({menuTopArr}) => {
    return (
        <MenuRankingDiv>
            <ImageText divClassName="storeListMenuRanking" src="images/goldMedal.svg" alt="images/goldMedal.svg" text={menuTopArr.firstGradeItemName} textClassName="reviewMenuName"/>
            <ImageText divClassName="storeListMenuRanking" src="images/silverMedal.svg" alt="images/silverMedal.svg" text={menuTopArr.secondGradeItemName} textClassName="reviewMenuName"/>
            <ImageText divClassName="storeListMenuRanking" src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text={menuTopArr.thirdGradeItemName} textClassName="reviewMenuName"/>
        </MenuRankingDiv>
    );
};

export default MenuRanking;