import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


const Banner = (data) => {



  return (
    <>
    <ParallaxProvider>
    <ParallaxBanner
      layers={[{ image: "https://gruca.j.pl/wp-content/uploads/2022/04/cosmic-scaled.jpg", speed: -20,
    },
  ]}
style={{height: 600}}
>
      <Container style={{  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'}}>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">{data.data}</h1>
            <h4 className="subtitle font-light">
              {data.subcontent}
            </h4>
{data.pageone && data.pageone}
{data.pagetwo && data.pagetwo}
{data.pagethree && data.pagethree}

          
          </Col>
        </Row>
      </Container>
      </ParallaxBanner>
      </ParallaxProvider>
      </>
  );
};

export default Banner;
