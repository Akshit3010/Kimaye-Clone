import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../components/category/Category";
import { CombinedHome } from "../pages/CombinedHome";
import Cart from '../components/Cart'

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CombinedHome/>}></Route>
      <Route path="/fruits/:fruitsDetails" element={<div>Fruits details</div>}></Route>
      <Route path="/collections/:category" element={<Category/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
    </Routes>
  );
};