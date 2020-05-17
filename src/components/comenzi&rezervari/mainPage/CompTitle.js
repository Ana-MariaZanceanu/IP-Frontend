import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import'./mainPage.css';
export class CompTitle extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div>
        <Row className="justify-content-md-center mt-5">
          <Col>
            <h2 className="compH2">{title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-2">
          <Col lg="6">
            <p className="compParagraf">{desc}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CompTitle;
