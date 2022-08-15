import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";
import { motion } from "framer-motion";

function ProductList() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <Products />
      <Footer />
    </motion.div>
  );
}

export default ProductList;
