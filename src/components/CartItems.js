import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const data = useSelector((state) => state.cart.totalItem);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {data?.map((currentEl) => {
          return (
            <li key={currentEl.id}>
              <CartItem
                id={currentEl.id}
                price={currentEl.oneItemPrice}
                quantity={currentEl.quantity}
                name={currentEl.name}
                total={currentEl.price}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
