import {guestApi} from "api"

const login = async (form) => {
    try {
        const data = await guestApi.login(form);
        return data;
    } catch (error) {
        throw error;
    }
}

const ownerLogin = async (form) => {
    try {
        const data = await guestApi.ownerLogin(form);
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

const submitOwnerRegister = async(form) => {
    try {
        const data = await guestApi.submitOwnerRegister(form);
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

const getInfo = async() => {
    try {
        const data = await guestApi.getInfo();
        return data;
    } catch (error) {
        throw error;
    }
}

const getOwnerInfo = async() => {
    try {
        const data = await guestApi.getOwnerInfo();
        return data;
    } catch (error) {
        throw error;
    }
}

const getDiscountDetail = async() => {
    try {
        const data = await guestApi.getDiscountDetail();
        return data;
    } catch (error) {
        throw error;
    }
}

const guestService = {
    login,
    ownerLogin,
    checkSameId,
    submitRegister,
    submitOwnerRegister,
    submitStudentCard,
    getInfo,
    getOwnerInfo,
    getDiscountDetail
}

export default guestService;