import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

const formWidth = {
  width: "60%",
  margin: "auto",
};

class Register extends Component {
  render() {
    return (
      <div style={formWidth}>
        <Form>
          <h2>Register Form</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Provider" />
            <Form.Check type="checkbox" label="Client" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
