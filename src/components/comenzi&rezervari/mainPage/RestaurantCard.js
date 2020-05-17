import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import res1 from "./../resources/img/res3.jpeg";
import history from "../../../history";
import './mainPage.css';
export class RestaurantCard extends Component {
  addDefaultSrc(ev) {
    console.log("here");
    ev.target.src = res1;
  }
  handleClick = (e) => {
    e.preventDefault();
    const { id } = this.props;
    history.push("/restaurant/" + id);
    window.location.reload(true);
  };
  render() {
    const { title, desc, img } = this.props;
    return (
      <div>
        <Card   className="animated fadeInUp card">
          <Card.Img
            src={img}
            className="cardImg"
            onError={this.addDefaultSrc}
            variant="top"
          />
          <Card.Body>
            <Card.Title className="titleRestaurant">{title}</Card.Title>
            <Card.Text className="desc">{desc}</Card.Text>
            <Button
              className="float-right restaurant-card-button buttonRestaurant"
             
              onClick={this.handleClick}
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default RestaurantCard;
