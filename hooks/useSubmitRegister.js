import guestService from "services/guest.service";
import { useRecoilValue } from "recoil";
import { RegisterInfo } from "@utils/recoil/atom";

const useSubmitRegister = () => {
    const registerInfo = useRecoilValue(RegisterInfo);
    
    const submitRegister = async() => {
        const data = await guestService.submitRegister(registerInfo);
        return data;
    }

    return submitRegister;
}

export default useSubmitRegister;

