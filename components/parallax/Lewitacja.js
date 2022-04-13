import React from 'react'
import Image from "next/image";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import herobanner from "../../assets/images/staticslider/slider/hero-banner.png";



function Lewitacja() {
  return (

    <>
    <ParallaxProvider>
    <div className="background">
       <Parallax
             className="Parallax-module__parallax--skrA3"
             translateX={[
               '-50%',
               '50%'
             ]}>
<Image src={herobanner} alt="herobanner"></Image>

</Parallax>
</div>
</ParallaxProvider>
</>

    )
}

export default Lewitacja