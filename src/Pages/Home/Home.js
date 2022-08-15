import React, { useContext } from "react";
import "./style.css";
import HomeScreen from "../../Screens/HomeScreen";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Cart from "../../Components/Cart/Cart";
import cartContext from "../../Context/Cart/CartContext";
import { motion } from "framer-motion";

function Home() {
  const { cartItems, showHideCart } = useContext(cartContext);
  return (
    <motion.div 
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}
    >
      <Header />
      <div
        className= "text-white d-flex pt-4 pb-4"
        style={{ backgroundImage: "url(/img/shop.jpg)" }}
      ><div  >
        <div className="cart-icon col-1">
          <i
            className="fa fa-3x fa-shopping-cart icon"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <span className="item-count">
              <span>{cartItems.length}</span>
            </span>
          )}
        </div>
      </div>
        <div className="card-img ">
          <h4 className="display-4 fw-bolder mb-1 cardText">We Love Shopping!</h4>
       
        </div>
      </div>

      <Cart />
      <HomeScreen />
      <Footer />
    </motion.div>
  );
}

export default Home;
