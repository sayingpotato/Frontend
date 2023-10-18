import fetcher from "api/fetcher";

const getDailyProfit = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/profit?storeId=${id}`
    );
    return data.data;
}

const getDailyRevenue = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/revenue?storeId=${id}`
    );
    return data.data;
}

const getMonthlyProfit = async(id) => {
    const {data} = await fetcher.get(
        `/api/v1/statistics/monthly/profit?storeId=${id}`
    );
    return data.data;
}

const getWeekItem = async(id) => {
    const {data} = await fetcher.get(
        `/api/v1/statistics/week/item?storeId=${id}`
    );
    return data.data;
}

const statistics = {
    getDailyProfit,
    getDailyRevenue,
    getMonthlyProfit,
    getWeekItem
}

export default statistics;