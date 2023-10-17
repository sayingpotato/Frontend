import storeService from "services/store.service"; 
import { useRecoilValue } from "recoil";
import { StoreId } from "@utils/recoil/atom";

const useSubmitRejectOrder = (id) => { 

    const storeId = useRecoilValue(StoreId)

    const submitRejectOrder = async() => {
        const data = await storeService.submitRejectOrder(storeId);
        return data;
    }

    return submitRejectOrder;
}

export default useSubmitRejectOrder;

