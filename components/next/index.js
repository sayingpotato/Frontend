import { NextComponent } from "./style"
import router from "next/router";
import { useRecoilState } from "recoil";
import {RegisterInfo} from "@utils/atom"

export default function Next({ state, input, nextView}){
    const [registerInfo, setRegisterInfo] = useRecoilState(RegisterInfo);
    const onClickNextButton = () => {
        if (state === 2){
            switch (nextView) {
                case "agree": setRegisterInfo({auth : true})
                              router.push(`/register/auth/${nextView}`)
                              break;
                case "id":  setRegisterInfo({...registerInfo, agree : true})
                            router.push(`/register/info/${nextView}`)
                            break;
                case "pw": setRegisterInfo({...registerInfo, id : input})
                           router.push(`/register/info/${nextView}`)
                           break;
                case "nickname" : setRegisterInfo({...registerInfo, pw : input})
                                  router.push(`/register/info/${nextView}`)
                                  break;
                case "student" : setRegisterInfo({...registerInfo, nickname : input})
                                 router.push(`/register/student`)
                                 break;
            }
        }
    }
    return (    
        <NextComponent 
            onClick={onClickNextButton}
            state={state}>
            다음 단계
        </NextComponent>
    )
}