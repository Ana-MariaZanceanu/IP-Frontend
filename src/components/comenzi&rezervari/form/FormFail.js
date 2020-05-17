import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './form.css';
class FormFail extends Component {
  

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <div>
                <Card.Title className="failText">{this.props.response}</Card.Title>
                <Button
                    onClick={this.back}
                    variant="primary"
                    type="button"
                    className="backButton"
                >
                    Back
                </Button>
            </div>
        );
    }
}


export default FormFail;
