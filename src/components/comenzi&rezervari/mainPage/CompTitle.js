import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class CompTitle extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div>
        <Row className="justify-content-md-center mt-5">
          <Col>
            <h2 style={styles.h2}>{title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-2">
          <Col lg="6">
            <p style={styles.p}>{desc}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  p: {
    fonFamily: "Noto Sans KR",
    textAlign: "center",
    fontWeight: "400",
  },
  h2: {
    textAlign: "center",
    fontFamily: "Pacifico",
  },
};

export default CompTitle;
