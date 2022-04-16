import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

  const Hearofsections = (data) => {


    return(<>
        <Container className="tlocontainer py-lg-md d-flex">
        <div className="tlocontainer col px-0">
          <Row className="tlocontainer">
            <Col lg="6" className="tlocontainer">
              <h1 className="tlocontainer display-3 text-white">
              {data.title}
              </h1>
              <p className="lead text-white">
              {data.content}
              </p>
              <div className="btn-wrapper">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="info"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-code" />
                  </span>
                  <span className="btn-inner--text">Components</span>
                </Button>
                <Button
                  className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                  color="default"
                  href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="ni ni-cloud-download-95" />
                  </span>
                  <span className="btn-inner--text">
                    Download React
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

<Container>
  <Row className="justify-content-center">
    <Col lg="12">
      <Row className="row-grid">
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="py-5">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-check-bold" />
              </div>
              <h6 className="text-primary text-uppercase">
                {data.titlecol1}
              </h6>
              <p className="description mt-3">
                {data.contentcol1}
              </p>
              <div>
                <Badge color="primary" pill className="mr-1">
                  design
                </Badge>
                <Badge color="primary" pill className="mr-1">
                  system
                </Badge>
                <Badge color="primary" pill className="mr-1">
                  creative
                </Badge>
              </div>
              <Button
                className="mt-4"
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Learn more
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="py-5">
              <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                <i className="ni ni-istanbul" />
              </div>
              <h6 className="text-success text-uppercase">
              {data.titlecol3}
              </h6>
              <p className="description mt-3">
              {data.contentcol3}
              </p>
              <div>
                <Badge color="success" pill className="mr-1">
                  business
                </Badge>
                <Badge color="success" pill className="mr-1">
                  vision
                </Badge>
                <Badge color="success" pill className="mr-1">
                  success
                </Badge>
              </div>
              <Button
                className="mt-4"
                color="success"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Learn more
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="py-5">
              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                <i className="ni ni-planet" />
              </div>
              <h6 className="text-warning text-uppercase">
              {data.titlecol2}
              </h6>
              <p className="description mt-3">
                {data.contentcol2}
              </p>
              <div>
                <Badge color="warning" pill className="mr-1">
                  marketing
                </Badge>
                <Badge color="warning" pill className="mr-1">
                  product
                </Badge>
                <Badge color="warning" pill className="mr-1">
                  launch
                </Badge>
              </div>
              <Button
                className="mt-4"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Learn more
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

</>
    )
  }

  export default Hearofsections;