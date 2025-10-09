import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address } from "../../types/type";

interface AddressState {
  addresses: Address[];
}

const initialState: AddressState = {
  addresses: [
    {
      id: "1a2b3c4-d5e6-f7g8-9h0i1j2k3l4m5n",
      name: "Muhammad Rizal",
      street: "Jl. Pangeran Jayapura No. 12",
      city: "Jakarta Selatan",
      zip: "10250",
      phone: "08123456789",
      isDefault: true,
    },
    {
      id: "5d6e7f8-9g0h-1i2j-3k4l-5m6n7o8p",
      name: "Nur Hayati",
      street: "Jl. Raya Pasar Minggu No. 34",
      city: "Jakarta Timur",
      zip: "10610",
      phone: "08123456788",
      isDefault: false,
    },
    {
      id: "8p9q-r4s5t-u6v7-w8x9-y0z1a2b3c4d5e6f",
      name: "Ari Wibowo",
      street: "Jl. H. Agus Salim No. 1",
      city: "Jakarta Pusat",
      zip: "10510",
      phone: "08123456787",
      isDefault: false,
    },
  ],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(
        (a) => a.id === action.payload.id
      );
      if (index > -1) state.addresses[index] = action.payload;
    },
    deleteAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter((a) => a.id !== action.payload);
    },
    setDefaultAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.map((a) => ({
        ...a,
        isDefault: a.id === action.payload,
      }));
    },
  },
});

export const { addAddress, updateAddress, deleteAddress, setDefaultAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
