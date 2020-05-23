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
import GreenArrow from "./Images/GreenArrow.png";
import RedArrow from "./Images/RedArrow.png";
import UserContext from "../UserContext";

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
      isLoaded: false,
      upVote: false,
      downVote: false,
      helpfulness: props.helpfulness,
      upvotes: props.upvotes,
      downvotes: props.downvotes
    };
  }

  static contextType = UserContext;

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
      this.getInitialState();
  }

  getInitialState = () => {
    var isInUp = false;
    var isInDown = false;
    this.state.upvotes.map((item, key) =>
      {if(item == this.context.user._id) isInUp = true;}
    );
    if(isInUp) this.setState({upVote: true});
    this.state.downvotes.map((item, key) => 
      {if(item == this.context.user._id) isInDown = true;}
    );
    if(isInDown) this.setState({downVote: true});
  }

  //function for expanding/contracting the text
  showButton = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  

  changeVoteUp = () => {
    var vote = 0;
    var doubleVote = false;
    var sameVote = false;
    if(this.state.upVote == true && this.state.downVote == false) {vote = 0; sameVote = true;}
    else if(this.state.upVote == false && this.state.downVote == false) vote = 1;
    else if(this.state.upVote == false && this.state.downVote == true) {vote = 1; doubleVote = true;}
    axios
      .patch("https://ip-i-r-api.herokuapp.com/api/reviews/" + this.state.reviewID, {
        delta: vote,
      })
      .then((response) => {
        console.log(response);
      });
    if(vote == 1){
      this.setState({downVote: false,
      upVote: true});
    }
    else if(vote == 0){
      this.setState({downVote: false,
        upVote: false});
    }
    if(doubleVote == true) var helpfulness = this.state.helpfulness + (2*vote);
    else if(doubleVote == false && sameVote == false) var helpfulness = this.state.helpfulness + vote;
    else var helpfulness = this.state.helpfulness - 1;
    this.setState({helpfulness: helpfulness});
  }

  changeVoteDown = () => {
    var vote = 0;
    var doubleVote = false;
    var sameVote = false;
    if(this.state.downVote == true && this.state.upVote == false) {vote = 0; sameVote = true;}
    else if(this.state.downVote == false && this.state.upVote == false) vote = -1;
    else if(this.state.downVote == false && this.state.upVote == true) {vote = -1; doubleVote = true;}
    axios
    .patch("https://ip-i-r-api.herokuapp.com/api/reviews/" + this.state.reviewID, {
      delta: vote,
    })
    .then((response) => {
      console.log(response);
    });
    if(vote == -1){
      this.setState({downVote: true,
      upVote: false});
    }
    else if(vote == 0){
      this.setState({downVote: false,
        upVote: false});
    }
    if(doubleVote == true) var helpfulness = this.state.helpfulness + (2*vote);
    else if(doubleVote == false && sameVote == false) var helpfulness = this.state.helpfulness + vote;
    else var helpfulness = this.state.helpfulness + 1;
    this.setState({helpfulness: helpfulness});
  }
  
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
      var isConnected = true;
      if(this.context.user._id == null || this.context.user._id == undefined) isConnected = false;
      if(this.state.content == "" || this.state.content == null) hasContent = false;
      return (
        <Container className="reviewholder">
          <div className="reviewheader">
          <div className="helpfulness">
            {!this.state.upVote && !this.state.downVote && ( 
              <div>
              {isConnected && ( <Button variant="outline-secondary" onClick={this.changeVoteUp} bsPrefix="voteup">
              <Image
                  src={upArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%", minWidth:"5px"}}
                />
              </Button>)}
              {!isConnected && (
              <Image
                  src={""}
                  alt={""}
                  style={{ height: "20px", width: "100%", minWidth:"5px" }}
                />
              )}
              <div style={{textAlign: "center"}}>{this.state.helpfulness}</div>
              {isConnected && ( <Button variant="outline-secondary" onClick={this.changeVoteDown} bsPrefix="votedown">
              <Image
                  src={downArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%" }}
                />
              </Button>)}
              </div>
            )}
            {this.state.upVote && !this.state.downVote && ( 
              <div>
              <Button variant="outline-secondary" onClick={this.changeVoteUp} bsPrefix="voteup">
              <Image
                  src={GreenArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%", minWidth:"5px" }}
                />
              </Button>
              <div style={{textAlign: "center"}}>{this.state.helpfulness}</div>
              <Button variant="outline-secondary" onClick={this.changeVoteDown} bsPrefix="votedown">
              <Image
                  src={downArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%" }}
                />
              </Button>
              </div>
           )}
            {!this.state.upVote && this.state.downVote && isConnected && ( 
             <div>
              <Button variant="outline-secondary" onClick={this.changeVoteUp} bsPrefix="voteup">
              <Image
                  src={upArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%", minWidth:"5px" }}
                />
              </Button>
              <div style={{textAlign: "center"}}>{this.state.helpfulness}</div>
              <Button variant="outline-secondary" onClick={this.changeVoteDown} bsPrefix="votedown">
              <Image
                  src={RedArrow}
                  alt={""}
                  style={{ height: "20px", width: "100%" }}
                />
              </Button>
              </div>
            )}
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
