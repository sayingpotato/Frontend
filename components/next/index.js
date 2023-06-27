import { NextComponent } from "./style"
import router from "next/router";
import { useRecoilState } from "recoil";
import {RegisterInfo, StudentCard} from "@utils/recoil/atom";
import useSubmitRegister from "@hooks/useSubmitRegister";
import { useEffect, useState } from "react";
import useSubmitStudentCard from "@hooks/useSubmitStudentCard";

export default function Next({ state, input, nextView}){
    const [registerInfo, setRegisterInfo] = useRecoilState(RegisterInfo);
    const [imageSource, setImageSource] = useRecoilState(StudentCard);
    const submit = useSubmitRegister();
    const submitStudentCard = useSubmitStudentCard(imageSource);
    const [post, setPost] = useState(0);

    useEffect(() => {
        if (post) {
            submit();
        };
    },[post])

    const onClickNextButton = () => {
        if (state === 2){
            switch (nextView) {
                case "agree": router.push(`/register/auth/${nextView}`)
                              break;
                case "id":   router.push(`/register/info/${nextView}`)
                            break;
                case "pw": setRegisterInfo({...registerInfo, loginId : input})
                           router.push(`/register/info/${nextView}`)
                           break;
                case "nickname" : setRegisterInfo({...registerInfo, password : input})
                                  router.push(`/register/info/${nextView}`)
                                  break;
                case "student" : setRegisterInfo({...registerInfo, nickname : input})
                                 setPost(post + 1);
                                 router.push(`/login`)
                                 break;
                case "login" :  
                console.log(typeof(input)) 
                                submitStudentCard()
                                router.push(`/login`)
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