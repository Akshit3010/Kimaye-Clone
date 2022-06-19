import React from "react";
import styles from "./Pc.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTocart,
  getCartData,
} from "../../redux/categoryRedux/categoryAction";

import axios from "axios";
import { useEffect } from "react";

export const ProductCard = ({
  title,
  image,
  description,
  origin,
  price,
  _id,
  discount,
  quantity,
}) => {
  const [btnTogle, setBtntogle] = useState(false);
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.AllProductReducer);
  const { category } = useParams();
  const dispatch = useDispatch();

  // console.log(category);
  const handleClick = (_id) => {
    console.log(_id);
    navigate(`/collections/${category}/${_id}`);
  };
  const handleCart = (
    title,
    image,
    description,
    origin,
    price,
    _id,
    discount
  ) => {
    const data = {
      title,
      image,
      description,
      origin,
      price,
      _id,
      discount,
      quantity,
    };
    let flag = false;
    for (let i = 0; i < cartData.length; i++) {
      if (_id === cartData[i]._id) {
        console.log(_id, cartData[i]._id);
        flag = true;
        return;
      }
    }

    if (!flag) {
      dispatch(addTocart(data));
    }
  };

  return (
    <>
      <div className={styles.productCardMain}>
        <div className={styles.imgDiv}>
          {discount && <div className={styles.valuepackTag}>VALUE PACK</div>}

          <img onClick={() => handleClick(_id)} src={image} alt={title} />
          {!btnTogle ? (
            <div
              onClick={() => setBtntogle(!btnTogle)}
              className={styles.CtoSbtn}
            >
              <i className="fa-solid fa-cart-arrow-down"></i>
              CHOOSE YOUR PACK
            </div>
          ) : (
            <div
              onClick={() =>
                handleCart(
                  title,
                  image,
                  description,
                  origin,
                  price,
                  _id,
                  discount,
                  quantity
                )
              }
              className={styles.CtoSbtn}
            >
              <i className="fa-solid fa-cart-arrow-down"></i>
              ADD TO CART
            </div>
          )}
        </div>
        <div className={styles.titleprice}>
          <p>{title}</p>
          <p>
            ₹{price} - ₹{price * 4}
          </p>
        </div>
      </div>
    </>
  );
};
