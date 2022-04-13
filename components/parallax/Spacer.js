import React from 'react'
import Image from "next/image";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import img5 from "../../assets/images/features/feature30/feature-img.png";

function Spacer() {
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


<Image
src={img5}
className="rounded img-responsive"
alt="wrappixel"
/>
</Parallax>
</div>
</ParallaxProvider>
</>
)
}

export default Spacer