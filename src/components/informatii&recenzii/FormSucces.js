import React, { Component } from "react";
import Card from "react-bootstrap/Card";


class FormSucces extends Component {


  render() {
    return (
        <div>
          <Card.Title style={styles.text}>Review successfully sent!</Card.Title>
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