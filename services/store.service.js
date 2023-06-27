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

const storeService = {
    getDailyDiscountStore,
    getMapStoreList,
    getStoreDetail,
    getSurroundStoreList
}

export default storeService;