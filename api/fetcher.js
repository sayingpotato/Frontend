import axios from "axios";
import APP_HOST from "@constants/api.constants";

const fetcher = axios.create({
    baseURL : APP_HOST,
    timeout: 2500
})

//권한이 필요한 api가 생길 시 추가 
fetcher.interceptors.request.use((config) => {
    return config;
})

export default fetcher;