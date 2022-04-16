/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/logos/logofirmtrzecich/NextJS.png";
import img4 from "../../../assets/images/logos/logofirmtrzecich/mongodb.png";
import img3 from "../../../assets/images/logos/logofirmtrzecich/nodejs.png";
import img2 from "../../../assets/images/logos/logofirmtrzecich/WordPress.png";
import Spacer from "../../parallax/Spacer";
import Reactmodal from "../../../components/modal/Reactmodal.js"
import Mangodbmodal from "../../modal/Mangodbmodal";
import Wordpressmodal from "../../modal/Wordpressmodal";
import Nodemodal from "../../modal/Nodemodal";



const FeatureComponent = () => {
  return (
    <div>
  
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-danger label-rounded">
                Feature 1
              </span>
              <h2 className="title">
              Odlotowe strony z nadzwyczajną starannością
              </h2>
              <h6 className="subtitle">
              Możesz polegać na naszej niesamowitej dbałości o detale, a nasze usługi dla klientów będą dla Ciebie wspaniałym doświadczeniem bez wątpienia i w krótkim czasie
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Landing Page</h5>
                  <p className="m-t-20">
                    Strona typu landing page jest wizytówka produktu lub usługi. Skupia się na ekspozycji tylko jednej informacji i naklania do działania. 
                  </p>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>

            
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Sklepy internetowe</h5>
                  <p className="m-t-20">
                  Tworzenie sklepów internetowych, które są skoncentrowane na realizacji celów sprzedażowych, zwiększeniu współczynnika konwersji, przyjazności i bezproblemowej ich obsłudze to nasza specjalność.
                   Dzięki spersonalizowanej szacie graficznej opierającej się o najnowsze trendy internetowe, szeroko zakrojonej optymalizacji, przemyślanej budowie struktur zakupowych zaprowadzimy Twoich Klientów wprost do koszyka.
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Strony firmowe</h5>
                  <p className="m-t-20">
                  kreuje wizerunek firmy poprzez profesjonalny wygląd spójny z identyfikacją /logo/ oraz dziedziną działalności - projekt dopasowany do rodzaju działalności firmy, głównie pod względem prezentacji oferty oraz dopasowaniu do głównych grup docelowych do których jest ona kierowana                  </p>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>

            
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Blogi</h5>
                  <p className="m-t-20">
               Wyraź siebie w internecie,zainwestuj w budowanie marki osobistej. 
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Podniebna technologia!</h2>
              <h6 className="subtitle">
                Wiesz co tak naprawdę wpływa na wysoką pozycję w google? Orginalne treści? Niepowtarzalny kod? Wyskalowana kampania marketingowa? Prawda, ale to moe mieć kazdy. Jeśli chcesz wystrzelic w kosmos potrzeba odpowiedniej technologii!

              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                         Prerenderowanie oraz jescze lepsze SEO!
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
              <Reactmodal/>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Najpopularniejszy system do zarządzania treścią
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                   <Wordpressmodal />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
Jeszcze szybszy backend niz kiedykolwiek wczesniej!
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                 <Nodemodal />  
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
Nierelacyjne bazy danych!
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                  <Mangodbmodal/>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
             <Spacer />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
Design z nie z tego świata, wobec którego nie przejdziesz obojętnie!
                    </h3>
                    <p>
                    Wyróźnij się nieszablonowym stylem. Stwórz z nami interaktywną stronę, będąca swego rodzaju arcydziełem! Kojarz juź od pierwszego kontaktu klienta z marką z najlepszymi standardami!
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;