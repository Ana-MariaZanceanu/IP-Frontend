import React, { Component } from "react";
import CompTitle from "./CompTitle";
import ChooseUsRestaurants from "./ChooseUsRestaurants";
import Container from "react-bootstrap/Container";
export class ChooseUsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Choose Our Restaurants",
      desc: "",
    };
  }
  render() {
    return (
      <div>
        <Container>
          <CompTitle title={this.state.title} desc={this.state.desc} />
          <ChooseUsRestaurants />
        </Container>
      </div>
    );
  }
}

export default ChooseUsComp;
