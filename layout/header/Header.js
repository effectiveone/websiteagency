import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../../assets/images/logos/effectivelogob.png";
import Nextbar from "./Nextbar"



const Header = () => {



  const [colorChange, setColorChange] = useState(false);
  
useEffect(() => {
  const updateWindowDimensions = () => {
    if(window.scrollY >= 500) {
      setColorChange(true);
    } else {
      setColorChange(false);   
  };
  };

  window.addEventListener("scroll", updateWindowDimensions);

  return () => window.removeEventListener("scroll", updateWindowDimensions) 

}, []);


 
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
        {colorChange ?    <Navbar className="navbar-expand-lg h6-nav-bar"   color="dark"
           fixed="top"
           expand="xl"          >      
           <Nextbar/>
           </Navbar>    : <Navbar className="navbar-expand-lg h6-nav-bar"             
>           <Nextbar/>
          </Navbar> }
        </Container>
      </div>
    </div>
  );
};

export default Header;
