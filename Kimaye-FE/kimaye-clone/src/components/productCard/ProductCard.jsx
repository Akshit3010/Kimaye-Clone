import React from "react";
import styles from "./Pc.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTocart } from "../../redux/categoryRedux/categoryAction";

export const ProductCard = ({
  title,
  image,
  description,
  origin,
  price,
  id,
  discount,
}) => {
  const [btnTogle, setBtntogle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {category} = useParams();
  // console.log(category);
  const handleClick = (id) => {
    navigate(`/collections/${category}/${id}`);
  };
  const handleCart = (
    title,
    image,
    description,
    origin,
    price,
    id,
    discount
  ) => {
    const cartData = {
      title,
      image,
      description,
      origin,
      price,
      id,
      discount,
    };
    dispatch(addTocart(cartData));
  };

  return (
    <div className={styles.productCardMain}>
      <div className={styles.imgDiv}>
        {discount && <div className={styles.valuepackTag}>VALUE PACK</div>}

        <img onClick={handleClick} src={image} alt={title} />
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
              handleCart(title, image, description, origin, price, id, discount)
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
  );
};
