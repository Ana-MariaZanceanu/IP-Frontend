import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';
import axios from 'axios';
import UserContext from '../../UserContext';

const urlCart = 'https://orderip.herokuapp.com/api/v1/cart/';
const urlWishlist = 'http://favoriteip.herokuapp.com/api/v1/favorites/';

class ModalProduct extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.message = '';
    this.userToken = "";
    this.emptyCart = false;
  }

  getCart = async () => {
    await axios({
      method: 'get',
      url: urlCart + "user?token=" + this.userToken,
      withCredentials: true,
    }).then((response) => {
      if(response.data.data.cart.length === 0){
        this.emptyCart = true;
      }else{
        this.emptyCart = false;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  postSession = async () => {
    await axios({
      method: 'post',
      url: urlCart,
      withCredentials: true,
      data: {
        token : this.userToken
      }
    }).then((response) => {
      console.log(response.data.success);
    }).catch((error) => {
      console.log(error);
    });
  }

  patchSession = async () => {
    await axios({
      method: 'patch',
      url: urlCart + "user?token=" + this.userToken,
      withCredentials: true,
    }).then((response) => {
      console.log(response.data.success);
    }).catch((error) => {
      console.log(error);
    });
  }

  postProductToCart = async (idProduct) => {
    await axios({
      method: 'get',
      url: urlCart + 'add-product/' + idProduct,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        this.message = 'Product added to cart!';
        this.forceUpdate(async () => {
          await setTimeout(() => {
            this.message = '';
            console.log(this.message);
            this.forceUpdate();
          }, 4000);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  postProductToWishlist = async (idProduct) => {
    console.log(urlWishlist + 'add-product/' + idProduct);
    await axios({
      method: 'post',
      url: urlWishlist + 'add-product/' + idProduct,
      data: {
        token: this.userToken,
      },
    })
      .then((response) => {
        console.log(response);
        this.message = 'Product added to wishlist!';
        this.forceUpdate(async () => {
          await setTimeout(() => {
            this.message = '';
            console.log(this.message);
            this.forceUpdate();
          }, 4000);
        });
      })
      .catch((error) => {
        console.log(error)
        this.message = 'Product already exists in wishlist!';
        this.forceUpdate(async () => {
          await setTimeout(() => {
            this.message = '';
            console.log(this.message);
            this.forceUpdate();
          }, 4000);
        });
      });
  };

  render() {
    const { show, onHide } = this.props;
    const { product } = this.props;
    if (Object.keys(product).length === 0) {
      return <div />;
    }
    let i = 0;
    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modalSizes"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={'modalHeader'} />
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={5}>
                <Image src={product.image} rounded className={'imageStyle'} />
              </Col>
              <Col xs={12} md={7}>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <h2 className={'nameStyle'}>{product.name}</h2>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <ListGroup className={'descriptionTextStyle'}>
                      (
                      {product.ingredients.map(function (ingredient) {
                        if (i === product.ingredients.length - 1) {
                          return (
                            <ListGroup.Item className="ingredientListItem">
                              {ingredient}
                            </ListGroup.Item>
                          );
                        } else {
                          i++;
                          return (
                            <ListGroup.Item className="ingredientListItem">
                              {ingredient},
                            </ListGroup.Item>
                          );
                        }
                      })}
                      )
                    </ListGroup>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={5} md={12}>
                    <Card.Text className={'priceStyle'}>
                      {product.price}$
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="show-grid buttons_cart">
                  <Col xs={5} md={5}>
                    <Button
                      variant="outline-success"
                      onClick={async () => {
                        if(localStorage.getItem("userToken")){
                          this.userToken = localStorage.getItem("userToken");
                          await this.getCart();
                          await this.postProductToCart(product._id);
                          if(this.emptyCart){
                            await this.postSession();
                          }else{
                            await this.patchSession();
                          }
                        }else{
                          await this.postProductToCart(product._id);
                        }
                      }}
                    >
                      <FaCartPlus /> Add to cart
                    </Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <Button
                      variant="outline-danger"
                      onClick={async () => {
                        if(localStorage.getItem("userToken")){
                          this.userToken = localStorage.getItem("userToken");
                          await this.postProductToWishlist(product._id);
                        }
                      }}
                    >
                      <FaHeart /> Add to wishlist
                    </Button>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <Card.Text className="messageProductAdded">
                      {this.message}
                    </Card.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalProduct;
