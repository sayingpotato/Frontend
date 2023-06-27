import guestService from "services/guest.service"; 

const useSubmitStudentCard = (image) => { 
    
    const submitStudentCard = async() => {
        const data = await guestService.submitStudentCard(image);
        return data;
    }

    return submitStudentCard;
}

export default useSubmitStudentCard;

