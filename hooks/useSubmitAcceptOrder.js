import storeService from "services/store.service"; 
import { useRecoilValue } from "recoil";
import { StoreId } from "@utils/recoil/atom";

const useSubmitAcceptOrder = (id) => { 

    const storeId = useRecoilValue(StoreId)

    const submitAcceptOrder = async() => {
        const data = await storeService.submitAcceptOrder(storeId);
        return data;
    }

    return submitAcceptOrder;
}

export default useSubmitAcceptOrder;

