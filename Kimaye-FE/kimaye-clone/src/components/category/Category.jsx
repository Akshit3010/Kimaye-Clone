import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRequestBycat } from "../../redux/categoryRedux/categoryAction";
import { ProductCard } from "../productCard/ProductCard";
import styles from "./Ap.module.css";

export const Category = () => {
  const { category } = useParams();
  // console.log(category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, categoryData } = useSelector(
    (state) => state.AllProductReducer
  );
  useEffect(() => {
    getRequestBycat(dispatch, category);
  }, [dispatch, category]);
  const handlenav = (category) => {
    navigate(`/collections/${category}`);
  };
  return (
    <>
      <div className={styles.category}>
        <div onClick={() => handlenav("allfruits")}>ALL FRUITS</div>
        <div onClick={() => handlenav("cut-fruits")}>FRESH CUTS</div>
        <div onClick={() => handlenav("combo-fruits")}>FRUIT COMBOS</div>
        <div onClick={() => handlenav("gifts")}>GIFTS BY KIMAYE</div>
      </div>
      <div className={styles.routes}>
        <p>
          <span className={styles.homeRoute}>
            <i className="fa-solid fa-house"></i> Home /
          </span>{" "}
          {category}
        </p>
        <p>Showing {categoryData.length} result</p>
      </div>
      {/* map the data here */}
      <div className={styles.allfruitsContainer}>
        {isLoading ? (
          <h1>Loading.....</h1>
        ) : isError ? (
          <h1>Error occured while loading data.....</h1>
        ) : (
          categoryData.map((elem) => <ProductCard key={elem._id} {...elem} />)
        )}
      </div>
    </>
  );
};
