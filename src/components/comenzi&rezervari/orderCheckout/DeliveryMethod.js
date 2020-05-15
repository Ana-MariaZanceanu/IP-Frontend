import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class DeliveryMethod extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              1. Delivery method
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Home delivery"
                      onChange={handleChange("homeDelivery")}
                      disabled={this.props.homeDisabled}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Pick up from restaurant"
                      onChange={handleChange("restaurantDelivery")}
                      disabled={this.props.restaurantDisabled}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default DeliveryMethod;
