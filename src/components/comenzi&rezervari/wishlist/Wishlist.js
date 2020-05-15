import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import "./Wishlist.css";
import axios from "axios";
const urlDeleteFavorite = "http://localhost:3000/api/v1/favorites/";
const urlCart = "http://localhost:3000/api/v1/cart/";
class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.message = "";
  }

  deleteFavoriteProduct(product) {
    return async (e) => {
      await axios({
        method: "delete",
        url: urlDeleteFavorite + "delete-product/" + product.id,
        withCredentials: true,
        data: {
          userId: "5eb16fdf4afbf654966cb68d",
        },
      })
        .then((result) => {
          console.log(result);
          product.item.price = null;
          this.forceUpdate();
        })
        .catch((error) => {
          console.log(error.data.mesaj);
        });
    };
  }
  addToCart = async (idProduct) => {
    await axios({
      method: "get",
      url: urlCart + "add-product/" + idProduct,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        this.message = "Product added to cart!";
        this.forceUpdate(async () => {
          await setTimeout(() => {
            this.message = "";
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
    let cartProductRows;
    let { products } = this.props;
    if (products != null) {
      cartProductRows = products.map((p, i) => {
        if (p.item.price) {
          return (
            <tr key={i}>
              <td>
                <Button
                  className="deleteProduct"
                  onClick={this.deleteFavoriteProduct(p)}
                >
                  <FaTimes />
                </Button>
              </td>
              <td>
                <Image src={p.item.image} rounded className={"productImage"} />
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
    }

    return (
      <table>
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
          {cartProductRows}
        </tbody>
        <br />
        <tfoot>
          <Button className="clearWishlist">clear wishlist</Button>
          <p>{this.message}</p>
        </tfoot>
      </table>
    );
  }
}

export default Wishlist;

const styles = {
  detalii: {
    color: "black !important",
  },
};
