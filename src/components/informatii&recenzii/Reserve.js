import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { MdRestaurantMenu } from 'react-icons/md';
import FormReservation from '../comenzi&rezervari/form/FormReservation';
import Modal from 'react-bootstrap/Modal';
import './App.css';
class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }
  render() {
    return (
      <div>
        <Button
          className="reserveButton"
          variant="primary"
          onClick={async () => {
            await this.setState({ modalShow: true });
          }}
        >
          <MdRestaurantMenu />
          Reserve a seat
        </Button>
        <Modal
          dialogClassName="modalReservation"
          aria-labelledby="example-custom-modal-styling-title"
          show={this.state.modalShow}
          onHide={async () => {
            await this.setState({ modalShow: false });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Book a table </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormReservation providerId={this.props.providerId} />
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Reserve;
