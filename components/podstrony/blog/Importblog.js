import React from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/img3.jpg";
import img2 from "../../../assets/images/blog/blog-home/img2.jpg";
import img3 from "../../../assets/images/blog/blog-home/img1.jpg";
import Banner from "../../banner/Banner";

const Importblog = ({posts}) => {
  return (<>
      <Banner data="Blog" pageone="Dowiedz się co się mówi w świecie IT" />

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
        {posts.map((post) => (

<Col lg="4" md="6">
  <Card>


    <h5 className="font-medium m-t-30">
      <a href="#" className="link">
        {post.title.rendered}
        
      </a>
    </h5>
    <div className="gradiant">
{post.date}
    </div>
    <p className="m-t-20">
    {  post.excerpt.rendered}

    </p>
    <a href="#" className="linking text-themecolor m-t-10">
      Czytaj więcej <i className="ti-arrow-right"></i>
    </a>
  </Card>
</Col>
))}
            </Row>
      </Container>
    </div>
  </div>
  </>

  );
};

export default Importblog;

