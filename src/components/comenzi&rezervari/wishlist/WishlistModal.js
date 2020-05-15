import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Wishlist from "./Wishlist";

class WishlistModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { show, onHide } = this.props;
    const { products } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modalSizes"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={"modalHeader"} />
        <Modal.Body>
          <Wishlist products={products} />
        </Modal.Body>
      </Modal>
    );
  }
}
export default WishlistModal;
