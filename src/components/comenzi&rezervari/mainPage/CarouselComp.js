import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import slide1 from "./../resources/img/slide1.jpeg";
import slide2 from "./../resources/img/slide3.jpeg";
import slide3 from "./../resources/img/food3.jpg";

export class CarouselComp extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100"
              style={styles.background}
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption style={styles.carusel}>
              <h1 style={styles.h1} className="animated fadeInDown">
                First slide label
              </h1>
              <p style={styles.p} className="animated fadeInUp">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <Button
                variant="outline-danger"
                style={styles.button}
                className="animated fadeIn"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                style={styles.button}
                className="animated fadeIn"
              >
                Book a table
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100"
              src={slide2}
              style={styles.background}
              alt="Third slide"
            />

            <Carousel.Caption style={styles.carusel}>
              <h1 style={styles.h1} className="animated fadeInDown">
                Second slide label
              </h1>
              <p style={styles.p} className="animated fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button
                variant="outline-danger"
                style={styles.button}
                className="animated fadeIn"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                style={styles.button}
                className="animated fadeIn"
              >
                Book a table
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100"
              src={slide3}
              style={styles.background}
              alt="Third slide"
            />
            <Carousel.Caption style={styles.carusel}>
              <h1 style={styles.h1} className="animated fadeInDown">
                Third slide label
              </h1>
              <p style={styles.p} className="animated fadeInUp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button
                variant="outline-danger"
                style={styles.button}
                className="animated fadeIn"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                style={styles.button}
                className="animated fadeIn"
              >
                Book a table
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;

const styles = {
  carusel: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  background: {
    filter: "brightness(50%)",
  },
  h1: {
    fontFamily: "Pacifico",
  },
  p: {
    fontFamily: "Noto Sans KR",
    fontWeight: "500px",
  },
  button: {
    color: "#fff",
    fontFamily: "Noto Sans KR",
    fontWeight: "300",
    borderRadius: "1rem",
  },
};
