import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllProducts } from "../../components/allProducts/AllProducts";
import { Category } from "../../components/category/Category";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcomone In clone of Kimaye</h1>}></Route>
      <Route path="/allfruits" element={<AllProducts />}></Route>
      <Route
        path="/fruits/:fruitsDetails"
        element={<div>Fruits details</div>}
      ></Route>
      <Route
        path="/:category"
        element={<Category/>}
      ></Route>
    </Routes>
  );
};
