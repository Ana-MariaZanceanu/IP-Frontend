import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import history from "../../history";

export class BackButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
    history.push("/home");
    window.location.reload(true);
  };
  render() {
    return (
      /*<div class='My app'>
              <div class="backbutton">
                <a href="#" class='buttonlink'><img class='backbuttonstyle' src={require('../Images/BackButton.png')}></img><span>Back to restaurants!</span></a>
              </div>
            </div>*/
      <Button id="backbutton" color="primary" onClick={this.handleClick}>
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
