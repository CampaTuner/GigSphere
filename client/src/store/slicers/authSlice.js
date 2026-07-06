import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    username: "",
    email: "",
    role: "",
    phone: "",
    avatar: "",
    banner: "",
    subscription: "free",
    tokens: {
        access: "",
        refresh: ""
    },
    isAuthenticate: false,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
        

            state.id = action.payload.id
            state.username = action.payload.username
            state.email = action.payload.email
            state.role = action.payload.role
            state.phone = action.payload.phone
            state.avatar = action.payload.avatar
            state.banner = action.payload.banner
            state.subscription = action.payload.subscription
            state.tokens.access = action.payload.access
            state.tokens.refresh = action.payload.refresh
            state.isAuthenticate = true
        },
        unSetUser: (state, action) => {
            state.id = ""
            state.username = ""
            state.email = ""
            state.role = ""
            state.phone = ""
            state.avatar = ""
            state.banner = ""
            state.subscription = "free"
            state.tokens.access = ""
            state.tokens.refresh = ""
            state.isAuthenticate = false
        }
    }
})

export const { setUser, unSetUser } = authSlice.actions
export default authSlice.reducer