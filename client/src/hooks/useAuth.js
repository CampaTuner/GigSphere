import toast from "react-hot-toast"
import { loginUser, registerUser, verifyOTPUser } from "../services/authService"
import { useDispatch } from "react-redux"
import { setUser, unSetUser } from "../store/slicers/authSlice"



const useAuth = () => {

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


            dispatch(setUser({
                id: res.data.id,
                username: res.data.username,
                email: res.data.email,
                role: res.data.role,
                phone: res.data.phone,
                avatar: res.data.avatar,
                banner: res.data.banner,
                subscription: res.data.subscription,
                tokens: {
                    access: res.data.access,
                    refresh: res.data.refresh
                },
                isAuthenticate: true
            }))

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
        dispatch(unSetUser())
        localStorage.setItem("access", null)
        localStorage.setItem("refresh", null)
        toast.success("Logout")

    }

    const updateProfile = async () => {

    }

    return { register, verifyOTP, login, profile, logout, updateProfile }
}

export default useAuth