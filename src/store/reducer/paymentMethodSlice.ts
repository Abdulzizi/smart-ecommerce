import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethod } from "../../types/type";

interface PaymentMethodState {
    methods: PaymentMethod[];
}

const initialState: PaymentMethodState = {
    methods: [
        {
            id: "1",
            name: "GoPay",
            accountNumber: "08123456789",
            ownerName: "Muhammad Rizal",
            type: "e-wallet",
            isDefault: true,
        },
        {
            id: "2",
            name: "OVO",
            accountNumber: "08129876543",
            ownerName: "Nur Hayati",
            type: "e-wallet",
            isDefault: false,
        },
        {
            id: "3",
            name: "BCA Virtual Account",
            accountNumber: "1234567890",
            ownerName: "Ari Wibowo",
            type: "bank",
            isDefault: false,
        },
    ],
};

const paymentMethodSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {
        addPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
            state.methods.push(action.payload);
        },
        updatePaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
            const index = state.methods.findIndex((m) => m.id === action.payload.id);
            if (index > -1) state.methods[index] = action.payload;
        },
        deletePaymentMethod: (state, action: PayloadAction<string>) => {
            state.methods = state.methods.filter((m) => m.id !== action.payload);
        },
        setDefaultPaymentMethod: (state, action: PayloadAction<string>) => {
            state.methods = state.methods.map((m) => ({
                ...m,
                isDefault: m.id === action.payload,
            }));
        },
    },
});

export const {
    addPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
} = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;
