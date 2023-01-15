import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/reducers/AuthSlice";
import { cartActions } from "../store/reducers/CartSlice";
import "./Cart.css";
const Cart = () => {
  const totalItem = useSelector((state) => state.cart.totalItem.length);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.Logout());
  };

  const handleShownCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon">
      <h3 onClick={handleShownCart}>Cart: {totalItem} Items</h3>
      <h3 onClick={handleLogout}>Logout</h3>
    </div>
  );
};

export default Cart;
