import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./orderCheckout.css";

class FormFail extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <h2 className="textFail">{this.props.response}</h2>
            <Button
              onClick={this.back}
              variant="primary"
              type="button"
              className="buttonFail"
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FormFail;
