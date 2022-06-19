import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData } from "../../redux/categoryRedux/categoryAction";
import styles from "./cartM.module.css";

export const CartModel = ({ setState }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.AllProductReducer);
  console.log(cartData);
  useEffect(() => {
    getCartData(dispatch);
  }, [dispatch]);
  const total_price = cartData.reduce((acc, el) => {
    if (el.quantity == undefined) {
      el.quantity = 1;
    }
    return acc + el.price * el.quantity;
  }, 0);
  return (
    <div className={styles.outerDiv}>
      <div className={styles.heading}>
        <h3>SHOPPING CART</h3>
        <p onClick={() => setState(false)}>
          close <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
      {cartData.length < 1 ? (
        <div className={styles.empty}>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <p>No product in the cart</p>
        </div>
      ) : (
        <>
          <div>
            {cartData.map((elem) => (
              <div key={elem._id} className={styles.listCard}>
                <div>
                  <img src={elem.image} alt={elem.title} />
                </div>
                <div>
                  <p>{elem.title}</p>
                  <p style={{ marginTop: "5px", marginBottom: "5px" }}>1 Kg</p>
                  <button>-</button>
                  <span style={{ margin: "5px" }}>{elem.quantity}</span>
                  <button>+</button>
                  <span style={{ color: "#437111", fontWeight: "bold" }}>
                    {" "}
                    x ₹{elem.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.subtotal}>
            <h4>SUBTOTAL:</h4>
            <h4>
              <span style={{ color: "#437111" }}>₹ {total_price}</span>
            </h4>
          </div>
          <div className={styles.comments}>
            {total_price < 350 ? (
              <p>Spend ₹ {350-total_price} more to reach FREE SHIPPING!</p>
            ) : (
              <p>CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!</p>
            )}

            <p>No tax on fresh fruits. Free shipping above Rs. 350.</p>
          </div>
          <button
            className={styles.Btn}
            onClick={() => {
              navigate("/cart");
              setState(false);
            }}
          >
            CHECK OUT
          </button>
        </>
      )}
      <br />
      <button
        className={styles.Btn}
        onClick={() => {
          navigate(`/collections/allfruits`);
          setState(false);
        }}
      >
        CONTINUE SHOPPING
      </button>
    </div>
  );
};
