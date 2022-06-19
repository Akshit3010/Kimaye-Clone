import React from "react";
import { CartMain } from "./Cart.styled";
import {useNavigate} from 'react-router-dom'

const EmptyCart = () => {
  const navigate= useNavigate()
  return (
    <>
      <CartMain>
        <div className="cart_empty">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>YOUR CART IS CURRENTLY EMPTY.</p>
          <div>
            Before proceed to checkout you must add some products to your
            shopping cart.
            <br />
            You will find a lot of interesting products on our "Shop" page.
          </div>
          <button onClick={()=>navigate("/collections/allfruits")}>RETURN TO SHOP</button>
        </div>
      </CartMain>
    </>
  );
};

export default EmptyCart;
