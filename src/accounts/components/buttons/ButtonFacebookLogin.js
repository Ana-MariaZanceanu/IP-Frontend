import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  Button,
  InputGroup,
  FormControl,
  Spinner,
  Modal,
} from "react-bootstrap";
import { IoIosMail, IoIosLock, IoIosPerson } from "react-icons/io";
import style from "../../styles/LoginDesktopStyle";
import styleMobile from "../../styles/LoginMobileStyle";
import { IoLogoFacebook } from "react-icons/io";
import axios from "axios";
import * as api from "../../api/index";

const URL = "https://proiect-ip.herokuapp.com/";

class ButtonFacebookLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      loginModal: false,
      user: "",
      accountType: "",
      username: "",
      alertUsername: "#DCDCDC",
      alertRoleType: "#DCDCDC",
      loading: false,
    };

    this.responseFacebook = this.responseFacebook.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.user = null;
  }

  verifyEmailExist = async (res) => {
    if (res.email !== undefined) {
      const data = await api.getUserByEmail(res.email);
      if (data.success === false) {
        this.setState({ loginModal: true });
      } else {
        const loginData = await api.login(
          data.data.email,
          "EAAIbOQWc3MUBAEl57"
        );
        window.location.href = URL;
      }
    }
  };

  responseFacebook(response) {
    this.verifyEmailExist(response);
    this.setState({ user: response, modalVisible: true });
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value,
      alertUsername: "#DCDCDC",
    });
  }

  componentClicked(response) {
    console.log(response);
  }

  send = async () => {
    if (this.state.username === "") {
      this.setState({ alertUsername: "red" });
    } else if (this.state.username.length < 5) {
      alert("Username-ul trebuie sa contina minim 6 caractere!");
    } else if (this.state.accountType === "") {
      alert("Please choose account type!");
    } else {
      this.setState({ loading: true });
      let answer = await api.register(
        this.state.username,
        this.state.accountType,
        this.state.user.email,
        "EAAIbOQWc3MUBAEl57"
      );
      if (answer.success === true) {
        this.setState({ loading: false, success: true });
        let answerLogin = await api.login(
          this.state.user.email,
          "EAAIbOQWc3MUBAEl57"
        );
        alert("Te-ai logat cu success!");
        window.location.href = URL;
      } else {
        this.setState({ loading: false });
        alert("error " + answer.errorMessage);
      }
    }
  };

  renderRoleButton = (text, role) => {
    return (
      <Button
        variant="outline-danger"
        onClick={() => {
          this.setState({ accountType: role });
        }}
        style={{
          backgroundColor: this.state.accountType === role ? "red" : "white",
          color: this.state.accountType === role ? "white" : "red",
        }}
      >
        {text}
      </Button>
    );
  };

  renderInputFieldPhone = (
    topText,
    placeHolder,
    inputFunction,
    type,
    alert,
    value
  ) => {
    return (
      <div style={style.inputContainer}>
        <p style={style.inputText}>{topText}</p>
        <InputGroup className="mb-3" style={style.inputGroup}>
          <FormControl
            placeholder={placeHolder}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={inputFunction}
            type={type}
            value={value}
            style={{ borderColor: alert }}
          />
          <InputGroup.Prepend>
            <InputGroup.Text
              style={{
                ...styleMobile.inputGroupText,
                borderColor: alert,
              }}
              id="basic-addon1"
            >
              {topText === "Password" || topText === "Confirm password" ? (
                <IoIosLock size={22} style={styleMobile.iconStyle} />
              ) : (
                <div></div>
              )}
              {topText === "Email address" || topText === "" ? (
                <IoIosMail size={22} style={styleMobile.iconStyle} />
              ) : (
                <div></div>
              )}
              {topText === "Username" ? (
                <IoIosPerson size={22} style={styleMobile.iconStyle} />
              ) : (
                <div></div>
              )}
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
  };

  render() {
    return (
      <div>
        <FacebookLogin
          appId="592881674673349"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={(renderProps) => (
            <Button
              variant="outline-danger"
              style={style.logInFacebook}
              onClick={renderProps.onClick}
            >
              <IoLogoFacebook size={25} style={style.facebookLogo} />
              Log in with Facebook
            </Button>
          )}
        />
        <Modal show={this.state.login}>
          <Modal.Header closeButton>
            <Modal.Title>Hello {this.state.user}</Modal.Title>
          </Modal.Header>
          <Modal.Body>We're glad you're back!</Modal.Body>
          <Modal.Footer>
            <Button
              style={style.buttonColour}
              variant="secondary"
              onClick={() => {
                this.setState({
                  modalVisible: false,
                });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.loginModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              It's your first login! Please chose an username and role!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.renderInputFieldPhone(
              "Username",
              "username",
              this.handleChangeUsername,
              "text",
              this.state.alertUsername,
              this.state.username
            )}
            {this.renderRoleButton("Client", "Client")}
            {this.renderRoleButton("Provider", "Provider")}
            {this.state.loading === true ? (
              <Spinner
                animation="grow"
                variant="danger"
                style={styleMobile.spinnerStyle}
              />
            ) : (
              <p></p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={styleMobile.closeButtonLostPassword}
              variant="secondary"
              onClick={() => {
                this.setState({ loginModal: false });
              }}
            >
              Close
            </Button>
            <Button
              style={styleMobile.sendButtonLostPassword}
              variant="primary"
              onClick={() => {
                this.send();
              }}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ButtonFacebookLogin;
