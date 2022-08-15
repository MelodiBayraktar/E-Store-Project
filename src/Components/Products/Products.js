import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const filterProduct = (item) => {
    const updatedList = data.filter((i) => i.category === item);
    setFilter(updatedList);
  };
  const ShopProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-dark  m-1" onClick={() => setFilter(data)}>
            All
          </button> 
          <button className="btn btn-dark  m-1" onClick={() => filterProduct("women's clothing")}>
            Women
          </button>
          <button className="btn btn-dark  m-1" onClick={() => filterProduct("men's clothing")}>
            Men
          </button>
         
          <button
            className="btn btn-dark  m-1"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
          <button
            className="btn btn-dark  m-1"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mt-5">
                <div className="card h-120 p-2 text-center" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">
                      <b>{product.price}$</b>
                    </p>
                    <button className="btn btn-dark">See more details</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-1 py-1">
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="display-3">Our Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShopProducts />}
        </div>
        <div className="mt-3">
          <NavLink to="/home" className=" btn btn-dark ">
            Go bact to Home Page
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Products;
