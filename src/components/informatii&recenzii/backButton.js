import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export class BackButton extends Component {
  render() {
    return (
      /*<div class='My app'>
              <div class="backbutton">
                <a href="#" class='buttonlink'><img class='backbuttonstyle' src={require('../Images/BackButton.png')}></img><span>Back to restaurants!</span></a>
              </div>
            </div>*/
      <Button id="backbutton" color="primary">
        <img
          class="backbuttonstyle"
          src={require("./Images/BackButton.png")}
        ></img>{" "}
        Back to restaurants
      </Button>
    );
  }
}

export default BackButton;
