import React, { useEffect } from "react";
import AppMobile from './AppMobile'
import AppWeb from './AppWeb'

import HeroProduct from './HeroProduct'
import Pc from './Pc'
import './product.css'
import Socialmedia from './Socialmedia'

const Product = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
     
        <HeroProduct />
        <AppWeb />
        <AppMobile />
        <Socialmedia />
        <Pc />
 
    </>
  )
}

export default Product