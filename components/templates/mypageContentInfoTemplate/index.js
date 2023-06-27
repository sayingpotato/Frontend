import { MypageContentInfoTemplateDiv  } from './style';

import MypageDiscountInfo from "@organisms/mypageDiscountInfo"
import MypageUserInfo from '@templates/mypageUserInfoTemplates';
import MypageLinkButtons from '@organisms/mypageLinkButtons';

const MypageContentInfoTemplate = ({name, totalMoney, discountData}) => {
    
  return (
    <>
      <MypageUserInfo name={name} totalMoney={totalMoney}/>
      <MypageContentInfoTemplateDiv>
          <MypageDiscountInfo discountData={discountData} />
          <MypageLinkButtons />
      </MypageContentInfoTemplateDiv>
    </>
      
  );
};

export default MypageContentInfoTemplate;