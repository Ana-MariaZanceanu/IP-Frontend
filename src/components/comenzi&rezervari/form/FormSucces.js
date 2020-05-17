import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import './form.css';
class FormSucces extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div>
          <Card.Title className="succesText">Reservation successfully registered!</Card.Title>
          <p>You will get an email with further information.</p>
        </div>
    );
  }
}



export default FormSucces;
