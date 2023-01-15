import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/reducers/CartSlice";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const cartItem = useSelector((state) => state.cart.totalItem);
  const dispatch = useDispatch();

  const handleCart = async () => {

    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
        quantity: 1,
        oneItemPrice: price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
