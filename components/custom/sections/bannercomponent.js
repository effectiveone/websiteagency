/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import Lewitacja from "../../parallax/Lewitacja";
const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">
              Daj się wynieść na orbitę!
</h1>
              <h6 className="subtitle">
              Nieziemskie strony internetowe i sklepy www
Profesjonalne usługi zwiększające ilość klientów, które znajdziesz w jednym miejscu.
Od analizy, przez projekt po marketing w wyszukiwarkach.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
Responsywne strony wwww            </span>
              <h1 className="title">Bądź widoczny na każdym ekranie</h1>
              <h6 className="subtitle op-8">
Przygotuj firmę na rewolucję cyfrową i zadbaj, aby być widoczny w sieci! Responsywna strona internetowa dopasowująca rozmiar w zalezności do urządzenia jest jedynym sposobem by zostać zauwaonym! Juz 150% Polaków ma smartphone!
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Do you Need Help?</span>
              </a>
            </Col>
            <Col md="6">

<Lewitacja/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider3">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center text-center">
              <h1 className="title">
                I’m Johanthan Doe, an{" "}
                <b className="font-bold">
                  Entreprenuer, Designer & Front-end Developer
                </b>
                , Making{" "}
              </h1>
              <a
                className="btn btn-danger btn-md btn-arrow m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>
                  Checkout My Work <i className="ti-arrow-right"></i>
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
