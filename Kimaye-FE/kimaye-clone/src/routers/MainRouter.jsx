import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../components/category/Category";
import { CombinedHome } from "../pages/CombinedHome";
import Cart from '../components/Cart'
import Ourstory from '../Learn/Ourstory'
import WhyKimaye from '../Learn/WhyKimaye'
import Checkout from "../Checkout/CheckOut";
import ProductDetails from "../components/productDetails/ProductDetails";
import Grow from "../components/Grow/Grow";
import BlogDetails from "../components/Grow/BlogDetails";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CombinedHome/>}></Route>
      <Route path="/fruits/:fruitsDetails" element={<div>Fruits details</div>}></Route>
      <Route path="/collections/:category" element={<Category/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
      <Route path="/checkout" element={<Checkout/>} ></Route>
      <Route path="/ourstory" element={<Ourstory/>} ></Route>
      <Route path="/whykimaye" element={<WhyKimaye/>} ></Route>
      <Route path="/collections/:category/:_id" element={<ProductDetails/>} ></Route>
      <Route path="/grow" element={<Grow/>} ></Route>
      <Route path="/blogdetails" element={<BlogDetails/>}></Route>
    </Routes>
  );
};