import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";
import cartSlice from "./reducers/CartSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
