import React, { Component } from "react";

import User from "./User";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import UserContext from '../../components/UserContext';
class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async componentWillMount() {
    this.setState({userData:this.context.user });
  }


  render() {
    return this.state.loading === false ? (
      <User data={this.state.userData} />
    ) : (
      <Spinner animation="grow" variant="danger" style={{ marginTop: "5%" }} />
    );
  }
}

export default Profile;
