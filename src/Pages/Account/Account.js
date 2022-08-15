import Button  from '../../Components/Button/Button';
import React from 'react'
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import { motion } from "framer-motion";

function Account() {
    let navigate= useNavigate();
    
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <br/>
        <h1 className='display-3'> Welcome To Your Page</h1>
        <div className='mt-5'>
          <p>Name: <span>Melodi</span></p>
          <p>Surname: <span>Bayraktar</span></p>
          <p>Address: <span>İstanbul/Turkey</span></p>
          <p>Orders: <span>None</span></p>
        </div>
        <br/>
        <Button onClick={()=>{navigate("/home")}}/>
        <Footer/>
    </motion.div>
  )
}

export default Account