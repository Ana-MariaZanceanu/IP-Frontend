import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FormFail extends Component {
    

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <div>
                <Card.Title style={styles.text}>{this.props.response}</Card.Title>
                <Button
                    onClick={this.back}
                    variant="primary"
                    type="button"
                    style={styles.button}
                >
                    Back
                </Button>
            </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: "#A71D31",
        color: "#F7E7D9",
        border: "none",
        marginRight: "1vw",
        marginTop: "2vh",
        width: "auto",
        height: "auto",
    },
    text: {
        color: "#A71D31",
    },
};

export default FormFail;