import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRequestBycat } from "../../redux/allProductsRedux/AllProductAction";
import { ProductCard } from "../productCard/ProductCard";
import styles from "../allProducts/Ap.module.css";

export const Category = () => {
  const { category } = useParams();
  console.log(category);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoading, isError, categoryData } = useSelector(
    (state) => state.AllProductReducer
  );
  useEffect(() => {
    getRequestBycat(dispatch, category);
  }, [dispatch,category]);
  const handlenav = (category) => {
    navigate(`/${category}`);
  };
  return (
    <>
    <div className={styles.category}>
        <div onClick={()=>navigate("/allfruits")}>ALL FRUITS</div>
        <div onClick={() => handlenav("freshcuts")}>FRESH CUTS</div>
        <div onClick={() => handlenav("fruitcombos")}>FRUIT COMBOS</div>
        <div onClick={() => handlenav("giftbykimaye")}>GIFTS BY KIMAYE</div>
      </div>
      <div className={styles.routes}>
        <p>
          <i className="fa-solid fa-house"></i>Home / {category}
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
          categoryData.map((elem) => <ProductCard key={elem.id} {...elem} />)
        )}
      </div>
    </>
  );
};
