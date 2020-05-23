import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useMediaQuery } from "react-responsive";
import * as api from "../api";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  Button,
} from "react-bootstrap";

import MultipleImageUpload from "./MultipleImageUpload";

const Provider = ({ data }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const [newSpecial, setNewSpecial] = useState("");
  const [selectedSpecial, setSelectedSpecial] = useState("");
  const [specials, setSpecials] = useState(
    data ? (data.specials ? data.specials : []) : []
  );

  const [specialsTagItems, setSpecialTagItems] = useState(
    data
      ? data.specials
        ? specials.map((element) => {
            let newSpecialTag = {};
            newSpecialTag["id"] = element;
            newSpecialTag["text"] = element;
            return newSpecialTag;
          })
        : []
      : []
  );
  const [capacity, setCapacity] = useState(
    data ? (data.capacity ? data.capacity : 0) : 0
  );
  const [type, setType] = useState(data ? (data.type ? data.type : "") : "");
  const [latitude, setLatitude] = useState(
    data
      ? data.location
        ? data.location.latitude
          ? data.location.latitude
          : 0
        : 0
      : 0
  );
  const [longitude, setLongitude] = useState(
    data
      ? data.location
        ? data.location.longitude
          ? data.location.longitude
          : 0
        : 0
      : 0
  );
  const [adress, setAdress] = useState(
    data
      ? data.location
        ? data.location.adress
          ? data.location.adress
          : ""
        : ""
      : ""
  );
  const [priceCategory, setPriceCategory] = useState(
    data ? (data.priceCategory ? data.priceCategory : "") : ""
  );
  const [CUI, setCUI] = useState(data ? (data.CUI ? data.CUI : "") : "");
  const [description, setDescription] = useState(
    data ? (data.description ? data.description : "") : ""
  );

  const [loading, setLoading] = useState(false);
  const [succesCUI, setSuccesCUI] = useState(true);
  const [succesLatitude, setSuccesLatitude] = useState(true);
  const [succesLongitude, setSuccesLongitude] = useState(true);
  const [succesCapacity, setSuccesCapacity] = useState(true);

  const handleRemoveSpecial = (event) => {
    setSelectedSpecial(event.target.value);
  };

  const handleRemoveSpecialsList = () => {
    setSpecials(
      specials.filter((value) => {
        return value !== selectedSpecial;
      })
    );
  };

  const handleAddSpecial = async (event) => {
    setNewSpecial(event.target.value);
  };

  const handleAddSpecialToList = async (event) => {
    setSpecials([...specials, newSpecial]);
    setNewSpecial("");
  };

  const handleSaveDate = async () => {
    const userData = {
      location: {
        latitude,
        longitude,
        adress,
      },
      specials,
      CUI,
      description,
      priceCategory,
      capacity,
      type,
    };
    setLoading(true);
    try {
      let answer = await api.profile(userData);

      if (answer.success === true) {
        setPriceCategory(answer.userDetails.priceCategory);
        setLongitude(answer.userDetails.location.longitude);
        console.log(longitude);
        alert("Congratulation! You just updated your profile");
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDeleteTags = (tagIndex) => {
    setSpecials(specials.filter((value, index) => index !== tagIndex));
    setSpecialTagItems(
      specialsTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const handleAddTag = (tag) => {
    setSpecials([...specials, tag.text]);
    setSpecialTagItems([...specialsTagItems, tag]);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeCUI = (event) => {
    if (!isValidCUI(event.target.value)) {
      setSuccesCUI(false);
    } else {
      setSuccesCUI(true);
    }
    setCUI(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangePriceCategory = (event) => {
    setPriceCategory(event.target.value);
  };
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

  const handleChangeAdress = (event) => {
    setAdress(event.target.value);
  };

  const handleChangeCapacity = (event) => {
    if (parseInt(event.target.value) < 0) {
      setSuccesCapacity(false);
    } else {
      setSuccesCapacity(true);
    }
    setCapacity(event.target.value);
  };

  const isValidCUI = (CUI) => {
    if (/^C[.]?U[.]?I[.]?[ ]?R?O?[ ]?[0-9]{6,8}/.test(CUI)) return true;
    return false;
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 747px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 747px)" });

  return (
    <div>
      {isBigScreen && (
        <div className="profile_provider">
          <div className="provider_form">
            <Form>
              <div className="profile_title">
                <h2>PROFILE</h2>
              </div>
              <div className="profile_element">
                <h5>Address</h5>
                <p className="profile_explanations">
                  <small>Let out clients know where they can find you!</small>
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
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormLabel>Adrees</FormLabel>
                    <FormControl
                      placeholder={adress}
                      value={adress}
                      type="text"
                      onChange={handleChangeAdress}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>CUI</h5>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={CUI}
                      value={CUI}
                      type="text"
                      onChange={handleChangeCUI}
                    ></FormControl>
                    <div>
                      {advertisationMessage(
                        succesCUI,
                        "This is not a valid CUI"
                      )}
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Location Type</h5>
                <p className="profile_explanations">
                  <small>Are you a restaurant or a canteen?</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={type}
                      value={type}
                      as="select"
                      onChange={handleChangeType}
                    >
                      <option>Restaurant</option>
                      <option>Canteen</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Category Price</h5>
                <p className="profile_explanations">
                  <small>
                    Affordable, medium or expensive? It's your choice!
                  </small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={priceCategory}
                      value={priceCategory}
                      as="select"
                      onChange={handleChangePriceCategory}
                    >
                      <option>Affordable</option>
                      <option>Medium</option>
                      <option>Expensive</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Capacity</h5>
                <p className="profile_explanations">
                  <small>Enter the number of seats</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={capacity}
                      value={capacity}
                      type="number"
                      onChange={handleChangeCapacity}
                    ></FormControl>
                    <div>
                      {advertisationMessage(
                        succesCapacity,
                        "Mmm... the number doesn't look right"
                      )}
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Specialities</h5>
                <p className="profile_explanations">
                  <small>List there your signature dishes</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <div className="list_of_objects">
                      <ReactTags
                        placeholder="Add new dish"
                        allowDeleteFromEmptyInput={false}
                        allowUnique={true}
                        inputFieldPosition="top"
                        tags={specialsTagItems}
                        handleDelete={handleDeleteTags}
                        handleAddition={handleAddTag}
                        delimiters={delimiters}
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Description</h5>
                <p className="profile_explanations">
                  <small>
                    Use your Menu Descriptions to tell a story to your
                    customers, paint a good picture in their heads, that leaves
                    them salivating and ordering for more
                  </small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={description}
                      value={description}
                      as="textarea"
                      key="1"
                      onChange={handleChangeDescription}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Photos</h5>
                <p className="profile_explanations">
                  <small>Upload some photos</small>
                </p>
                <MultipleImageUpload userId={data.userId} />
              </div>
              <div className="submit_button">
                <Button className="actual_button" onClick={handleSaveDate}>
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="profile_provider_phone">
          <div className="provider_form_phone">
            <Form>
              <div className="profile_title">
                <h2>PROFILE</h2>
              </div>
              <div className="profile_element">
                <h5>Address</h5>
                <p className="profile_explanations">
                  <small>Let out clients know where they can find you!</small>
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
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormLabel>Adrees</FormLabel>
                    <FormControl
                      placeholder={adress}
                      value={adress}
                      type="text"
                      onChange={handleChangeAdress}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>CUI</h5>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={CUI}
                      value={CUI}
                      type="text"
                      onChange={handleChangeCUI}
                    ></FormControl>
                    <div>
                      {advertisationMessage(
                        succesCUI,
                        "This is not a valid CUI"
                      )}
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Location Type</h5>
                <p className="profile_explanations">
                  <small>Are you a restaurant or a canteen?</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={type}
                      value={type}
                      as="select"
                      onChange={handleChangeType}
                    >
                      <option>Restaurant</option>
                      <option>Canteen</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Category Price</h5>
                <p className="profile_explanations">
                  <small>
                    Affordable, medium or expensive? It's your choice!
                  </small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={priceCategory}
                      value={priceCategory}
                      as="select"
                      onChange={handleChangePriceCategory}
                    >
                      <option>Affordable</option>
                      <option>Medium</option>
                      <option>Expensive</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Capacity</h5>
                <p className="profile_explanations">
                  <small>Enter the number of seats</small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={capacity}
                      value={capacity}
                      type="number"
                      onChange={handleChangeCapacity}
                    ></FormControl>
                    <div>
                      {advertisationMessage(
                        succesCapacity,
                        "Mmm... the number doesn't look right"
                      )}
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Specialities</h5>
                <p className="profile_explanations">
                  <small>List there your signature dishes</small>
                </p>
                <div className="align_left_profile_input">
                  <div className="add_to_list">
                    <FormGroup>
                      <FormControl
                        type="text"
                        value={newSpecial}
                        onChange={handleAddSpecial}
                      ></FormControl>
                    </FormGroup>
                    <div className="add_button">
                      <Button
                        className="actual_button"
                        onClick={handleAddSpecialToList}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                  <FormGroup>
                    <FormControl as="select" onChange={handleRemoveSpecial}>
                      <option
                        style={{ display: "none" }}
                        selected="selected"
                        value="0"
                      >
                        Specialities
                      </option>
                      {specials.map((special) => {
                        return (
                          <option value={special} key={special}>
                            {special}
                          </option>
                        );
                      })}
                    </FormControl>
                    <div className="add_button">
                      <Button
                        className="actual_button"
                        onClick={handleRemoveSpecialsList}
                      >
                        Remove
                      </Button>
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Description</h5>
                <p className="profile_explanations">
                  <small>
                    Use your Menu Descriptions to tell a story to your
                    customers, paint a good picture in their heads, that leaves
                    them salivating and ordering for more
                  </small>
                </p>
                <div className="align_left_profile_input">
                  <FormGroup>
                    <FormControl
                      placeholder={description}
                      value={description}
                      as="textarea"
                      onChange={handleChangeDescription}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Photos</h5>
                <p className="profile_explanations">
                  <small>Upload some photos</small>
                </p>
                <div className="align_left_profile_input">
                  <MultipleImageUpload userId={data.userId} />
                </div>
              </div>
              <Button variant="outline-danger" onClick={handleSaveDate}>
                Save
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Provider;
