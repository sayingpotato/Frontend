import { NextComponent } from "./style"
import router from "next/router";
import { useRecoilState } from "recoil";
import {RegisterInfo, RegisterOwnerInfo, StudentCard} from "@utils/recoil/atom";
import useSubmitRegister from "@hooks/useSubmitRegister";
import useSubmitOwnerRegister from "@hooks/useSubmitOwnerRegister";
import { useEffect, useState } from "react";
import useSubmitStudentCard from "@hooks/useSubmitStudentCard";


export default function Next({ state, input, nextView}){
    const [registerInfo, setRegisterInfo] = useRecoilState(RegisterInfo);
    const [registerOwnerInfo, setRegisterOwnerInfo] = useRecoilState(RegisterOwnerInfo);
    const [imageSource, setImageSource] = useRecoilState(StudentCard);
    const submit = useSubmitRegister();
    const ownerSubmit = useSubmitOwnerRegister();
    const submitStudentCard = useSubmitStudentCard(imageSource);
    const [post, setPost] = useState(0);
    const [ownerPost, setOwnerPost] = useState(0);

    useEffect(() => {
        if (post) {
            submit();
        };

        if (ownerPost) {
            ownerSubmit();
        }
    },[post, ownerPost])

    const onClickNextButton = () => {
        if (state === 2){
            switch (nextView) {
                case "agree": router.push(`/register/auth/${nextView}`)
                        break;
                case "owneragree": router.push(`/register/auth/${nextView}`)
                        break;
                case "id":   router.push(`/register/info/${nextView}`)
                            break;
                case "ownerid":   router.push(`/register/info/${nextView}`)
                            break;
                case "pw": setRegisterInfo({...registerInfo, loginId : input})
                           router.push(`/register/info/${nextView}`)
                           break;
                case "ownerpw": setRegisterOwnerInfo({...registerOwnerInfo, loginId : input})
                            router.push(`/register/info/${nextView}`)
                            break;
                case "nickname" : setRegisterInfo({...registerInfo, password : input})
                                  router.push(`/register/info/${nextView}`)
                                  break;
                case "ownernickname" : setRegisterOwnerInfo({...registerOwnerInfo, password : input})
                                  router.push(`/register/info/${nextView}`)
                                  break;
                case "college" : setRegisterInfo({...registerInfo, nickname : input})
                                  router.push(`/register/info/${nextView}`)  
                                  break;
                case "student" :
                                submitStudentCard()
                                 router.push(`/login`)
                                 break;
                case "owner" : 
                    setRegisterOwnerInfo({...registerOwnerInfo, nickname : input})
                    router.push(`/register/info/${nextView}`)
                    break;
                case "ownerlogin" :
                    setRegisterOwnerInfo({...registerOwnerInfo, ownerBusinessNumber : String(input)})
                    setOwnerPost(ownerPost + 1);
                    router.push(`/ownerlogin`)
                    break;
                case "login" :  
                    setRegisterInfo({...registerInfo, customerNumber : input[0], customerDept : input[1], customerCollege : input[2]})
                                     setPost(post + 1);
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