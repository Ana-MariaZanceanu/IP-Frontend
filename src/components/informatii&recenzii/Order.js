import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

export class Order extends Component {
    render() {
        return (
          <Button id="ordres" color="primary">Order now</Button>
        );
    }
}

export default Order;