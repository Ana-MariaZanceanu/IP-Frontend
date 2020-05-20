import React, { Component } from "react";
import "../mainPage/style.css";
import CarouselComp from "../mainPage/CarouselComp";
import NavBarComp from "../mainPage/NavBarComp";
import FooterComp from "../mainPage/FooterComp";
import Restaurants from "./Restaurants";
export class RestaurantsPage extends Component {
  render() {
    return (
      <>
        <NavBarComp />

        <Restaurants />
        <FooterComp />
      </>
    );
  }
}

export default RestaurantsPage;
