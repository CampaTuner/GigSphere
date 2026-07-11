
import axiosInstance from "./api";

export const addToWatchlist = async (coinid) => {
    const response = await axiosInstance.post('api/watchlist/', coinid);
    return response.data;
}

export const getUserWatchlist = async () => {
    const response = await axiosInstance.get('api/watchlist/');
    return response.data;
}

export const removeFromWatchlist = async (coinid) => {
    const response = await axiosInstance.delete(`api/watchlist/?coin=${coinid}`);
    return response.data;
}

export const removeFullWatchlist = async () => {
    const response = await axiosInstance.delete('api/watchlist/');
    return response.data;
}