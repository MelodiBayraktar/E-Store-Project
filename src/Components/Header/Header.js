import React from "react";
import "./style.css";
import { NavLink, useNavigate} from "react-router-dom";



function Header() {
  let navigate= useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <NavLink
          to="/home"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
          className="navbar-brand"
        >
          E-Store
        </NavLink>

        <div className="links">
          <NavLink
            to="/products"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "white" };
            }}
            className="navbar-brand"
          >
            Products
          </NavLink>
          <NavLink
             to="/basket"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "white" };
            }}
            
            className="navbar-brand"
          >
            Cart
            </NavLink>
          <NavLink
            to="/account/:username"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "white" };
            }}
            className="navbar-brand"
          >
            Account
          </NavLink>
          <button className="btn btn-dark navbar-brand" onClick={()=>{navigate("/")}} >Log out</button>
        </div>
      </nav>
    </>
  );
}
export default Header;
