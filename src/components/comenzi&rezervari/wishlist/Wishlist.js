import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import './Wishlist.css';
import axios from 'axios';

const urlFavorite = 'http://favoriteip.herokuapp.com/api/v1/favorites/';
const urlCart = 'https://orderip.herokuapp.com/api/v1/cart/';
class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.message = '';
    this.userToken = "";
  }

  deleteFavoriteProduct = async (product) => {
      await axios({
        method: 'delete',
        url: urlFavorite + 'delete-product/' + product.id,
        data: {
          token: this.userToken
        },
      })
        .then((result) => {
          console.log(result);
          product.item.price = null;
          this.forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
  }
  deleteWishlist = async (products) => {
      await axios({
        method: 'delete',
        url: urlFavorite + "user?token=" + this.userToken,
      })
        .then((result) => {
          console.log(result);
          products.map((p, i) => {
            p.item.price = null;
          });
          this.forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
  }
  addToCart = async (idProduct) => {
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

  render() {
    let wishlistProductRows;
    let { products } = this.props;
    if (products == null) {
      return <div>Empty wishlist!</div>;
    } else {
      wishlistProductRows = products.map((p, i) => {
        if (p.item.price) {
          return (
            <tr key={i}>
              <td>
                <Button
                  className="deleteProduct"
                  onClick={async () => {
                      if(localStorage.getItem("userToken")){
                          this.userToken = localStorage.getItem("userToken");
                          await this.deleteFavoriteProduct(p);
                      }
                  }}
                >
                  <FaTimes />
                </Button>
              </td>
              <td>
                <Image src={p.item.image} rounded className={'productImage'} />
              </td>
              <td>{p.item.name}</td>
              <td> {p.item.price}$ </td>
              <td>
                <Button className="addToCart">
                  <FaCartPlus /> Add
                </Button>
              </td>
            </tr>
          );
        } else {
          return null;
        }
      });
      let ok = 0;
      for (let i = 0; i < wishlistProductRows.length; i++) {
        if (wishlistProductRows[i]) {
          ok = 1;
          break;
        }
      }
      if (ok === 0) {
        return <div className="emptyCart">Empty wishlist!</div>;
      }
      return (
        <table className="tableWishlist">
          <thead>
            <tr>
              <th className="deleteArea"></th>
              <th className="imageArea"></th>
              <th className="productArea">Product</th>
              <th className="priceArea">Price</th>
              <th className="buttonArea"></th>
            </tr>
          </thead>

          <tbody className="bodyTable" style={styles.detalii}>
            {wishlistProductRows}
          </tbody>
          <br />
          <tfoot>
          <tr>
              <td></td>
              <td>
                  <Button
                      className="clearWishlist"
                      onClick={async () => {
                          if(localStorage.getItem("userToken")){
                              this.userToken = localStorage.getItem("userToken");
                              await this.deleteWishlist(products);
                          }
                      }}
                  >
                      clear wishlist
                  </Button>
              </td>
          </tr>
            <p>{this.message}</p>
          </tfoot>
        </table>
      );
    }
  }
}

export default Wishlist;

const styles = {
  detalii: {
    color: 'black !important',
  },
};
