import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurSpecialsNav from "./OurSpecialsNav";
import CompTitle from "./CompTitle";
import './mainPage.css';
export class OurSpecials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "0",
      title: "Check Our Specials",
      desc: "",
      specials: [
        {
          restaurant: "First Special Offer",
          desc:
            "",
        },
        {
          restaurant: "Second Special Offer",
          desc:
            "",
        },
        {
          restaurant: "Third Special Offer",
          desc:
            "",
        },
        {
          restaurant: "4th Special Offer",
          desc:
            "",
        },
        {
          restaurant: "5th Special Offer",
          desc:
            "",
        },
      ],
    };
  }
  handleChangeKey = (selectedKey) => {
    this.setState({ key: selectedKey });
  };
  render() {
    return (
      <div>
        <Container fluid="md">
          <CompTitle title={this.state.title} desc={this.state.desc} />
          <Row className="mt-3">
            <Col lg="3" className="ourSpecials">
              <OurSpecialsNav
                specials={this.state.specials}
                handleChangeKey={this.handleChangeKey}
              />
            </Col>
            <Col md>
              <Container>
                <p>{this.state.specials[this.state.key].desc}</p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default OurSpecials;
