import {statisticsApi} from "api"

const getDailyProfit = async(id) => {
    try {
        const data = await statisticsApi.getDailyProfit(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const statisticsService = {
    getDailyProfit
}

export default statisticsService;