import React, { Component,today } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.success = false;
    this.message = "";
    this.state = {
      step: 1,
      userName: "",
      score: 0,
      description: "",
      timeCreated: "",
      provider: props.provider,
      isEditing: props.isEditing,
      revId: props.revId
    };
  }
  state={
    curTime : new Date().toLocaleString(),
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  addFormDetails = (e, data) => {
    e.preventDefault();
    this.setState({
      userName: data.userName,
      score: data.score,
      description: data.description,
    });
  };

  modifySuccess = (succes, message) => {
    console.log("succes primit " + succes);
    this.success = succes;
    this.message = message;
  };

  render() {
    const { step } = this.state;
    const {
      userName ,
      score ,
      description ,
      timeCreated,
    } = this.state;
    const values = {
      userName ,
      score ,
      description ,
      timeCreated,
      
    };
    switch (step) {
      case 1:
        return (
          <FormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            isEditing = {this.state.isEditing}
            revId = {this.state.revId}
          />
        );
      case 2:
        return (
          <FormConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addFormDetails={this.addFormDetails}
            values={values}
            modifySuccess={this.modifySuccess}
            provider={this.state.provider}
            isEditing = {this.state.isEditing}
            revId = {this.state.revId}
          />
        );
      case 3:
        return this.success === true ? (
          <FormSucces />
        ) : (
          <FormFail response={this.message} prevStep={this.prevStep} />
        );
      default:
        return null;
    }
  }
}

export default UserForm;