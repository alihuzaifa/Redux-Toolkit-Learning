import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  const AllAmount = useSelector((state) => state.cart.totalPrice);
  const cartShown = useSelector((state) => state.cart.cartShown);

  return (
    <>
      <div className="layout">
        <Header />
        <Products />
        {cartShown && <CartItems />}
        <div className="total-price">
          <h3>Total: ${AllAmount}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Layout;
