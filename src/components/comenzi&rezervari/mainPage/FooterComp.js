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
        "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci.",
    };
  }
  render() {
    return (
      <div style={styles.footer}>
        <Container>
          <Row className="justify-content-md-center pt-5">
            <Col>
              <h2 style={styles.footerTitle}>{this.state.title}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center pb-3">
            <Col lg="6">
              <p>{this.state.desc}</p>
            </Col>
          </Row>
          <div className="justify-content-md-center pb-5">
            <i style={styles.socialLink} class="bx bxl-facebook"></i>
            <i style={styles.socialLink} class="bx bxl-twitter"></i>
            <i style={styles.socialLink} class="bx bxl-instagram"></i>
          </div>
        </Container>
      </div>
    );
  }
}

const styles = {
  footer: {
    backgroundColor: "black",
    color: "#757575",
    textAlign: "Center",
  },
  socialLink: {
    color: "#a1a1a1",
    backgroundColor: "#333",
    fontSize: "2rem",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
  },
  footerTitle: {
    fontFamily: "Pacifico",
    color: "#a71d31",
  },
};

export default FooterComp;
