import fetcher from "api/fetcher";

const getDailyItem = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/item?storeId=${id}`
    );
    return data.data;
}

const getDailyItemTomorrow = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/item/tomorrow?storeId=${id}`
    );
    return data.data;
}

const getProfit = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/profit?storeId=${id}`
    );
    return data.data;
}

const getProfitTomorrow = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/profit/tomorrow?storeId=${id}`
    );
    return data.data;
}

const prediction = {
    getDailyItem,
    getDailyItemTomorrow,
    getProfit,
    getProfitTomorrow
}

export default prediction;