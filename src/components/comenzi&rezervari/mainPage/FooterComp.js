import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "boxicons";

export class FooterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Our Site Name",
      desc:
        "",
    };
  }
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="justify-content-md-center pt-5">
            <Col>
              <h2 className="footerTitle">{this.state.title}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center pb-3">
            <Col lg="6">
              <p>{this.state.desc}</p>
            </Col>
          </Row>
          <div className="justify-content-md-center pb-5">
            <i className="socialLink" class="bx bxl-facebook socialLink "></i>
            <i class="bx bxl-twitter socialLink socialLink"></i>
            <i class="bx bxl-instagram socialLink socialLink"></i>
          </div>
        </Container>
      </div>
    );
  }
}

export default FooterComp;
