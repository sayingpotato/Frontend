import storeService from "services/store.service"; 
import { useRecoilValue } from "recoil";
import { ReviewData } from "@utils/recoil/atom";

const useSubmitReview = () => { 
    const reviewData = useRecoilValue(ReviewData);

    const submitReview = async() => {
        let data = '';
        if (reviewData !== '') {
            data = await storeService.submitReview(reviewData);
        }
        
        return data;
    }

    return submitReview;
}

export default useSubmitReview;

