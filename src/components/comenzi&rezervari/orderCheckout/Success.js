import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class FormSucces extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <h2 style={styles.text}>Order successfully registered!</h2>
            <p>You will get an email with further information.</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#386150",
  },
};

export default FormSucces;
