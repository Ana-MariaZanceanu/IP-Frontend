import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import ModalProduct from '../comenzi&rezervari/productModal/ModalProduct';
import axios from 'axios';
import profileTemp from "./Images/MenuDefault.png"

const urlApiCourses = 'https://ip-accounts.herokuapp.com/api/courses/';

const getProduct = async (id) => {
  let product = {};
  await axios({
    method: 'get',
    url: urlApiCourses + id,
  })
    .then((response) => {
      product = response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
  return product;
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPicture: props.itemPicture,
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      productById: {},
      modalShow: false,
    };
  }

  render() {
    var picture = this.state.itemPicture;
    if(picture == "" || picture == null){
      picture = profileTemp;
    }
    return (
      <div id="menuitem">
        <div
          
          onClick={async () => {
            await this.setState({ modalShow: true }, async () => {
              await getProduct(this.props.itemId).then((result) =>
                this.setState({ productById: result })
              );
            });
          }}
        >
          <div class="photo">
            <img src={picture} alt={'Item Picture'}></img>
          </div>
          <div class="utility">
            <div class="name">{this.state.itemName}</div>
            <div class="price">{this.state.itemPrice} $</div>
          </div>
        </div>
        <ModalProduct
          show={this.state.modalShow}
          onHide={async () => {
            await this.setState({ modalShow: false }
            );
          }}
          product={this.state.productById}
        />
      </div>
    );
  }
}

export default Item;
