import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import WishlistModal from "../wishlist/WishlistModal";
import axios from "axios";
import "./mainPage.css";
import "./style.css";
import UserContext from "../../UserContext";

//const urlGetCart = 'http://localhost:3000/api/v1/cart/';

const urlGetCart = "https://orderip.herokuapp.com/api/v1/cart/";
const getUrlWishlist = "http://favoriteip.herokuapp.com/api/v1/favorites/";

export class NavBarComp extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      products: [],
      wishedProducts: [],
      redirectUrl: window.location.href.substring(21),
      windowUrl: ""
    };
    this.userToken = "";
  }

  getCart = async () => {
    let products = [];
    await axios({
      method: "get",
      url: urlGetCart + "session",
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

  getCartForUser = async () => {
    let products = [];
    await axios({
      method: "get",
      url: urlGetCart + "user?token=" + this.userToken,
      withCredentials: true,
    })
        .then((response) => {
          products = response.data.data.cart[0].items;
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
      url: getUrlWishlist + "user?token=" + this.userToken,
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
  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    let q = e.target.elements.search.value;
    history.push({
      pathname: '/search', 
      search: '?' + new URLSearchParams({ q })
    });
  }
  render() {
    let { location: { search } } = this.props;
    search =  (new URLSearchParams(search)).get('q');
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
                  <Nav.Link className="nav" href="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav" href="/restaurants">
                    Restaurants
                  </Nav.Link>
                  <Nav.Link className="nav" href="#link">
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    className="nav"
                    onClick={() => {
                      this.setState({
                        modalShow: true,
                        windowUrl: this.state.redirectUrl,
                      });
                      if(localStorage.getItem("userToken")){
                        this.userToken = localStorage.getItem("userToken");
                        this.getCartForUser().then((result) =>
                            this.setState({ products: result })
                        );
                      }else{
                        this.getCart().then((result) =>
                            this.setState({ products: result })
                        );
                      }
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
                        windowUrl: this.state.redirectUrl,
                      });
                      if(localStorage.getItem("userToken")){
                        this.userToken = localStorage.getItem("userToken");
                        this.getWishlist().then((result) =>
                            this.setState({ wishedProducts: result })
                        );
                      }
                    }}
                  >
                    <Link to="/wishlist" className="iconHeart">
                      <FaHeart />
                    </Link>
                  </Nav.Link>
                </Nav>
                <Form onSubmit={this.handleSearchSubmit} inline>
                  <Form.Control
                    type="text"
                    placeholder={search ? search : "Search"}
                    className="mr-sm-2"
                    name="search"
                    required
                  />
                  <Button type="submit" variant="danger">Search</Button>
                </Form>
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

export default withRouter(NavBarComp);
