import React, { Component } from "react";
//import { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



class FormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.continue(event);
    } else {
      this.validated(true);
    }
  };

  handleClick = (e) => {
    this.setState({ validated: true });
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="score">
            <Form.Label>Score</Form.Label>
            <Form.Control as="select" 
             type="number"
             placeholder="From 1 to 10"
             value={values.score}
             name="score"
             onChange={handleChange("score")}
             required
            >
            <option>0.5</option>
      <option>1</option>
      <option>1.5</option>
      <option>2</option>
      <option>2.5</option>
      <option>3</option>
      <option>3.5</option>
      <option>4</option>
      <option>4.5</option>
      <option>5</option>
    </Form.Control>
          </Form.Group>

          </Form.Row>
        
          
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              value={values.description}
              name="description"
              rows="5"
              onChange={handleChange("description")}
              required
            />
          </Form.Group>

         
        
         
          
        <Button
          onClick={this.handleClick}
          variant="primary"
          type="submit"
          style={styles.button}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "f7ead9",
    color: "#f7d9f0",
    border: "none",
    marginRight: "1vw",
    marginTop: "2vh",
    width: "auto",
    height: "auto",
  },
};

export default FormDetails;