import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import slide1 from "./../resources/img/slide1.jpeg";
import slide2 from "./../resources/img/slide3.jpeg";
import slide3 from "./../resources/img/food3.jpg";
import './mainPage.css';

export class CarouselComp extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100 background"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption  className="carusel">
              <h1  className="animated fadeInDown title">
                First slide label
              </h1>
              <p  className="animated fadeInUp paragraf">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <Button
                variant="outline-danger "
                className="animated fadeIn button"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                className="animated fadeIn button"
              >
                Book a table
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100 background"
              src={slide2}
              alt="Third slide"
            />

            <Carousel.Caption className="carusel">
              <h1  className="animated fadeInDown title">
                Second slide label
              </h1>
              <p className="animated fadeInUp paragraf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button
                variant="outline-danger"
                className="animated fadeIn button"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                className="animated fadeIn button"
              >
                Book a table
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={600}
              className="d-block w-100 background"
              src={slide3}
              alt="Third slide"
            />
            <Carousel.Caption className="carusel">
              <h1  className="animated fadeInDown title">
                Third slide label
              </h1>
              <p className="animated fadeInUp paragraf">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button
                variant="outline-danger"
                className="animated fadeIn button"
              >
                See Restaurants
              </Button>{" "}
              <Button
                variant="danger"
                className="animated fadeIn button"
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
