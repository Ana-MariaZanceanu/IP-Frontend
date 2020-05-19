import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {Button,Modal} from 'react-bootstrap';
import style from '../../styles/LoginDesktopStyle';
import {IoLogoFacebook} from "react-icons/io";

class ButtonFacebookLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        modalVisible:false,
        user:"",
    }

    this.responseFacebook = this.responseFacebook.bind(this);
    this.user = null;
  };

  responseFacebook(response) {
    console.log(response);
    this.setState({user:response.name,modalVisible:true})
  };

  componentClicked(response) {
    console.log(response);
  };

  render() {
    return (
        <div>
          <FacebookLogin
              appId="592881674673349"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
              render={renderProps => (
              <Button variant="outline-danger" style={style.logInFacebook} onClick={renderProps.onClick}>
                  <IoLogoFacebook size={25} style={style.facebookLogo}/>
                      Log in with Facebook
              </Button>
          )}
          />
          <Modal show={this.state.modalVisible}>
              <Modal.Header closeButton>
                  <Modal.Title>Hello {this.state.user}</Modal.Title>
              </Modal.Header>
                  <Modal.Body>We're glad you're back!</Modal.Body>
              <Modal.Footer>
                  <Button style={style.buttonColour} variant="secondary" onClick={()=>{this.setState({modalVisible:false})}}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
        </div>
    )
  }
}

export default ButtonFacebookLogin