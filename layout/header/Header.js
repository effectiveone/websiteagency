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
} from "reactstrap";
import logo from "../../assets/images/logos/effectivelogob.png";



const Header = () => {



  const [colorChange, setColorChange] = useState(false);
  
useEffect(() => {
  const updateWindowDimensions = () => {
    if(window.scrollY >= 300) {
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
           >            <NavbarBrand href="/">
              <Image src={logo} alt="wrapkit" width="200" height="100"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Custom Components
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/basic">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Basic-Components
                    </a>
                  </Link>
                </NavItem>
              </Nav>
          
            </Collapse>
          </Navbar> : <Navbar className="navbar-expand-lg h6-nav-bar"             
>           <NavbarBrand href="/">
              <Image src={logo} alt="wrapkit" width="200" height="100"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Custom Components
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/basic">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Basic-Components
                    </a>
                  </Link>
                </NavItem>
              </Nav>
          
            </Collapse>
          </Navbar> }
        </Container>
      </div>
    </div>
  );
};

export default Header;
