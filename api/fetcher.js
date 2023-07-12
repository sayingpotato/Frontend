import axios from "axios";
import { NEXT_PUBLIC_HOST } from "@constants/api.constants";

const fetcher = axios.create({
    baseURL : NEXT_PUBLIC_HOST,
    timeout: 2500
})

fetcher.interceptors.request.use((config) => {
    const localToken = localStorage.getItem("recoil-persist");

    if (!localToken || !localToken.includes("Token")) return config;

    const {Token: token} = JSON.parse(localToken);
    
    const newConfing = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
    }
    return newConfing;
});
    
export default fetcher;

