import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import PaymentForm from "./PaymentForm";

import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_wSHt5VF8UO8x8w8z7BRizPh900oAzRuE21");
export class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedPayOnlineBox: false,
      checkedOnDeliveryBox: false,
    };
  }

  handleClickPayOnline = (e) => {
    if (this.state.checkedPayOnlineBox === true)
      this.setState({ checkedPayOnlineBox: false });
    else {
      this.setState({ checkedPayOnlineBox: true });
    }
  };
  handleClickOnDelivery = (e) => {
    if (this.state.checkedOnDeliveryBox === true)
      this.setState({ checkedOnDeliveryBox: false });
    else {
      this.setState({ checkedOnDeliveryBox: true });
    }
  };

  render() {
    const { values, handleChange, modifyTokenID } = this.props;
    if (this.state.checkedPayOnlineBox === false)
      return (
        <>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                3. Payment method
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      label="Pay online"
                      onClick={this.handleClickPayOnline}
                      onChange={handleChange("card")}
                      disabled={this.state.checkedOnDeliveryBox}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Cash on delivery"
                      onChange={handleChange("cash")}
                      onClick={this.handleClickOnDelivery}
                      disabled={this.state.checkedPayOnlineBox}
                    />
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      );
    else
      return (
        <>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                3. Select payment method
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      label="Pay online"
                      onClick={this.handleClickPayOnline}
                      onChange={handleChange("card")}
                      disabled={this.state.checkedOnDeliveryBox}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Cash on delivery"
                      onChange={handleChange("cash")}
                      onClick={this.handleClickOnDelivery}
                      disabled={this.state.checkedPayOnlineBox}
                    />
                  </Form>
                  <br />
                  <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                      {({ elements, stripe }) => (
                        <PaymentForm
                          values={values}
                          handleChange={handleChange}
                          elements={elements}
                          stripe={stripe}
                          modifyTokenID={modifyTokenID}
                        />
                      )}
                    </ElementsConsumer>
                  </Elements>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      );
  }
}

export default PaymentMethod;
