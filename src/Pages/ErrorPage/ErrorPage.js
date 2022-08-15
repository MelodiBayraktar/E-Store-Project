import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function ErrorPage() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <h1 className="mt-5">Error!!! PAGE NOT FOUND...</h1>
      <div className="mt-5">
        <NavLink to="/home" className=" btn btn-dark ">
          Go bact to Home Page
        </NavLink>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ErrorPage;
