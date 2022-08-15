import React from "react";
import "./style.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import CartItem from "../../Components/CartItem/CartItem";
import { useContext } from "react";
import cartContext from "../../Context/Cart/CartContext";
import { motion } from "framer-motion";
function Basket() {
  const { cartItems } = useContext(cartContext);
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <h1 className=" mt-3 mb-1 pageTitle display-3">Your Basket</h1>
     
      <div className="basketBox">
        <div className="basketCard">
          {cartItems.length === 0 ? (
            <h4 className="cardMessage my-5">Cart is Empty</h4>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div className="basketCardTotal">
          <div>Cart Total</div>
          <div></div>
          <div style={{ marginLeft: 5 }}>$
            {cartItems.reduce((amount, item) => item.price + amount, 0)}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Basket;
