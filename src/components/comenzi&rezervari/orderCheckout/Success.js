import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./orderCheckout.css";

class FormSucces extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <h2 className="textSuccess">Order successfully registered!</h2>
            <p>You will get an email with further information.</p>
          </Card.Body>
        </Card>
        {this.props.func()}
      </div>
    );
  }
}

export default FormSucces;
