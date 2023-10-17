import fetcher from "./fetcher";

const getDailyDiscountStore = async(date) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/discount?day=${date}`
    );

    return data.data;
}

const getMapStoreList = async(latitude, longtitude) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/nearby?latitude=${latitude}&longitude=${longtitude}&offset=0&limit=100`
    );

    return data.data;
}

const getStoreDetail = async(id) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/detail?id=${id}&offset=0&limit=100`
    );

    return data.data;
}

const getSurroundStoreList = async(latitude, longtitude) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/nearby/list?latitude=${latitude}&longitude=${longtitude}&offset=0&limit=100`
    );

    return data.data;
}

const submitOrder = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/order",
        form,
        {
        headers: { 
            'Content-Type': 'application/json',
        },
    });
    return data.data;
}

const submitReview = async(reviews) => {
    const {data} = await fetcher.post(
        `/api/v1/review/content`,
        reviews,
        {
        headers: { 
            'Content-Type': 'application/json',
        },
    });
    return data.data;
}

const getOrder = async() => {
    const {data} = await fetcher.get(
        `/api/v1/order/detail?offset=0&limit=20`
    );

    return data.data;
}

const getSearchList = async(searchKey) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/name?name=${searchKey}&offset=0&limit=100`
    );

    return data.data;
}

const getDiscountTotal = async() => {
    const {data} = await fetcher.get(
        `/api/v1/discount/total`
    );

    return data.data;
}

const getOwnerStoreList = async() => {
    const {data} = await fetcher.get(
        `/api/v1/owner/store`
    );

    return data.data;
}

const getOwnerOrder = async(id) => {
    const {data} = await fetcher.get(
        `/api/v1/order/owner?storeId=${id}&offset=0&limit=100`
    );

    return data.data;
}

const submitAcceptOrder = async(id) => {
    const {data} = await fetcher.post(
        `/api/v1/order/accept`,
        id,
        {
        headers: { 
            'Content-Type': 'application/json',
        },
    });
    return data.data;
}

const submitRejectOrder = async(id) => {
    const {data} = await fetcher.post(
        `/api/v1/order/reject`,
        id,
        {
        headers: { 
            'Content-Type': 'application/json',
        },
    });
    return data.data;
}

const store = {
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
    getOwnerOrder,
    submitAcceptOrder,
    submitRejectOrder,
}

export default store;