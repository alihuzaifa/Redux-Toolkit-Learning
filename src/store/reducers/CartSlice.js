import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItem: [],
    quantity: 0,
    totalPrice: 0,
    cartShown: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const checkAvailability = state.totalItem.find(
        (item) => item.id === newItem.id
      );
      if (checkAvailability) {
        checkAvailability.quantity++;
        checkAvailability.price += newItem.price;
        state.totalPrice += newItem.price;
      } else {
        const saveItem = state.totalItem.push(newItem);
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const data = action.payload;
      const existingItem = state.totalItem.find((item) => item.id === data.id);

      if (data.quantity === 1) {
        let remainingData = state.totalItem?.filter(
          (currentEl) => currentEl.id !== data.id
        );
        state.totalPrice -= data.price;
        state.totalItem = remainingData;
      } else {
        if (existingItem) {
          existingItem.quantity--;
          existingItem.price -= existingItem.oneItemPrice;
          state.totalPrice -= data.price;
        }
      }
    },
    setShowCart(state, action) {
      state.cartShown = !state.cartShown;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
