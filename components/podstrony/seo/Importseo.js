import React from "react";
import Banner from "../../banner/Banner";
// sections for this page
import PortfolioComponent from "../../custom/sections/portfoliocomponent";
import Hearofsections from "../../custom/sections/hearofsections";
// import Example from "./Example";
const Importseo = () => {
  return (
    <div>
      <Banner data="SEO" pageone="Nowoczesna grafika
" pagetwo="Popraw sprzedaz" pagethree="Stałe wsparcie"
/>
<Hearofsections 
title="SEO" 
content="blavlasdasd"
titlecol1="dasdda" 
contentcol1="ddasdsad"
titlcol2="dasdasdasd"
contentcol2="das"
titlecol3="sdasdasd"
contentcol3="dasdasd"
/>
   <PortfolioComponent data="Sklepy www"/>
    </div>
  );
};

export default Importseo;
