import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {MdRestaurantMenu } from 'react-icons/md';

class Reserve extends Component {
  render() {
    return (
      /*<div class="ordres" id='reserve'>
                <a href="#" class='buttonlink'><span>Reserve a seat!</span></a>
              </div>
              */
      <Button id="ordres" color="primary">
        <MdRestaurantMenu />
        Reserve a seat
      </Button>
    );
  }
}

export default Reserve;
