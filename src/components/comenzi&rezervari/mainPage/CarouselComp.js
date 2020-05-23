import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import slide1 from "./../resources/img/slide1.jpeg";
import slide2 from "./../resources/img/slide3.jpeg";
import slide3 from "./../resources/img/food3.jpg";
import "./mainPage.css";

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
            <Carousel.Caption className="carusel">
              <h1 className="animated fadeInDown title">
                Welcome to our website!
              </h1>
              <p className="animated fadeInUp paragraf">
                You'll find a wide range of restaurants...
              </p>
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
              <h1 className="animated fadeInDown title">
                Choose your favorite one...
              </h1>
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
              <h1 className="animated fadeInDown title">
                Book a table or make an order!
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
