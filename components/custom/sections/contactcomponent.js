import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import EffectiveForm from "./EffectiveForm";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Formularz kontaktowy</h1>
              <h6 className="subtitle">
              Czas zejść na ziemie. Chociaz tworzymy nieziemskie strony, to komunikujemy się po ludzku. Napisz do nas, aby poznać nasze ceny i czas realizacji!
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Szybki formularz</h4>
  <EffectiveForm />
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">Effective Advisor</h2>
                    <p className="text-white m-t-30 op-8">
                      +48 785 474 107
                      <br /> biuro@effectiveadvisor.eu
                    </p>
                    <p className="text-white op-8">
                      Ul. Komuny Paryskiej 110A
                      <br /> 30-611 Kraków
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;