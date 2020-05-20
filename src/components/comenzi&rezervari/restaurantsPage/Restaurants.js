import React, { Component } from "react";
import RestaurantCard from "../mainPage/RestaurantCard";
import Container from "react-bootstrap/Container";
import res1 from "./../resources/img/res2.jpeg";
import CompTitle from "../mainPage/CompTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    await fetch("https://ip-accounts.herokuapp.com/api/providers") //changed to herokuapp
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.data.providers,
        });
        /*console.log("!!!!AICI");
            console.log(this.state.items[0]);
            console.log("!!!!AICI");*/
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }
  render() {
    let rowItems = [];
    let listItems = [];
    var start;
    let item = this.state.items;
    for (var i = 0; i < item.length / 3; i++) {
      start = i * 3;
      listItems = this.state.items.slice(start, start + 3).map((item, i) => {
        const name = item.name ? item.name : "Restaurant";
        const desc = item.details?.description
          ? item.details.description.substring(0, 150)
          : "default description";
        const img = item.details?.images[0] ? item.details.images[0] : res1;
        return (
          <Col md>
            <RestaurantCard title={name} desc={desc} img={img} id={item.id} />
          </Col>
        );
      });
      console.log(start + 3);
      console.log("items length", item.length);
      if (start + 3 > item.length) {
        for (var i = item.length; i < start + 3; i++)
          listItems.push(<Col md></Col>);
      }
      rowItems.push(
        <Row className="justify-content-md-center mt-5 mb-5">{listItems}</Row>
      );
    }
    return (
      <div>
        <Container>{rowItems}</Container>
      </div>
    );
  }
}

export default Restaurants;
