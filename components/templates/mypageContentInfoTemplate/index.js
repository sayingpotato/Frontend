import { MypageContentInfoTemplateDiv  } from './style';

import MypageDiscountInfo from "@organisms/mypageDiscountInfo"
import MypageUserInfo from '@templates/mypageUserInfoTemplates';
import MypageLinkButtons from '@organisms/mypageLinkButtons';

const MypageContentInfoTemplate = ({name, discountData}) => {
    
  return (
    <>
      <MypageUserInfo name={name} totalMoney={discountData.totalDiscountPrice}/>
      <MypageContentInfoTemplateDiv>
          <MypageDiscountInfo discountData={discountData} />
          <MypageLinkButtons />
      </MypageContentInfoTemplateDiv>
    </>
      
  );
};

export default MypageContentInfoTemplate;