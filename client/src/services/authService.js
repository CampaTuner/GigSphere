
import axiosInstance from "./api";

export const registerUser = async (data) => {
    const response = await axiosInstance.post('auth/register/', data);
    return response.data;
}

export const verifyOTPUser = async (data) => {
    const response = await axiosInstance.post('auth/verify-otp/', data);
    return response.data;
}

export const loginUser = async (data) => {
    const response = await axiosInstance.post('auth/login/', data);
    return response.data;
}