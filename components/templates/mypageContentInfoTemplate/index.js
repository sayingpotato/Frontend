import { MypageContentInfoTemplateDiv  } from './style';

import MypageDiscountInfo from "@organisms/mypageDiscountInfo"
import MypageUserInfo from '@templates/mypageUserInfoTemplates';
import MypageLinkButtons from '@organisms/mypageLinkButtons';

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

const MypageContentInfoTemplate = ({info, discountData, discountDataDetail}) => {
  const whoStatus = useRecoilValue(WhoStatus);
    
  return (
    <>
      {
        whoStatus === "customer" ? <MypageUserInfo name={info.nickname} totalMoney={discountData.totalDiscountPrice}/> : <MypageUserInfo name={info.nickname} totalMoney={0}/>
      }
      
      <MypageContentInfoTemplateDiv>
          {
            whoStatus === "customer" ? <MypageDiscountInfo discountDataDetail={discountDataDetail} /> : null
          }
          <MypageLinkButtons info={info} />
      </MypageContentInfoTemplateDiv>
    </>
      
  );
};

export default MypageContentInfoTemplate;