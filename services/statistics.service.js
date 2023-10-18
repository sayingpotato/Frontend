import {statisticsApi} from "api"

const getDailyProfit = async(id) => {
    try {
        const data = await statisticsApi.getDailyProfit(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getDailyRevenue = async(id) => {
    try {
        const data = await statisticsApi.getDailyRevenue(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getMonthlyProfit = async(id) => {
    try {
        const data = await statisticsApi.getMonthlyProfit(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getWeekItem = async(id) => {
    try {
        const data = await statisticsApi.getWeekItem(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const statisticsService = {
    getDailyProfit,
    getDailyRevenue,
    getMonthlyProfit,
    getWeekItem
}

export default statisticsService;