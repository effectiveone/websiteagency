import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = (data) => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">{data.data}</h1>
            <h4 className="subtitle font-light">
              Powerful Reactstrap UI Kit with
              <br /> Beautiful Pre-Built Demos
            </h4>
{data.pageone && data.pageone}
{data.pagetwo && data.pagetwo}
{data.pagethree && data.pagethree}

          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
