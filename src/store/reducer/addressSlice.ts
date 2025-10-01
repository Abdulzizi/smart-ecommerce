import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Address = {
  id: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  isDefault?: boolean;
};

interface AddressState {
  addresses: Address[];
}

const initialState: AddressState = {
  addresses: [],
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
