import React, { useState } from "react";
import "../assets/btnStyle.css";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Statistic = ({ data }) => {
  const token = localStorage.getItem("userToken");
  const [showCount, setShowCount] = useState("");
  const [showOrder, setShowOrder] = useState("");
  const [limit, setLimit] = useState(2);
  const [order, setOrder] = useState("");
  const ordersPerHourAll =
    "http://159.65.247.164/recommendations/stats/orders-per-hour?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA";
  const ordersPerHourRestaurant = `http://159.65.247.164/recommendations/stats/orders-per-hour/${token}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA`;
  const coursesOrderedAll = `http://159.65.247.164/recommendations/stats/food-all-restaurants?${showCount}${showOrder}token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA`;

  const coursesOrderedResturant = `http://159.65.247.164/recommendations/stats/food-per-restaurant/${token}?${showCount}${showOrder}token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA`;

  //const recommendations = `http://159.65.247.164/static/carousel.html?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJjZTkxYTI2ZTMyNTE3YzQ2ZWZmZWQiLCJpYXQiOjE1ODk0Mzg3NDZ9.M0seLr5OmfgkLcoEoqN95ZNqUVjvdwMkHMwSRT68Gkw&provider_id=${}&alg_type=recommend_food_for_restaurants`
  const [ordersPerHour, setOrdersPerHour] = useState(ordersPerHourAll);
  const [coursesOrdered, setCoursesOrdered] = useState(coursesOrderedAll);
  const handleARestaurantCoursesOrdered = () => {
    setCoursesOrdered(coursesOrderedResturant);
  };
  const handleAllCoursesOrdered = () => {
    setCoursesOrdered(coursesOrderedAll);
  };
  const handleAllRestaurants = () => {
    setOrdersPerHour(ordersPerHourAll);
  };

  const handleARestaurant = () => {
    setOrdersPerHour(ordersPerHourRestaurant);
  };

  const handleShowCountInput = (event) => {
    let newLimit = event.target.value;
    setLimit(newLimit, setShowCount(`show_count=${newLimit}&`));
  };

  const handleOrderInput = (event) => {
    let newOrder = event.target.value;
    let orderValue = event.target.value === "Ascending" ? "asc" : "desc";
    setOrder(newOrder, setShowOrder(`order=${orderValue}&`));
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 747px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 747px)" });

  return (
    <div>
      {isBigScreen && (
        <div className="statistics_main">
          <div className="profile_title">
            <h2>STATISTICS</h2>
          </div>
          <div className="statistics_element">
            <div className="profile_element">
              <h5>Number of orders per hour</h5>
              <p className="profile_explanations">
                <small>
                  Get a visual representation on how orders are distributed
                  through the day
                </small>
              </p>
            </div>
            <iframe
              src={ordersPerHour}
              title={ordersPerHour}
              frameborder="0"
              width="100%"
              height="400"
              scrolling="no"
            ></iframe>
            <div className="statistics_button">
              <Button
                className="actual_statistics_button"
                onClick={handleAllRestaurants}
              >
                All Restaurants
              </Button>
              <Button
                className="actual_statistics_button"
                onClick={handleARestaurant}
              >
                Your Restaurant
              </Button>
            </div>
          </div>
          <div className="statistics_element">
            <div className="profile_element">
              <h5>Most popular courses</h5>
              <p className="profile_explanations">
                <small>See the most ordered courses.</small>
              </p>
            </div>
            <iframe
              src={coursesOrdered}
              title={coursesOrdered}
              frameBorder="0"
              width="99%"
              height="300"
              scrolling="no"
            ></iframe>
            <div className="statistics_button">
              <Button
                className="actual_statistics_button"
                onClick={handleAllCoursesOrdered}
              >
                All Restaurants
              </Button>
              <Button
                className="actual_statistics_button"
                onClick={handleARestaurantCoursesOrdered}
              >
                Your Restaurant
              </Button>
            </div>
            <div className="statistics_button">
              <div className="profile_element">
                <h5>Limit</h5>
                <p className="profile_explanations">
                  <small>Limit the number of courses that will appear</small>
                </p>
                <div className="adress_profile_element">
                  <FormGroup>
                    <FormControl
                      min="2"
                      max="20"
                      placeholder={limit}
                      value={limit}
                      type="number"
                      onChange={handleShowCountInput}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Order</h5>
                <p className="profile_explanations">
                  <small>
                    Show the courses ordered ascending or descending
                  </small>
                </p>
                <div className="adress_profile_element">
                  <FormGroup>
                    <FormControl
                      value={order}
                      onChange={handleOrderInput}
                      as="select"
                    >
                      <option>Ascending</option>
                      <option>Descending</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      {isTabletOrMobile && (
        <div className="statistics_main_phone">
          <div className="profile_title">
            <h2>STATISTICS</h2>
          </div>
          <div className="statistics_element">
            <div className="profile_element">
              <h5>Number of orders per hour</h5>
              <p className="profile_explanations">
                <small>
                  Get a visual representation on how orders are distributed
                  through the day
                </small>
              </p>
            </div>
            <iframe
              src={ordersPerHour}
              title={ordersPerHour}
              frameborder="0"
              width="100%"
              height="400"
              scrolling="no"
            ></iframe>
            <div className="statistics_button">
              <Button
                className="actual_statistics_button"
                onClick={handleAllRestaurants}
              >
                All Restaurants
              </Button>
              <Button
                className="actual_statistics_button"
                onClick={handleARestaurant}
              >
                Your Restaurant
              </Button>
            </div>
          </div>
          <div className="statistics_element">
            <div className="profile_element">
              <h5>Most popular courses</h5>
              <p className="profile_explanations">
                <small>See the most ordered courses.</small>
              </p>
            </div>
            <iframe
              src={coursesOrdered}
              title={coursesOrdered}
              frameBorder="0"
              width="99%"
              height="300"
              scrolling="no"
            ></iframe>
            <div className="statistics_button">
              <Button
                className="actual_button"
                onClick={handleAllCoursesOrdered}
              >
                All Restaurants
              </Button>
              <Button
                className="actual_button"
                onClick={handleARestaurantCoursesOrdered}
              >
                Your Restaurant
              </Button>
            </div>
            <div className="statistics_button">
              <div className="profile_element">
                <h5>Limit</h5>
                <p className="profile_explanations">
                  <small>Limit the number of courses that will appear</small>
                </p>
                <div className="adress_profile_element">
                  <FormGroup>
                    <FormControl
                      min="2"
                      max="20"
                      placeholder={limit}
                      value={limit}
                      type="number"
                      onChange={handleShowCountInput}
                    ></FormControl>
                  </FormGroup>
                </div>
              </div>
              <div className="profile_element">
                <h5>Order</h5>
                <p className="profile_explanations">
                  <small>
                    Show the courses ordered ascending or descending
                  </small>
                </p>
                <div className="adress_profile_element">
                  <FormGroup>
                    <FormControl
                      value={order}
                      onChange={handleOrderInput}
                      as="select"
                    >
                      <option>Ascending</option>
                      <option>Descending</option>
                    </FormControl>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistic;
