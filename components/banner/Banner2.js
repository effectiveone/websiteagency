import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Rakieta from "../parallax/Rakieta";




const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Twórz oszałamiające strony www wraz z effective advisor
            </h1>
            <h4 className="subtitle font-light">
Z nami Twoja marka wystrzeli w kosmos       !      
            </h4>
            <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Skontaktuj się juz teraz
            </a>
            <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Poznaj schemat współpracy
              </a>
            </Link>
          </Col>

          <Col lg="6" md="6">
<Rakieta/> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
