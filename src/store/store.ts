import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./reducer/CartSlice"
import addressSlice from './reducer/addressSlice'

export const store = configureStore({
    reducer: {
        cartSlice: cartSlice,
        addressSlice: addressSlice
    },  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;