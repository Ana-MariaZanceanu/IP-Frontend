import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import res1 from "./../resources/img/res3.jpeg";
export class RestaurantCard extends Component {
  addDefaultSrc(ev) {
    console.log("here");
    ev.target.src = res1;
  }
  render() {
    const { title, desc, img } = this.props;
    return (
      <div>
        <Card style={styles.card} className="animated fadeInUp">
          <Card.Img
            src={img}
            style={styles.cardImg}
            onError={this.addDefaultSrc}
            variant="top"
          />
          <Card.Body>
            <Card.Title style={styles.title}>{title}</Card.Title>
            <Card.Text style={styles.desc}>{desc}</Card.Text>
            <Button
              className="float-right restaurant-card-button"
              style={styles.button}
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    minHeight: "474px",
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  cardImg: { minHeight: "225px" },
  title: {
    fontFamily: "Pacifico",
  },
  desc: {
    minHeight: "100px",
    fonFamily: "Noto Sans KR",
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#a71d31",
    border: "none",
  },
};

export default RestaurantCard;
