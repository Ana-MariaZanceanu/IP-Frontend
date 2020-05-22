import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import UserContext from "../UserContext";

class FormConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      message: " ",
      provider: props.provider,
      isEditing: props.isEditing,
      revId: props.revId
    };
  }
  static contextType = UserContext;
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
    console.log(this.context.user._id);
    e.preventDefault();
    this.props.addFormDetails(e, data);
    axios({
      method: "post",
      url: "https://ip-i-r-api.herokuapp.com/api/reviews/?providerId=" + this.state.provider,
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


  editFormDetails = (e, data) => {
    console.log(this.context.user._id);
    console.log(this.state.revId);
    e.preventDefault();
    axios({
      method: "put",
      url: "https://ip-i-r-api.herokuapp.com/api/reviews/" + this.state.revId,
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
       
        score,
        description,
      
        timeModified,
        helpfulness
      }
    } = this.props;
    let formValues = {
      reviewerId: this.context.user._id,
      score: parseInt(score, 10),
      description: description,
      timeModified: timeModified,
      helpfulness: helpfulness,
      providerId: this.state.provider
    };

    let formValuesEdit = {
      score: parseInt(score, 10),
      description: description
    };

    return (
        <div>
          {!this.state.isEditing && (
              <div>
              <Card.Title style={styles.text}>Send review?</Card.Title>
              <ListGroup className="list-group-flush" style={styles.text}>
                <ListGroup.Item>Score: {score}</ListGroup.Item>
                <ListGroup.Item>Description: {description}</ListGroup.Item>
              </ListGroup>
              <Button
                onClick={event => {
                  this.addFormDetails(event, formValues);
                }}
                variant="outline-success"
                type="submit"
                style={styles.button}
              >
                Yes
              </Button>
              <Button
                onClick={this.back}
                variant="outline-danger"
                type="button"
                style={styles.button}
              >
                No
              </Button>
              </div>
            )}
          {this.state.isEditing && (
            <div>
            <Card.Title style={styles.text}>Edit review?</Card.Title>
            <ListGroup className="list-group-flush" style={styles.text}>
              <ListGroup.Item>Score: {score}</ListGroup.Item>
              <ListGroup.Item>Description: {description}</ListGroup.Item>
            </ListGroup>
            <Button
              onClick={event => {
                this.editFormDetails(event, formValuesEdit);
              }}
              variant="outline-success"
              type="submit"
              style={styles.button}
            >
              Yes
            </Button>
            <Button
              onClick={this.back}
              variant="outline-danger"
              type="button"
              style={styles.button}
            >
              No
            </Button>
            </div>
          )}
        </div>
     
    );
  }
}

const styles = {
  button: {
    marginRight: "1vw",
    marginTop: "2vh",
    width: "auto",
    height: "auto"
  },
  text: {
    color: "#2B2633"
  }
};

export default FormConfirm;
