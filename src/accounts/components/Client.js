import React, { useState } from "react";
import "../assets/btnStyle.css";
import {
  FormControl,
  Button,
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";
import * as api from "../api";
import { useMediaQuery } from "react-responsive";
import SingleImageUpload from "./SingleImageUpload";

const Client = ({ data }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const [preferences, setPreferences] = useState(
    data.preferences ? data.preferences : []
  );
  const [allergies, setAllergies] = useState(
    data.allergies ? data.allergies : []
  );
  const [loading, setLoading] = useState(false);
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const [preferencesTagItems, setPreferencesTagItems] = useState(
    data.preferences
      ? preferences.map((element) => {
          let rObj = {};
          rObj["id"] = element;
          rObj["text"] = element;
          return rObj;
        })
      : []
  );

  const [allergiesTagItems, setAllergiesTagItems] = useState(
    data.allergies
      ? allergies.map((element) => {
          let rObj = {};
          rObj["id"] = element;
          rObj["text"] = element;
          return rObj;
        })
      : []
  );

  const [adress, setAdress] = useState(
    data.location ? (data.location.adress ? data.location.adress : "") : ""
  );

  const handleSaveDate = async () => {
    const userData = {
      location: {
        latitude,
        longitude,
      },
      allergies,
      preferences,
    };
    setLoading(true);
    try {
      let answer = await api.profile(userData);
      if (answer.success === true) {
        setLoading(false);
        alert("Profile succesfully updated");
        window.location.reload(true);
      } else {
        setLoading(false);
      }
      console.log(answer);
    } catch (err) {
      console.log(err);
      this.setState({
        error: err,
        loading: false,
        success: false,
      });
    }
  };

  const handleAddPreferencesTag = (tag) => {
    setPreferences([...preferences, tag.text]);
    setPreferencesTagItems([...preferencesTagItems, tag]);
  };

  const handleAddAllergiesTag = (tag) => {
    setAllergies([...allergies, tag.text]);
    setAllergiesTagItems([...allergiesTagItems, tag]);
  };

  const handleDeletePreferencesTags = (tagIndex) => {
    setPreferences(preferences.filter((value, index) => index != tagIndex));

    setPreferencesTagItems(
      preferencesTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const handleDeleteAllergiesTags = (tagIndex) => {
    setAllergies(allergies.filter((value, index) => index != tagIndex));

    setAllergiesTagItems(
      allergiesTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const [latitude, setLatitude] = useState(
    data.location ? (data.location.latitude ? data.location.latitude : 0) : 0
  );
  const [longitude, setLongitude] = useState(
    data.location ? (data.location.longitude ? data.location.longitude : 0) : 0
  );
  const [succesLatitude, setSuccesLatitude] = useState(true);
  const [succesLongitude, setSuccesLongitude] = useState(true);

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

  const handleChangeLatitude = (event) => {
    if (event.target.value < -180 || event.target.value > 180) {
      setSuccesLatitude(false);
    } else {
      setSuccesLatitude(true);
    }
    setLatitude(event.target.value);
  };

  const handleChangeLongitude = (event) => {
    if (event.target.value < -90 || event.target.value > 90) {
      setSuccesLongitude(false);
    } else {
      setSuccesLongitude(true);
    }
    setLongitude(event.target.value);
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 747px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 747px)" });

  return (
    <div>
      {isBigScreen && (
        <div className="profile_client">
          <Form className="client_form">
            <div className="profile_title">
              <h2>PROFILE</h2>
            </div>
            <div className="profile_element">
              <h5>Address</h5>
              <p className="profile_explanations">
                <small>
                  Enter here the place you're more likely to command from, like
                  your house, workplace or school.
                </small>
              </p>
              <div className="adress_profile_element">
                <FormGroup>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl
                    placeholder={longitude}
                    value={longitude}
                    type="number"
                    onChange={handleChangeLongitude}
                  ></FormControl>
                  <div>
                    {advertisationMessage(
                      succesLongitude,
                      "Value should be between -90 and 90"
                    )}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl
                    placeholder={latitude}
                    value={latitude}
                    type="number"
                    onChange={handleChangeLatitude}
                  ></FormControl>
                  <div>
                    {advertisationMessage(
                      succesLatitude,
                      "Value should be between -180 and 180"
                    )}
                  </div>
                </FormGroup>
              </div>
              <hr></hr>
              <div className="profile_element">
                <h5>Preferences</h5>
                <p className="profile_explanations">
                  <small>List there your preferences</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <div className="list_of_objects">
                      <ReactTags
                        placeholder="Add new preference"
                        inline={false}
                        inputFieldPosition="top"
                        tags={preferencesTagItems}
                        handleDelete={handleDeletePreferencesTags}
                        handleAddition={handleAddPreferencesTag}
                        delimiters={delimiters}
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>
              <hr></hr>
              <div className="profile_element">
                <h5>Allergies</h5>
                <p className="profile_explanations">
                  <small>List there your allergies</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <div className="list_of_objects">
                      <ReactTags
                        placeholder="Add new allergy"
                        inline={false}
                        inputFieldPosition="top"
                        tags={allergiesTagItems}
                        handleDelete={handleDeleteAllergiesTags}
                        handleAddition={handleAddAllergiesTag}
                        delimiters={delimiters}
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Photos</h5>
                <p className="profile_explanations">
                  <small>Upload some photos</small>
                </p>
                <SingleImageUpload userId={data.userId} />
              </div>
              <hr></hr>
              <div className="submit_button">
                <Button className="actual_button" onClick={handleSaveDate}>
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="profile_client_phone">
          <Form className="client_form_phone">
            <div className="profile_title">
              <h2>PROFILE</h2>
            </div>
            <div className="profile_element">
              <h5>Address</h5>
              <p className="profile_explanations">
                <small>
                  Enter here the place you're more likely to command from, like
                  your house, workplace or school.
                </small>
              </p>
              <div className="adress_profile_element">
                <FormGroup>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl
                    placeholder={longitude}
                    value={longitude}
                    type="number"
                    onChange={handleChangeLongitude}
                  ></FormControl>
                  <div>
                    {advertisationMessage(
                      succesLongitude,
                      "Value should be between -90 and 90"
                    )}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl
                    placeholder={latitude}
                    value={latitude}
                    type="number"
                    onChange={handleChangeLatitude}
                  ></FormControl>
                  <div>
                    {advertisationMessage(
                      succesLatitude,
                      "Value should be between -180 and 180"
                    )}
                  </div>
                </FormGroup>
              </div>
              <hr></hr>
              <div className="profile_element">
                <h5>Preferences</h5>
                <p className="profile_explanations">
                  <small>List there your preferences</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <div className="list_of_objects">
                      <ReactTags
                        placeholder="Add new preference"
                        inline={false}
                        inputFieldPosition="top"
                        tags={preferencesTagItems}
                        handleDelete={handleDeletePreferencesTags}
                        handleAddition={handleAddPreferencesTag}
                        delimiters={delimiters}
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>
              <hr></hr>
              <div className="profile_element">
                <h5>Allergies</h5>
                <p className="profile_explanations">
                  <small>List there your allergies</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <div className="list_of_objects">
                      <ReactTags
                        placeholder="Add new allergy"
                        inline={false}
                        inputFieldPosition="top"
                        tags={allergiesTagItems}
                        handleDelete={handleDeleteAllergiesTags}
                        handleAddition={handleAddAllergiesTag}
                        delimiters={delimiters}
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>

              <hr></hr>
              <div className="submit_button">
                <Button className="actual_button" onClick={handleSaveDate}>
                  Save
                </Button>
              </div>
              <div className="profile_element">
                <h5>Photos</h5>
                <p className="profile_explanations">
                  <small>Upload some photos</small>
                </p>
                <SingleImageUpload userId={data.userId} />
              </div>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

const listStyle = {
  display: "inline",
};
export default Client;
