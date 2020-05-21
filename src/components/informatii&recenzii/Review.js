import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import profileTemp from "./Images/derp.jpg";
import {Button} from 'react-bootstrap';
import emptyStar from "./Images/Empty_Star.png";
import goldStar from "./Images/Gold_Star.png";
import halfStar from "./Images/Half_Star.png";
import { Image } from "react-bootstrap";
import upArrow from "./Images/UpArrow.png";
import downArrow from "./Images/DownArrow.png";
import axios from "axios";

const Divider = (
  { color } //not currently used, literally just a line originally intended to divide username+score and body
) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

class StarRating extends Component {
  constructor(props) {
    super(props);
  }

  render() { //This will require more work, since it isn't responsive and for some reason pictures get shrunk down to 0px on smaller resolutions
    return (
      <Container
        style={{display: "flex"}}
      >
        <div style={{ flex: "1", margin: "1%", height: "40px"}}>
          {
            this.props.score >= 1 ? (
              this.props.score >= 2 ? (
                <Image
                  src={goldStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                /> //score 2+
              ) : (
                <Image
                  src={halfStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                />
              ) //score 1
            ) : (
              <Image
                src={emptyStar}
                alt={""}
                style={{ height: "100%", width: "100%" }}
              />
            ) //score zero; this can't really show up
          }
        </div>
        <div style={{ flex: "1", margin: "1%" }}>
          {
            this.props.score >= 3 ? (
              this.props.score >= 4 ? (
                <Image
                  src={goldStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                /> //score 4+
              ) : (
                <Image
                  src={halfStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                />
              ) //score 3
            ) : (
              <Image
                src={emptyStar}
                alt={""}
                style={{ height: "100%", width: "100%" }}
              />
            ) //score 2 exact
          }
        </div>
        <div style={{ flex: "1", margin: "1%" }}>
          {
            this.props.score >= 5 ? (
              this.props.score >= 6 ? (
                <Image
                  src={goldStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                /> //score 6+
              ) : (
                <Image
                  src={halfStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                />
              ) //score 5
            ) : (
              <Image
                src={emptyStar}
                alt={""}
                style={{ height: "100%", width: "100%" }}
              />
            ) //score 4 exact
          }
        </div>
        <div style={{ flex: "1", margin: "1%" }}>
          {
            this.props.score >= 7 ? (
              this.props.score >= 8 ? (
                <Image
                  src={goldStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                /> //score 8+
              ) : (
                <Image
                  src={halfStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                />
              ) //score 7
            ) : (
              <Image
                src={emptyStar}
                alt={""}
                style={{ height: "100%", width: "100%" }}
              />
            ) //score 6 exact
          }
        </div>
        <div style={{ flex: "1", margin: "1%" }}>
          {
            this.props.score >= 9 ? (
              this.props.score >= 10 ? (
                <Image
                  src={goldStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                /> //score 10
              ) : (
                <Image
                  src={halfStar}
                  alt={""}
                  style={{ height: "100%", width: "100%" }}
                />
              ) //score 9
            ) : (
              <Image
                src={emptyStar}
                alt={""}
                style={{ height: "100%", width: "100%" }}
              />
            ) //score 8 exact
          }
        </div>
      </Container>
    ); //Possibly cut the stars to half stars? Also, write the number right after the score?
  }
}



class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewID: props.id,
      userID: props.userID,
      userPicture: null, //perhaps this is superflous; look at it later
      username: null, //perhaps this is superfluous; look at it later
      score: props.score,
      content: props.content,
      expanded: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("https://ip-accounts.herokuapp.com/api/clients/" + this.state.userID)
      .then((response) => {
        if(response.data.data.client.details === null){
          this.setState({
         
            username: response.data.data.client.name,
            isLoaded: true,
          });
        }
        else{
          this.setState({
            userPicture: response.data.data.client.details.avatar,
            username: response.data.data.client.name,
            isLoaded: true,
          });
        }
      });
  }

  //function for expanding/contracting the text
  showButton = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    //please note that colors are magenta, red and blue so that they're obviously visible and this should be changed when styled, to fit the rest of the page
    const { expanded } = this.state;
    if (!this.state.isLoaded) {
      return <p>Loading review...</p>;
    } else {
      var picture = this.state.userPicture;
      if(picture == "" || picture == null){
        console.log("Got here");
        picture = profileTemp;
      }
      var hasContent = true;
      if(this.state.content == "" || this.state.content == null) hasContent = false;
      return (
        <Container className="reviewholder">
          <div className="reviewheader">
            <div className="helpfulness">
              <Button variant="outline-secondary" bsPrefix="voteup">
              <Image
                  src={upArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%", minWidth:"5px" }}
                />
              </Button>
              <div style={{textAlign: "center"}}>5</div>
              <Button variant="outline-secondary" bsPrefix="votedown">
              <Image
                  src={downArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%" }}
                />
              </Button>
            </div>
            <div style={{ flex: "2", margin: "1%" }}>
              <Image
                src={picture}
                alt={"Profile Picture"}
                style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              />
            </div>
            <div style={{ flex: "1", margin: "1%", textAlign: "center"}}>{this.state.username}</div>
            <div style={{ flex: "8", margin: "1%" }}>
              <StarRating score={this.state.score} />{" "}
            </div>
          
            {
              //Look at the xs breakpoint thing, since the way it is now isn't proper; also, look into how to write actual comments in these returns
            }
          </div>

          <div>
            {!expanded && hasContent && (
              <div style={{marginLeft: "3%", marginTop: "3%"}}>
                {this.state.content.substring(0, 100)}
                {this.state.content.length > 100 && (
                  <a
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={this.showButton}
                  >
                    {" "}
                    Read more
                  </a>
                )}
              </div>
            )}
            {expanded && hasContent && (
              <div style={{marginLeft: "3%", marginTop: "3%"}}>
                {this.state.content}
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={this.showButton}
                >
                  {" "}
                  Read less
                </a>
              </div>
            )}
          </div>
        </Container>
      );
    }
  }
}

export default Review;
