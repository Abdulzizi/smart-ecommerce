import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  product: any;
  qty: number;
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
