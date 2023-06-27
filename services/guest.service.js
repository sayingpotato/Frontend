import {guestApi} from "api"

const login = async (form) => {
    try {
        const data = await guestApi.login(form);
        return data;
    } catch (error) {
        throw error;
    }
}

const checkSameId = () => {
    
}

const submitRegister = async(form) => {
    try {
        const data = await guestApi.submitRegister(form);
        return data;
    } catch (error) {
        throw error;
    } 
}

const submitStudentCard = async(form) => {
    try {
        const data = await guestApi.submitStudentCard(form);
        return data;
    } catch (error) {
        throw error;
    } 
}

const guestService = {
    login,
    checkSameId,
    submitRegister,
    submitStudentCard
}

export default guestService;