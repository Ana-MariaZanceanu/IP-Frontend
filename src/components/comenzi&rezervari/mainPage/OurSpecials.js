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
      desc:
        "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
      specials: [
        {
          restaurant: "First Special Offer",
          desc:
            "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
        },
        {
          restaurant: "Second Special Offer",
          desc:
            "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
        },
        {
          restaurant: "Third Special Offer",
          desc:
            "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
        },
        {
          restaurant: "4th Special Offer",
          desc:
            "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
        },
        {
          restaurant: "5th Special Offer",
          desc:
            "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
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
