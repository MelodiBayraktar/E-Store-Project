import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <div
        className="library"
        style={{ backgroundImage: "url(/img/shop.jpg)" }}
      >
        <h1 className="main-title">Welcome to E-Store</h1>
        <div className="main-box">
          <Link to="/signup" className="no-decoration membership-button pt-3">
            <i className="fa fa-user-plus me-1"></i>Sign Up
          </Link>

          <Link to="/login" className="no-decoration membership-button pt-3 ">
            <i className="fa fa-sign-in me-1"></i>Log In
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
