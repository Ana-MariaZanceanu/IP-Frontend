import React, { Component } from "react";
import CarouselComp from "./CarouselComp";
import NavBarComp from "./NavBarComp";
import ChooseUsComp from "./ChooseUsComp";
import OurSpecials from "./OurSpecials";
import RecomandationComp from "./RecomandationComp";
import FooterComp from "./FooterComp";
export class MainPage extends Component {
  render() {
    return (
      <>
        <NavBarComp />
        <CarouselComp />
        <ChooseUsComp />
        <OurSpecials />
        <RecomandationComp />
        <FooterComp />
      </>
    );
  }
}

export default MainPage;
