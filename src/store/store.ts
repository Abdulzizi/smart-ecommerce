import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./reducer/CartSlice"
import addressSlice from './reducer/addressSlice'
import paymentMethodSlice from './reducer/paymentMethodSlice'

export const store = configureStore({
    reducer: {
        cartSlice: cartSlice,
        addressSlice: addressSlice,
        paymentMethodSlice: paymentMethodSlice
    },  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;