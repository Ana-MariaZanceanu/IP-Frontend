import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class DataForm extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container fluid="xl">
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="firstName">
                  <Form.Label>Enter first name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={values.userFirstName}
                    disabled={this.props.disabled}
                    onChange={handleChange("userFirstName")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="lastName">
                  <Form.Label>Enter last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={values.userLastName}
                    disabled={this.props.disabled}
                    onChange={handleChange("userLastName")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Enter phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={values.phoneNumber}
                    disabled={this.props.disabled}
                    onChange={handleChange("phoneNumber")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId="emailUser">
                  <Form.Label>Enter email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    value={values.email}
                    disabled={this.props.disabled}
                    onChange={handleChange("email")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="adress">
                  <Form.Label>Enter delivery adress</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter delivery adress"
                    value={values.userDeliveryAdress}
                    disabled={this.props.disabledAddress}
                    onChange={handleChange("userDeliveryAdress")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}

export default DataForm;
