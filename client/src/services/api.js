// axios instance
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {

            const res = await axios.post(
                `${API_URL}/auth/token/refresh/`,
                {
                    refresh: localStorage.getItem("refresh"),
                }
            );

            localStorage.setItem("access", res.data.access);

            return axiosInstance(error.config);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;