import toast from "react-hot-toast"
import { loginUser, registerUser, verifyOTPUser } from "../services/"
import { useDispatch } from "react-redux"
import { setWatchlist, removeFromWatchlist } from "../store/slicers/watchlistSlice"



const useWatchlist = () => {

    let dispatch = useDispatch()

    const register = async (data) => {
        try {
            const res = await registerUser(data)
            toast.success(res.message)
            return true;
        } catch (error) {
            toast.error(Object.values(error.response.data.errors)[0][0])
            return false;
        }
    }


    return { register, verifyOTP, login, profile, logout, updateProfile }
}

export default useWatchlist