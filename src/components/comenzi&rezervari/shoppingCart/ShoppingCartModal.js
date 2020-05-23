import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ShoppingCart from "./ShoppingCart";
import "./ShoppingCart.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { show, onHide } = this.props;
    const { products } = this.props;
    if(show === true){
      return (
          <Modal
              show={show}
              onHide={onHide}
              dialogClassName="modalSizes"
              aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={"modalHeader"}/>
            <Modal.Body>
              <ShoppingCart products={products}/>
            </Modal.Body>
          </Modal>
      );
    }else{
      return(
          <Router>
            <Switch>
              <Route>
                  <Redirect to={this.props.windowUrl}/>
              </Route>
            </Switch>
          </Router>
      );
    }
  }
}

export default ShoppingCartModal;
