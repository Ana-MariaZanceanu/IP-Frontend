import React, { Component } from "react";
import Iframe from "react-iframe";
import CompTitle from "./CompTitle";
import Row from "react-bootstrap/Row";
export class RecomandationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Restaurants for you",
      desc:
        "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxNmZkZjRhZmJmNjU0OTY2Y2I2OGQiLCJpYXQiOjE1ODgyMzc0NTZ9.OG3o5XPIDDGlyFusinKVN11w27b5JYCSwLMl9XhYHeI",
      randomNumber: Math.floor(Math.random() * 10) % 2,
      alg_type: "",
    };
  }
  render() {
    var src = "";
    if (this.state.randomNumber === 0) {
      src = `http://127.0.0.1:5000/static/carousel.html?token=${this.state.token}&alg_type=recom7`;
    } else {
      src = `http://127.0.0.1:5000/static/carousel.html?token=${this.state.token}&alg_type=recommendations_restaurants`;
    }
    console.log("NUMBER", this.state.randomNumber);
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
