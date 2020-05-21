import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

class FormConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      message: " "
    };
  }
  state={
    curTime : new Date().toLocaleString(),
  }
  continue = e => {
    e.preventDefault();
    this.props.modifySuccess(this.state.success, this.state.message);
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  addFormDetails = (e, data) => {
    e.preventDefault();
    this.props.addFormDetails(e, data);
    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/reviews",
      data
    })
      .then(response => {
        this.setState(
          {
            success: true
          },
          () => {
            this.continue(e);
          }
        );
      })
      .catch(err => {
        this.setState(
          {
            success: false,
            message: err.response.data.error.message
          },
          () => {
            this.continue(e);
          }
        );
      });
  };

  render() {
     const {
      values: {
    
        userName,
        score,
        description,
        timeCreated,
        timeModified,
        helpfulness
      }
    } = this.props;
    let formValues = {
      reviewerId: "7a8h6dyd5935d8753l6c2c5k",
      userName: userName,
      score: score,
      description: description,
      timeCreated: timeCreated,
      timeModified: timeModified,
      helpfulness: helpfulness,
      providerId: "5e8b6ecd5935d8350c6c2c2a"
    };
    return (
      <div>
        <Card.Title style={styles.text}>Review sent!</Card.Title>
        <ListGroup className="list-group-flush" style={styles.text}>
          <ListGroup.Item>Score: {score}</ListGroup.Item>
          <ListGroup.Item>Description: {description}</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#2B2633"
  }
};

export default FormConfirm;