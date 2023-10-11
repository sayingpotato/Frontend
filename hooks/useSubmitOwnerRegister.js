import guestService from "services/guest.service";
import { useRecoilValue } from "recoil";
import { RegisterOwnerInfo } from "@utils/recoil/atom";

const useSubmitOwnerRegister = () => {
    const registerOwnerInfo = useRecoilValue(RegisterOwnerInfo);
    
    const submitRegister = async() => {
        const data = await guestService.submitOwnerRegister(registerOwnerInfo);
        return data;
    }

    return submitRegister;
}

export default useSubmitOwnerRegister;

