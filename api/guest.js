import fetcher from "api/fetcher";

const submitRegister = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/customers/signUp",
        form
    );
    return data.data;
}

const submitOwnerRegister = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/owner/signUp",
        form
    );
    return data.data;
}

const login = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/customers/signIn",
        form
    );
    return data;
}

const ownerLogin = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/owner/signIn",
        form
    );
    return data;
}

const submitStudentCard = async(form) => {
    const {data} = await fetcher.put(
        "api/v1/customers/image",
        form,
        {
        headers: { 
            'Content-Type': 'multipart/form-data', // form-data로 보내기 위한 헤더 설정
        },
    });
    return data;
}

const getInfo = async() => {
    const {data} = await fetcher.get(
        `/api/v1/mypage`
    );

    return data.data;
}

const getOwnerInfo = async() => {
    const {data} = await fetcher.get(
        `/api/v1/owner/info`
    );

    return data.data;
}

const getDiscountDetail = async() => {
    const {data} = await fetcher.get(
        `/api/v1/discount/detail`
    );

    return data.data;
}

const guest = {
    submitRegister,
    submitOwnerRegister,
    login,
    ownerLogin,
    submitStudentCard,
    getInfo,
    getOwnerInfo,
    getDiscountDetail
}

export default guest;