import React, { useState } from "react";
import "../assets/btnStyle.css";
import {
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Form,
} from "react-bootstrap";
import * as api from "../api";

const AccountSettings = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(data.email ? data.email : "");
  const [username, setUsername] = useState(data.name ? data.name : "");
  const [succesEmail, setSuccesEmail] = useState(true);
  const [currentPass, setPassword] = useState(
    data.password ? data.password : ""
  );
  const [newPass, setNewPassword] = useState(true);
  const [confirmNewPass, setConfirmPassword] = useState(true);

  const advertisationMessage = (correct, message) => {
    if (correct) {
      return <p></p>;
    } else {
      return (
        <p className="avertisment">
          <small>{message}</small>
        </p>
      );
    }
  };

  const handleSaveDate = async () => {
    const userData = {
      email,
      username,
      currentPass,
      newPass,
      confirmNewPass,
    };
    setLoading(true);
    try {
      console.log(currentPass + " " + newPass + " " + confirmNewPass);
      let answer = await api.changeEmail(userData);
      let answer2 = await api.changeName(userData);
      let answer3 = await api.changePassword(userData);
      if (
        answer.success === true &&
        answer2.success === true // &&
        // answer3.success === true
      ) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      console.log(answer);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleChangeEmail = (event) => {
    if (validEmail(event.target.value)) {
      setSuccesEmail(true);
    } else {
      setSuccesEmail(false);
    }
    setEmail(event.target.value);
  };

  return (
    <div className="account_settings_form">
      <Form>
        <div className="profile_title">
          <h2>Account Settings</h2>
        </div>
        <div className="profile_element">
          <h5>Username</h5>
          <p className="profile_explanations">
            <small>Let us know how would you like to be adressed</small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder={username}
                value={username}
                type="text"
                onChange={handleChangeUsername}
              ></FormControl>
            </FormGroup>
          </div>
        </div>
        <div className="profile_element">
          <h5>Email</h5>
          <p className="profile_explanations">
            <small>
              Communication is the key to successful relationships. So please
              provide us a valid email so we can keep in touch
            </small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder={email}
                value={email}
                type="email"
                onChange={handleChangeEmail}
              ></FormControl>
              <div>
                {advertisationMessage(
                  succesEmail,
                  "Mmm... it doesn't look like a valid email."
                )}
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="profile_element">
          <h5>Password</h5>
          <p className="profile_explanations">
            <small>
              "Your password should be treated like a toothbrush: you do not
              share it and you change it regularly !"
            </small>
          </p>
          <div className="account_settings_elements">
            <FormGroup>
              <FormControl
                placeholder="Current password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
                onChange={handleChangePassword}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="New password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
                onChange={handleNewPassword}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                placeholder="Confirm new password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
                onChange={handleConfirmPassword}
              />
            </FormGroup>
          </div>
        </div>
        <hr></hr>
        <div class="saveBtnContainer">
          <Button
            class="editBtn"
            as="input"
            type="submit"
            value="Save"
            onClick={handleSaveDate}
          />{" "}
        </div>
      </Form>
    </div>
  );
};

export default AccountSettings;
