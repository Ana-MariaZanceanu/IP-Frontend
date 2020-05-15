import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormReservation from './form/FormReservation';
import Button from 'react-bootstrap/Button';

export default function FormDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={handleShow}
        style={styles.button}
      >
        Book a table
      </Button>{' '}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a table </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormReservation />
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

const styles = {
  button: {
    backgroundColor: '#A71D31',
    width: '30%',
    color: '#F7E7D9',
    padding: '14px 10px',
    alignSelf: 'center',
    textAlign: 'center',
    border: 'none',
  },
};
