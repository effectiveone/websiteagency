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

function Nextbar() {
  const toggle = () => setIsOpen(!isOpen);
  
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

  return (<>
    <NavbarBrand href="/">
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
    <Nav navbar className="ml-auto"
    pills
    >
      <NavItem>
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? "text-white nav-link"
                : "nav-link"
            }
          >
          Home
          </a>
        </Link>
      </NavItem>


      <UncontrolledDropdown
inNavbar
nav
>
<DropdownToggle
  caret
  nav
>
  Oferta
</DropdownToggle>
<DropdownMenu right>
  <DropdownItem>
  <NavItem>
        <Link href="/page">
          <a
            className={
              router.pathname == "/page"
                ? "effective-text nav-link"
                : "nav-link"
            }
          >
           Strony www
          </a>
        </Link>
      </NavItem>            </DropdownItem>
  <DropdownItem>
  <NavItem>
        <Link href="/sklepy">
          <a
            className={
              router.pathname == "/sklepy"
                ? "effective-text nav-link"
                : "nav-link"
            }
          >
Sklepy          </a>
        </Link>
      </NavItem>          
  </DropdownItem>
  <DropdownItem>
  <NavItem>
        <Link href="/seo">
          <a
            className={
              router.pathname == "/seo"
                ? "effective-text nav-link"
                : "nav-link"
            }
          >
SEO          </a>
        </Link>
      </NavItem>        
  </DropdownItem>
  <DropdownItem>
  <NavItem>
        <Link href="/aplikacje">
          <a
            className={
              router.pathname == "/aplikacje"
                ? "effective-text nav-link"
                : "nav-link"
            }
          >
Aplikacje webowe          </a>
        </Link>
      </NavItem>        
  </DropdownItem>
  <DropdownItem divider />
  <DropdownItem>
    Reset
  </DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>


      <NavItem>
        <Link href="/basic">
          <a
            className={
              router.pathname == "/basic"
                ? "text-white nav-link"
                : "nav-link"
            }
          >
            Realizacje
          </a>
        </Link>
      </NavItem>
    </Nav>
    <NavItem>
        <Link href="/blog">
          <a
            className={
              router.pathname == "/blog"
                ? "text-white nav-link"
                : "nav-link"
            }
          >
          Blog
          </a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/kontakt">
          <a
            className={
              router.pathname == "/kontakt"
                ? "text-white nav-link"
                : "nav-link"
            }
          >
          Kontakt
          </a>
        </Link>
      </NavItem>

  </Collapse>
</>  )
}

export default Nextbar