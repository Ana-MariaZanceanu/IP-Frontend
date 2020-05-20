import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class ChooseUsRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      restaurants: [],
    };
  }

  async componentDidMount() {
    await fetch("https://ip-accounts.herokuapp.com/api/providers")//changed to herokuapp
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.data.providers,
        });
        const restaurantsCopy = [];
        for (var i = 0; i < 3; i++) {
          const id = this.state.items[i % 2]._id;
          const name = this.state.items[i % 2].name;
          const img = this.state.items[i % 2].details.images[0];
          const desc = this.state.items[i % 2].details.description.substring(
            1,
            150
          );
          restaurantsCopy.push(
            <Col md>
              <RestaurantCard title={name} img={img} desc={desc} id={id} />
            </Col>
          );
        }
        this.setState({ restaurants: restaurantsCopy });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center mt-5">
            {this.state.restaurants}
          </Row>
          <Row className="justify-content-md-center mt-5">
            {this.state.restaurants}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChooseUsRestaurants;
