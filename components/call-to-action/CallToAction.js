import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import NewsletterSubscribe from './NewsletterSubscribe';
const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Chcesz wiedzieć więcej o nas?
                </h2>
                <h6 className="subtitle font-light text-white">
               Pozostań z nami w kontakcie i podaj swój adres kontaktowy. Promocje, artykuły branzowe, a takze snippetsy i pluginy do pobrania!
                   </h6>
                   <NewsletterSubscribe />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;

