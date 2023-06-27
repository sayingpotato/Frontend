import guestService from "services/guest.service";
import { useSetRecoilState } from "recoil";
import { LoginStatus } from "@utils/recoil/atom";
import Router from "next/router";
import { setCookie } from "@utils/cookie";

const useLogin = (id, pw) => {
    const setLoginStatus = useSetRecoilState(LoginStatus);

    const login = async () => {
        const { data } = await guestService.login({
            loginId: id,
            password: pw,
        });
        
        if (!data) {
            console.log("다시 입력해주세요");
            return ;
        }

        if  (data.customerStatus === "COMPLETE") {
            Router.push("register/student");
            return;
        } 
        Router.push("map");
        setLoginStatus(true);
        setCookie('accessToken', data.accessToken, {
            path: '/'
        }); 
    }

    return login;
}

export default useLogin;
