import guestService from "services/guest.service";
import { useSetRecoilState } from "recoil";
import { LoginOwnerStatus } from "@utils/recoil/atom";
import Router from "next/router";
import { setCookie } from "@utils/cookie";

const useOwnerLogin = (id, pw) => {
    const setLoginStatus = useSetRecoilState(LoginOwnerStatus);

    const login = async () => {
        const { data } = await guestService.ownerLogin({
            loginId: id,
            password: pw,
        });
        
        if (!data) {
            console.log("다시 입력해주세요");
            return ;
        }

        Router.push("map");

        setLoginStatus(true);
        setCookie('accessToken', data.accessToken, {
            path: '/'
        }); 
    }

    return login;
}

export default useOwnerLogin;
