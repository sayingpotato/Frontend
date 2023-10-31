import storeService from "services/store.service"; 
import { useRecoilValue } from "recoil";
import { OrderData } from "@utils/recoil/atom";

const useSubmitOrder = () => { 
    const orderData = useRecoilValue(OrderData);

    const submitOrder = async() => {
        let data = '';
        if (orderData !== '') {
            data = await storeService.submitOrder(orderData);
        }
        
        return data;
    }

    return submitOrder;
}

export default useSubmitOrder;

