// axios instance
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        // hello
    }
    return Promise.reject(error);
});

export default axiosInstance;