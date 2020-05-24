import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
import emptyStar from "./Images/Empty_Star.png";
import goldStar from "./Images/Gold_Star.png";
import halfStar from "./Images/Half_Star.png";
import { Image } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import {FaHashtag} from 'react-icons/fa';


class StarRating extends Component {
  constructor(props) {
    super(props);
  }

  render() { //This will require more work, since it isn't responsive and for some reason pictures get shrunk down to 0px on smaller resolutions
    return (
      <Container style={{ display: "flex" }}>
        <div style={{ flex: "1", margin: "1%" }}>
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

/*
    To do: API calls
*/

export class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: props.providerId,
      description: props.description,
      rating: props.rating,
      specials: props.specials,
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://ip-i-r-api.herokuapp.com/api/reviews/averageScore/?providerId=" + this.state.providerId)
      .then((response) => {
          this.setState({
            rating: response.data.data.score,
            isLoading: false,
          });
        })
  }

  render() {
    if(this.state.isLoading) return(<p>Loading score...</p>)
    else{
      return (
      <div id="information" class="shadow p-3 mb-5 bg-F3F3F3 rounded">
        <ul className="inline-block">
         
          {this.state.specials.map((item) => (
            <Badge pill variant="info" bsPrefix="tag">
              <FaHashtag/>
              {item}
            </Badge>
          ))}
        </ul>
        <hr></hr>
        <p className="description">{this.state.description}</p>
        <hr></hr>
        <StarRating score={this.state.rating} />
      </div>
    );
  }
  }
}

export default Information;
