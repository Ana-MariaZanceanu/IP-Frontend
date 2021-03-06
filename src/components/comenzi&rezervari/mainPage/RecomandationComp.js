import React, { useState, useEffect, Component } from "react";
import Iframe from "react-iframe";
import CompTitle from "./CompTitle";
import Row from "react-bootstrap/Row";
import UserContext from "../../UserContext";
export class RecomandationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Restaurants for you",
      desc: "",
      randomNumber: Math.floor(Math.random() * 10) % 2,
      alg_type: "",
    };
  }
  static contextType = UserContext;
  render() {
    var src = "";
    if (this.state.randomNumber === 0) {
      src = `https://still-anchorage-92193.herokuapp.com/static/carousel.html?token=${this.context.user.emailToken}&alg_type=recom7`;
    } else {
      src = `https://still-anchorage-92193.herokuapp.com/static/carousel.html?token=${this.context.user.emailToken}&alg_type=recommendations_restaurants`;
    }
    console.log("PATH", src);
    /*console.log("USER", localStorage.getItem("userToken"));*/
    return (
      <div>
        <CompTitle title={this.state.title} desc={this.state.desc} />
        <Row className="mt-5">
          <Iframe src={src} frameBorder="0" width="100%" height="500" />
        </Row>
      </div>
    );
  }
}

export default RecomandationComp;
