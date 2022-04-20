import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/banner-img.png";

const FormBannerComponent = () => {
  return (
    <div>
   
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                Pozwól swojemu biznesowi wystrzelić!                </h2>
                  <p className="m-t-40 m-b-30">
           By osiągnąć wielkich rzeczy nie wystarczą spontaniczne działania! Zbuduj z nami plan marketingowy na kolejne miesiące.Reklama to dzwignia handlu? U nas to rakieta! 
           <br/> 
                  </p>

                

                  <Form className="m-t-40">
                
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="Get Started"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;