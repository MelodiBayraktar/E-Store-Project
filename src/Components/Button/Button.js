import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Button() {
  return (
    <>
    <Link to="/home" className='button'>Go back to Home Page</Link></>
  )
}

export default Button