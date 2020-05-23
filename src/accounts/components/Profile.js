import React, { Component } from "react";
import NavBarComp from "../../components/comenzi&rezervari/mainPage/NavBarComp";
import User from "./User";
import { Spinner } from "react-bootstrap";
import UserContext from "../../components/UserContext";
import * as api from "../api";

class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async handleCreateProfile(role) {
    let userData;
    if (role === "Provider") {
      userData = {
        location: {
          latitude: 0,
          longitude: 0,
          adress: "",
        },
        menu: { courses: [{}] },
        schedule: [
          { day: "luni", startHour: 0, endHour: 0 },
          { day: "marti", startHour: 0, endHour: 0 },
          { day: "miercuri", startHour: 0, endHour: 0 },
          { day: "joi", startHour: 0, endHour: 0 },
          { day: "vineri", startHour: 0, endHour: 0 },
          { day: "sambata", startHour: 0, endHour: 0 },
          { day: "duminica", startHour: 0, endHour: 0 },
        ],
        specials: [],
        CUI: "",
        description: "",
        priceCategory: "",
        capacity: 0,
        type: "",
      };
    } else {
      userData = {
        allergies: [],
        preferences: [],
        location: {
          latitude: 0,
          longitude: 0,
        },
      };
    }
    this.state = {
      loading: true,
    };
    try {
      let answer = await api.profile(userData);
      if (answer.success === true) {
        this.state = {
          loading: false,
        };
      } else {
        this.state = {
          loading: false,
        };
      }
    } catch (err) {
      console.log(err);
      this.state = {
        loading: false,
      };
    }
  }

  async componentWillMount() {
    if (this.context.user.role === "Provider") {
      if (this.context.user.details === null) {
        await this.handleCreateProfile("Provider");
      }
    } else {
      if (this.context.user.details === null) {
        console.log("Here");
        await this.handleCreateProfile("Client");
      }
    }
    this.setState({ userData: this.context.user });
  }

  render() {
    return (
      <>
        <NavBarComp />
        {this.state.loading === false ? (
          <User data={this.state.userData} />
        ) : (
          <Spinner
            animation="grow"
            variant="danger"
            style={{ marginTop: "5%" }}
          />
        )}
      </>
    );
  }
}

export default Profile;
