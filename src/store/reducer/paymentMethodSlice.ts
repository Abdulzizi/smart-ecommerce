import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethod } from "../../types/type";

interface PaymentMethodState {
    availableMethods: PaymentMethod[];
    selectedMethodId: string | null;
}

const initialState: PaymentMethodState = {
    availableMethods: [
        {
            id: "1",
            name: "GoPay",
            type: "e-wallet",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Gopay.svg/2118px-Logo_Gopay.svg.png",
            description: "Instant payment via GoPay wallet",
        },
        {
            id: "2",
            name: "OVO",
            type: "e-wallet",
            logo: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fovo-rp1500-biaya-admin-272365.png&w=384&q=75",
            description: "Secure OVO e-wallet payments",
        },
        {
            id: "3",
            name: "BCA Virtual Account",
            type: "bank",
            logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BCA-PNG.png",
            description: "Pay via BCA Virtual Account",
        },
        {
            id: "4",
            name: "Mandiri Virtual Account",
            type: "bank",
            logo: "https://tuwaga.id/wp-content/uploads/2025/01/FI003-_-Mandiri-19.png",
            description: "Mandiri Virtual Account transfer",
        },
    ],
    selectedMethodId: null,
};

const paymentMethodSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {
        setSelectedPaymentMethod: (state, action: PayloadAction<string>) => {
            state.selectedMethodId = action.payload;
        },
    },
});

export const { setSelectedPaymentMethod } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;
