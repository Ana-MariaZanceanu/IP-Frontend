import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './form.css';
const urlReservations = 'http://localhost:3100/api/v1/reservations';

class FormConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      message: '',
    };
  }

  continue = (e) => {
    e.preventDefault();
    this.props.modifySuccess(this.state.success, this.state.message);
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  addFormDetails = (e, data) => {
    e.preventDefault();
    console.log(data);
    this.props.addFormDetails(e, data);
    axios({
      method: 'post',
      url: urlReservations,
      data,
    })
      .then((response) => {
        this.setState(
          {
            success: true,
          },
          () => {
            this.continue(e);
          }
        );
      })
      .catch((err) => {
        console.log(err)
        this.setState(
          {
            success: false,
            message: err.response.data.error.message,
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
        userFirstName,
        userLastName,
        email,
        phoneNumber,
        reservationDate,
        hour,
        numberOfSeats,
      },
    } = this.props;
    let formValues = {
      userFirstName: userFirstName,
      userLastName: userLastName,
      email: email,
      phoneNumber: phoneNumber,
      reservationDate: reservationDate + 'T' + hour, //pe server apare cu 3 ore in urma!
      numberOfSeats: numberOfSeats,
      restaurantId: this.props.providerId,
    };
    return (
      <div>
        <Card.Title className="textConfirm">Confirm reservation data</Card.Title>
        <ListGroup className="list-group-flush textConfirm" >
          <ListGroup.Item>First Name: {userFirstName}</ListGroup.Item>
          <ListGroup.Item>Last Name: {userLastName}</ListGroup.Item>
          <ListGroup.Item>Email: {email}</ListGroup.Item>
          <ListGroup.Item>Phone Number: {phoneNumber}</ListGroup.Item>
          <ListGroup.Item>Number of Seats: {numberOfSeats}</ListGroup.Item>
          <ListGroup.Item>Date: {reservationDate}</ListGroup.Item>
          <ListGroup.Item>Hour: {hour}</ListGroup.Item>
        </ListGroup>
        <Button
          onClick={(event) => {
            this.addFormDetails(event, formValues);
          }}
          variant="primary"
          type="submit"
          className="buttonGreen"
        >
          Confirm
        </Button>
        <Button
          onClick={this.back}
          variant="primary"
          type="button"
          className="buttonRed" 
        >
          Back
        </Button>
      </div>
    );
  }
}

export default FormConfirm;
