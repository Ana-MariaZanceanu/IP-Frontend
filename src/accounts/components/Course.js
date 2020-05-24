import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import UploadMenuPhoto from "./UploadMenuPhoto";
import * as api from "../api";

import {
  Accordion,
  Card,
  Button,
  FormControl,
  FormGroup,
} from "react-bootstrap";
const Course = ({ data }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [loading, setLoading] = useState(false);
  const placeholder =
    "https://ip-accounts.herokuapp.com/images/placeholder_menu.png";
  const [name, setName] = useState(data.course.name);
  const [price, setPrice] = useState(data.course.price);
  const [category, setCategory] = useState(
    data.course.category ? data.course.category : []
  );
  const [ingredients, setIngredients] = useState(
    data.course.ingredients ? data.course.ingredients : []
  );
  const [allergenes, setAllergenes] = useState(
    data.course.allergenes ? data.course.allergenes : []
  );

  const [categoryTagItems, setCategoryTagItems] = useState(
    data.course.category
      ? category.map((element) => {
          let rObj = {};
          rObj["id"] = element;
          rObj["text"] = element;
          return rObj;
        })
      : []
  );

  const [newIngredient, setNewIngredient] = useState("");
  const [newAllergen, setNewAllergen] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedAllergene, setSelectedAllergene] = useState("");
  const [inUseImage, setInUseImage] = useState(
    data.course.image ? data.course.image : placeholder
  );

  const handleRemoveIngredient = (event) => {
    setSelectedIngredient(event.target.value);
  };

  const handleRemoveIngredientsList = (event) => {
    setIngredients(
      ingredients.filter((value) => {
        return value !== selectedIngredient;
      })
    );
  };

  const handleRemoveAllergene = (event) => {
    setSelectedAllergene(event.target.value);
  };

  const handleRemoveAllergenesList = (event) => {
    setAllergenes(
      allergenes.filter((value) => {
        return value !== selectedAllergene;
      })
    );
  };
  const handleAddIngredient = (event) => {
    setNewIngredient(event.target.value);
  };

  const handleAddIngredientToList = (event) => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
  };

  const handleAddAllergene = (event) => {
    setNewAllergen(event.target.value);
  };

  const handleAddAllergenesToList = (event) => {
    setAllergenes([...allergenes, newAllergen]);
    setNewAllergen("");
  };

  const handleDeleteTags = (tagIndex) => {
    setCategory(category.filter((value, index) => index != tagIndex));
    setCategoryTagItems(
      categoryTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const handleAddTag = (tag) => {
    setCategory([...category, tag.text]);
    setCategoryTagItems([...categoryTagItems, tag]);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSaveDate = async () => {
    const courseData = {
      name,
      price,
      ingredients,
      allergenes,
      category,
    };
    setLoading(true);
    try {
      let answer = await api.updateCourse(data.course._id, courseData);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDeleteCourse = async () => {
    try {
      setLoading(true);
      let answer = await api.deleteCourse(data.course._id);
      setLoading(false);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDeletePhoto = (event) => {
    api.deleteCoursePhoto(data.idCourse).then(() => {
      setInUseImage(placeholder);
      window.location.reload(true);
    });
  };

  return (
    <Card>
      <Card.Header className="header_menu">
        <img className="image_menu" src={inUseImage} />
        <Accordion.Toggle
          as={Button}
          variant="link"
          className="course_name"
          eventKey={data.index}
        >
          <p>{name}</p>
        </Accordion.Toggle>
        <Button
          className="remove_button"
          variant="danger"
          onClick={handleDeleteCourse}
        >
          X
        </Button>
      </Card.Header>
      <Accordion.Collapse eventKey={data.index}>
        <Card.Body>
          <div className="profile_element">
            <h5>Name</h5>
            <p className="profile_explanations">
              <small>
                Add a suggestive, but also interesting name for your course!
              </small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={name}
                  value={name}
                  type="text"
                  onChange={handleChangeName}
                ></FormControl>
              </FormGroup>
            </div>
          </div>

          <div className="profile_element">
            <h5>Price</h5>
            <p className="profile_explanations">
              <small>The price with TVA and expressed in lei.</small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={price}
                  value={price}
                  type="number"
                  onChange={handleChangePrice}
                ></FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Categories</h5>
            <div className="align_left_profile_input">
              <FormGroup>
                <div className="list_of_objects">
                  <ReactTags
                    allowDeleteFromEmptyInput={false}
                    placeholder="Add new category"
                    inputFieldPosition="top"
                    tags={categoryTagItems}
                    handleDelete={handleDeleteTags}
                    handleAddition={handleAddTag}
                    delimiters={delimiters}
                  />
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Ingredients</h5>
            <p className="profile_explanations">
              <small>
                List there the main ingredients used in your course.
              </small>
            </p>
            <div className="align_left_profile_input">
              <div className="add_to_list">
                <FormGroup>
                  <FormControl
                    type="text"
                    value={newIngredient}
                    placeholder="Enter ingredient"
                    onChange={handleAddIngredient}
                  ></FormControl>
                </FormGroup>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleAddIngredientToList}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <FormGroup>
                <FormControl as="select" onChange={handleRemoveIngredient}>
                  <option
                    style={{ display: "none" }}
                    selected="selected"
                    value="0"
                  >
                    Ingredients
                  </option>
                  {ingredients.map((ingredient) => {
                    return (
                      <option value={ingredient} key={ingredient}>
                        {ingredient}
                      </option>
                    );
                  })}
                </FormControl>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleRemoveIngredientsList}
                  >
                    Delete
                  </Button>
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Allergenes</h5>
            <p className="profile_explanations">
              <small>
                We know you care about your clients, so let them know if this
                product contains any allergenes!
              </small>
            </p>
            <div className="align_left_profile_input">
              <div className="add_to_list">
                <FormGroup>
                  <FormControl
                    type="text"
                    value={newAllergen}
                    onChange={handleAddAllergene}
                    placeholder="Enter allergene"
                  ></FormControl>
                </FormGroup>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleAddAllergenesToList}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <FormGroup>
                <FormControl
                  value="Allergenes"
                  as="select"
                  onChange={handleRemoveAllergene}
                >
                  <option
                    style={{ display: "none" }}
                    selected="selected"
                    value="0"
                  >
                    Allergenes
                  </option>
                  {allergenes.map((allergene) => {
                    return (
                      <option key={allergene} value={allergene}>
                        {allergene}
                      </option>
                    );
                  })}
                </FormControl>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleRemoveAllergenesList}
                  >
                    Delete
                  </Button>
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="submit_button">
            <Button className="actual_button" onClick={handleSaveDate}>
              Save
            </Button>
          </div>
          <UploadMenuPhoto
            idCourse={data.course._id}
            setInUseImage={setInUseImage}
          />
          <div className="submit_button">
            <Button className="actual_button" onChange={handleDeletePhoto}>
              Delete Photo
            </Button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Course;
