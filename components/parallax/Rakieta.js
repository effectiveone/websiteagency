import React from 'react'
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import Image from "next/image";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
function Rakieta() {
 
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
<Image   src={bannerimg} alt="hero banner" className="my-thing" />
</Parallax>
</div>
</ParallaxProvider>
</>

  )
}

export default Rakieta