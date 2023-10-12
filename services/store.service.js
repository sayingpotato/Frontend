import { storeApi } from "api"

const getDailyDiscountStore = async(date) => {
    try {
        const data = await storeApi.getDailyDiscountStore(date);
        return data;
    } catch (error) {
        throw error;
    }
}

const getMapStoreList = async(latitude, longtitude) => {
    try {
        const data = await storeApi.getMapStoreList(latitude, longtitude);
        return data;
    } catch (error) {
        throw error;
    }
}

const getStoreDetail = async(id) => {
    try {
        const data = await storeApi.getStoreDetail(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getSurroundStoreList = async(latitude, longtitude) => {
    try {
        const data = await storeApi.getSurroundStoreList(latitude, longtitude);
        return data;
    } catch (error) {
        throw error;
    }
}

const submitOrder = async(form) => {
    try {
        const data = await storeApi.submitOrder(form);
        return data;
    } catch (error) {
        throw error;
    }
}

const submitReview = async(review) => {
    try {
        const data = await storeApi.submitReview(review);
        return data;
    } catch (error) {
        throw error;
    }
}

const getOrder = async() => {
    try {
        const data = await storeApi.getOrder();
        return data;
    } catch (error) {
        throw error;
    }
}

const getSearchList = async(searchKey) => {
    try {
        const data = await storeApi.getSearchList(searchKey);
        return data;
    } catch (error) {
        throw error;
    }
}

const getDiscountTotal = async() => {
    try {
        const data = await storeApi.getDiscountTotal();
        return data;
    } catch (error) {
        throw error;
    }
}

const getOwnerStoreList = async() => {
    try {
        const data = await storeApi.getOwnerStoreList();
        return data;
    } catch (error) {
        throw error;
    }
}

const getOwnerOrder = async(id) => {
    try {
        const data = await storeApi.getOwnerOrder(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const storeService = {
    getDailyDiscountStore,
    getMapStoreList,
    getStoreDetail,
    getSurroundStoreList,
    submitOrder,
    submitReview,
    getOrder,
    getSearchList,
    getDiscountTotal,
    getOwnerStoreList,
    getOwnerOrder
}

export default storeService;