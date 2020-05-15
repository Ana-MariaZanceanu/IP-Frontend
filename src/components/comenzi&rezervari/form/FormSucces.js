import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class FormSucces extends Component {
    /*constructor(props) {
        super(props);
    }*/
  render() {
    return (
        <div>
          <Card.Title style={styles.text}>Reservation successfully registered!</Card.Title>
          <p>You will get an email with further information.</p>
        </div>
    );
  }
}

const styles = {
  text: {
    color: '#386150',
  },
};

export default FormSucces;
