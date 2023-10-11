import guestService from "services/guest.service"; 

const useSubmitStudentCard = (image) => { 

    let imageValue = new FormData();
    imageValue.append("image", image);
    
    const submitStudentCard = async() => {
        const data = await guestService.submitStudentCard(imageValue);
        return data;
    }

    return submitStudentCard;
}

export default useSubmitStudentCard;

