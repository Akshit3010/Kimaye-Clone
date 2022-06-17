import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../components/category/Category";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcomone In clone of Kimaye</h1>}></Route>
      <Route path="/fruits/:fruitsDetails" element={<div>Fruits details</div>}></Route>
      <Route path="/:category" element={<Category/>} ></Route>
    </Routes>
  );
};
