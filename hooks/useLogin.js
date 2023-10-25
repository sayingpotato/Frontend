import guestService from "services/guest.service";
import { useSetRecoilState } from "recoil";
import { LoginStatus, WhoStatus } from "@utils/recoil/atom";
import Router from "next/router";
import { setCookie } from "@utils/cookie";

const useLogin = (id, pw) => {
    const setLoginStatus = useSetRecoilState(LoginStatus);
    const setWhoStatus = useSetRecoilState(WhoStatus);

    const login = async () => {
        setWhoStatus("");
        const { data } = await guestService.login({
            loginId: id,
            password: pw,
        });
        
        if (!data) {
            return ;
        }

        // 학생증 체크
        if  (data.customerStatus === "UNAUTHORIZED") {
            Router.push("register/student");
        } else {
            Router.push("map");
        }

        setLoginStatus(true);
        setWhoStatus("customer");
        setCookie('accessToken', data.accessToken, {
            path: '/'
        }); 
    }

    return login;
}

export default useLogin;
