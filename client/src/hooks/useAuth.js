import toast from "react-hot-toast"
import { loginUser, registerUser, verifyOTPUser } from "../services/authService"



const useAuth = () => {

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

    const verifyOTP = async (data) => {
        try {
            const res = await verifyOTPUser(data)
            toast.success(res.message)
            return true;
        } catch (error) {
            toast.error(Object.values(error.response.data.errors)[0][0])
            return false;
        }
    }

    const login = async (data) => {
        try {
            const res = await loginUser(data)
            console.log(res)

            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)

            toast.success(res.message)
            return true

        } catch (error) {
            toast.error(Object.values(error.response.data.errors)[0][0])
            return false
        }
    }

    const profile = async () => {

    }

    const logout = async () => {

    }

    const updateProfile = async () => {

    }

    return { register, verifyOTP, login, profile, logout, updateProfile }
}

export default useAuth