import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        setWatchlist: (state, action) => {
            state.push(action.payload.coinid)
        },
        removeFromWatchlist: (state, action) => {
            state = state.filter((coinid) => coinid !== action.payload.coinid)
        }
    }
})

export const { setWatchlist, removeFromWatchlist } = watchlistSlice.actions
export default watchlistSlice.reducer