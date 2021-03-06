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
      isEditing: props.isEditing,
      revId: props.revId
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
            <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
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
          variant="outline-danger"
          type="submit"
          className="submitButton"
        >
          Submit
        </Button>
      </Form>
    );
  }
}



export default FormDetails;