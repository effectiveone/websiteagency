import React from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/img3.jpg";
import img2 from "../../../assets/images/blog/blog-home/img2.jpg";
import img3 from "../../../assets/images/blog/blog-home/img1.jpg";
import Banner from "../../banner/Banner";

const Importkontakt = () => {
  return (<>
    <Banner data="Kontakt" pageone="Skontaktuj się z nami" pagetwo="xxx"/>
    <div>
    <div className="blog-home2 spacer">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" className="text-center">
            <h2 className="title">Co nowego na naszym blogu?</h2>
            <h6 className="subtitle">
W świecie IT dzieje się nie mniej niz w kosmosie. Zaobserwuj z nami najnowsze trendy, pogłeb więdzę dotyczącą projektowania stron.
            </h6>
          </Col>
        </Row>
        <Row className="m-t-40 justify-content-center">
          <Col lg="4" md="6">
            <Card>
              <a href="#">
                <Image
                  className="card-img-top"
                  src={img1}
                  alt="wrappixel kit"
                />
              </a>
              <div className="date-pos bg-info-gradiant">
                Oct<span>23</span>
              </div>
              <h5 className="font-medium m-t-30">
                <a href="#" className="link">
                  You should have eagle’s eye on new trends and techonogies
                </a>
              </h5>
              <p className="m-t-20">
                Business Park, Opp. Corns Sam Restaurant, New Yoark, US
              </p>
              <a href="#" className="linking text-themecolor m-t-10">
                Learn More <i className="ti-arrow-right"></i>
              </a>
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card>
              <a href="#">
                <Image
                  className="card-img-top"
                  src={img2}
                  alt="wrappixel kit"
                />
              </a>
              <div className="date-pos bg-info-gradiant">
                Oct<span>23</span>
              </div>
              <h5 className="font-medium m-t-30">
                <a href="#" className="link">
                  New Seminar on Newest Food Recipe from World’s Best
                </a>
              </h5>
              <p className="m-t-20">
                Business Park, Opp. Corns Sam Restaurant, New Yoark, US
              </p>
              <a href="#" className="linking text-themecolor m-t-10">
                Learn More <i className="ti-arrow-right"></i>
              </a>
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card>
              <a href="#">
                <Image
                  className="card-img-top"
                  src={img3}
                  alt="wrappixel kit"
                />
              </a>
              <div className="date-pos bg-info-gradiant">
                Oct<span>23</span>
              </div>
              <h5 className="font-medium m-t-30">
                <a href="#" className="link">
                  Learn from small things to create something bigger.
                </a>
              </h5>
              <p className="m-t-20">
                Business Park, Opp. Corns Sam Restaurant, New Yoark, US
              </p>
              <a href="#" className="linking text-themecolor m-t-10">
                Learn More <i className="ti-arrow-right"></i>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  </>
  );
};

export default Importkontakt;
