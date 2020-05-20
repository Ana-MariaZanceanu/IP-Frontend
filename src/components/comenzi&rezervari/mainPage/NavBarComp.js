import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import WishlistModal from "../wishlist/WishlistModal";
import axios from "axios";
import "./mainPage.css";
import "./style.css";
import UserContext from "../../UserContext";

const urlGetCart = "http://localhost:3000/api/v1/cart/session";
const getUrlWishlist = "http://localhost:3101/api/v1/favorites/";

export class NavBarComp extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      products: [],
      wishedProducts: [],
      windowUrl: "",
    };
  }

  getCart = async () => {
    let products = [];
    await axios({
      method: "get",
      url: urlGetCart,
      withCredentials: true,
    })
      .then((response) => {
        products = response.data.data.items;
      })
      .catch((error) => {
        console.log(error);
      });
    return products;
  };

  getWishlist = async () => {
    let products = [];
    await axios({
      method: "get",
      url: getUrlWishlist + "5eb16fdf4afbf654966cb68d",
    })
      .then((response) => {
        console.log(response);
        products = response.data.data.favorites[0].items;
      })
      .catch((error) => {
        console.log(error);
      });
    return products;
  };

  render() {
    const windowUrl = window.location.href;
    const redirectUrl = windowUrl.substring(21);
    return (
      <Router>
        <div>
          <Navbar className="bg-navbar" variant="dark" expand="md" fixed="top">
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                  <Nav.Link className="nav" href="home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav" href="#link">
                    About
                  </Nav.Link>
                  <Nav.Link className="nav" href="restaurants">
                    Restaurants
                  </Nav.Link>
                  <Nav.Link className="nav" href="#link">
                    Specials
                  </Nav.Link>
                  <Nav.Link className="nav" href="#link">
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    className="nav"
                    onClick={() => {
                      this.setState({
                        modalShow: true,
                        windowUrl: redirectUrl,
                      });
                      this.getCart().then((result) =>
                        this.setState({ products: result })
                      );
                    }}
                  >
                    <Link to={"/cart"} className="iconCart">
                      <FaShoppingCart />
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    className="nav"
                    onClick={() => {
                      this.setState({
                        modalShow: true,
                        windowUrl: redirectUrl,
                      });
                      this.getWishlist().then((result) =>
                        this.setState({ wishedProducts: result })
                      );
                    }}
                  >
                    <Link to="/wishlist" className="iconHeart">
                      <FaHeart />
                    </Link>
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="danger">Search</Button>
                  <Button
                    variant="outline-danger"
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      localStorage.removeItem("userToken");
                      this.context.setUser({});
                      window.location.reload(false);
                    }}
                  >
                    Logout
                  </Button>
                  <Button
                    variant="outline-danger"
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      window.location.href = "http://localhost:3000/profile";
                    }}
                  >
                    Profile
                    {/* BUTONUL ASTA CRED CA O SA SARA DIN BARA , TREBUIE MODIFICAT DESIGNUL CRED */}
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route path={"/cart"}>
              <ShoppingCartModal
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
                products={this.state.products}
                windowUrl={this.state.windowUrl}
              />
            </Route>

            <Route path={"/wishlist"}>
              <WishlistModal
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
                products={this.state.wishedProducts}
                windowUrl={this.state.windowUrl}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBarComp;
