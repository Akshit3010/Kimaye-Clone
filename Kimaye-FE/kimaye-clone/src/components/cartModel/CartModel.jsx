import React from "react";
import styles from "./cartM.module.css";

export const CartModel = ({ setState }) => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.heading}>
        <h3>SHOPPING CART</h3>
        <p onClick={() => setState(false)}>
          close <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
      <div className={styles.empty}>
      <i className="fa-solid fa-cart-arrow-down"></i>
        <p>No product in the cart</p>
        <button className={styles.Btn}>CONTINUE SHOPPING</button>
      </div>
      <div>
        list all the item/ map
      </div>
      <div className={styles.subtotal}>
        <h4>SUBTOTAL:</h4>
        <h4>₹ 344</h4>
      </div>
      <div className={styles.comments}>
      <p>Spend ₹ 18 more to reach FREE SHIPPING!</p>

      <p>No tax on fresh fruits. Free shipping above Rs. 350.</p>
      </div>
      <button className={styles.Btn}>CHECK OUT</button>
      <br />
      <button className={styles.Btn}>CONTINUE SHOPPING</button>
    </div>
  );
};
