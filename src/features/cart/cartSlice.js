import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const newItems = state.cartItems.filter((item) => item.id !== payload.id);
      state.cartItems = newItems;
    },
    increase: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[index].amount += 1;
    },
    decrease: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[index].amount === 1) {
        const newItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newItems;
        return;
      }
      state.cartItems[index].amount -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
        amount += item.amount;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
