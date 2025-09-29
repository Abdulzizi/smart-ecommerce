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
        console.log("existing", existingItem.qty);
        existingItem.qty += 1;
      } else {
        state.items.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    removeItemFromCart: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter(
        (i) => i.product.id !== action.payload
      );
    },

    increaseQty: (state, action: PayloadAction<number | string>) => {
      const item = state.items.find((i) => i.product.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action: PayloadAction<number | string>) => {
      const item = state.items.find((i) => i.product.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    emptyCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeItemFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
