import products from "../Data/Data";
import "./style.css";
import ProductCard from "../Components/ProductCard/ProductCard";


const HomeScreen = () => {
  return (
    <div className='products-wrapper '>
      {products.map((product) => (<ProductCard key={product.id} product={product}/>))}
    </div>
  );
};

export default HomeScreen;