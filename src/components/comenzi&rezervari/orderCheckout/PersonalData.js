import React, { Component } from "react";
import DataForm from "./DataForm";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      adress: "",
    };
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              2. Personal Data
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DataForm
                  values={values}
                  handleChange={handleChange}
                  disabled={this.props.disabled}
                  disabledAddress={this.props.disabledAddress}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default PersonalData;
