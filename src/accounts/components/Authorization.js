import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Login from "./Login";
import Register from "./Register";

const Authorization = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Login></Login>
          </Col>
          <Col>
            <Register></Register>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Authorization;
