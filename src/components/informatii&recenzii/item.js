import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: props.itemPicture,
            itemName: props.itemName,
            itemPrice: props.itemPrice
        }
    }

    render() {
        return (
          
            <div id="menuitem">
                <div class="photo">
                    <img src={this.state.itemPicture} alt={"Item Picture"}></img>
                </div>
                <div class="utility">
                    <div class="name">{this.state.itemName}</div>
                    <div class="price">{this.state.itemPrice} RON</div>
                </div>
            </div>
        )
    }
}

export default Item;