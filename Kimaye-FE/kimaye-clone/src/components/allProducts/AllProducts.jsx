import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Ap.module.css";
import { ProductCard } from "../productCard/ProductCard";
import { getRequest } from "../../redux/allProductsRedux/AllProductAction";
import { useNavigate } from "react-router-dom";

export const AllProducts = () => {
  const navigate = useNavigate();
  const { isLoading, isError, allFruits } = useSelector(
    (state) => state.AllProductReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getRequest(dispatch);
    // console.log(isLoading,isError)
    // console.log(allFruits)
  }, []);
  const handlenav = (category) => {
    navigate(`/${category}`);
  };
  return (
    <>
      <div className={styles.category}>
        <div>ALL FRUITS</div>
        <div onClick={() => handlenav("freshcuts")}>FRESH CUTS</div>
        <div onClick={() => handlenav("fruitcombos")}>FRUIT COMBOS</div>
        <div onClick={() => handlenav("giftbykimaye")}>GIFTS BY KIMAYE</div>
      </div>
      <div className={styles.routes}>
        <p>
          <i className="fa-solid fa-house"></i>Home / allfruits
        </p>
        <p>Showing {allFruits.length} result</p>
      </div>
      {/* map the data here */}
      <div className={styles.allfruitsContainer}>
        {isLoading ? (
          <h1>Loading.....</h1>
        ) : isError ? (
          <h1>Error occured while loading data.....</h1>
        ) : (
          allFruits.map((elem) => <ProductCard key={elem.id} {...elem} />)
        )}
      </div>
    </>
  );
};
