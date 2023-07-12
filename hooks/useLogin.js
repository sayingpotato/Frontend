import guestService from "services/guest.service";
import { useSetRecoilState } from "recoil";
import { LoginStatus, Token } from "@utils/recoil/atom";
import Router from "next/router";

const useLogin = (id, pw) => {
    const setLoginStatus = useSetRecoilState(LoginStatus);
    const setToken = useSetRecoilState(Token);

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
        setToken(data.accessToken);
    }

    return login;
}

export default useLogin;
