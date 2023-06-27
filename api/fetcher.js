import axios from "axios";
import { NEXT_PUBLIC_HOST } from "@constants/api.constants";
import { getCookie } from "@utils/cookie";

const fetcher = axios.create({
    baseURL : NEXT_PUBLIC_HOST,
    timeout: 2500
})

fetcher.interceptors.request.use((config) => {
    const accessToken = getCookie('accessToken');
    
    if (accessToken === undefined) return config;

    const newConfing = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        },
    }
    return newConfing;
});
    
export default fetcher;

