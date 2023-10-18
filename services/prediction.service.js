import {predictionApi} from "api"

const getDailyItem = async(id) => {
    try {
        const data = await statisticsApi.getWeekItem(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getDailyItemTomorrow = async(id) => {
    try {
        const data = await statisticsApi.getWeekItem(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getProfit = async(id) => {
    try {
        const data = await statisticsApi.getWeekItem(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getProfitTomorrow = async(id) => {
    try {
        const data = await statisticsApi.getWeekItem(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const predictionService = {
    getDailyItem,
    getDailyItemTomorrow,
    getProfit,
    getProfitTomorrow
}

export default predictionService;