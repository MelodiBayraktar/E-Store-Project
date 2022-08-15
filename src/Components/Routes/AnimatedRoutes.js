import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../../Pages/Main/Main";
import Home from "../../Pages/Home/Home";
import Account from "../../Pages/Account/Account";
import SignUp from "../../Forms/SignUp";
import LogIn from "../../Forms/LogIn";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import ProductList from "../../Pages/ProductList/ProductList";
import Basket from "../../Pages/Basket/Basket";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/account/:username" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
