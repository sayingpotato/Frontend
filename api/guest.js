import fetcher from "api/fetcher";

const submitRegister = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/customers/signUp",
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

const guest = {
    submitRegister,
    login,
    submitStudentCard
}

export default guest;