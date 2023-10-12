import guestService from "services/guest.service";
import { useSetRecoilState } from "recoil";
import { LoginOwnerStatus, WhoStatus } from "@utils/recoil/atom";
import Router from "next/router";
import { setCookie } from "@utils/cookie";

const useOwnerLogin = (id, pw) => {
    const setLoginStatus = useSetRecoilState(LoginOwnerStatus);
    const setWhoStatus = useSetRecoilState(WhoStatus);

    const login = async () => {
        setWhoStatus("");
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
        setWhoStatus("owner");
        setCookie('accessToken', data.accessToken, {
            path: '/'
        }); 
    }

    return login;
}

export default useOwnerLogin;
