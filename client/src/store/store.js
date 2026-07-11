import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlice'
import watchlistSlice from './slicers/watchlistSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        watchlist: watchlistSlice,
    },
})