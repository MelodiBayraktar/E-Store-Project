import "./style.css";
import { useContext } from "react";
import React from "react";
import Rating from "../Rate/Rating";
import cartContext from "../../Context/Cart/CartContext";



const ProductCard = ({ product }) => {
  const {addToCart} = useContext(cartContext);
  return (
    <>
      <div className="productCard-wrapper h-120 p-2 ">
        <div>
          <img
            className="productCard-img card-img-top"
            src={product.image}
            alt={product.title}
            height="160px"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title mb-2">{product.title.substring(0, 12)}</h4>
          <p className="card-text mt-3 ">
            <b>${product.price}</b>
          </p>
          <div className="productCard-rate">
            <Rating value={product.rating.rate}/>
          </div>
          
          <button className="btn btn-dark ProductCard-button" onClick={()=>addToCart(product)}>Add To Basket</button>
        </div>
      </div >
    </>
  );
};
export default ProductCard;
