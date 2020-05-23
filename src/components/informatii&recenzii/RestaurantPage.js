import React, { Component, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./content";
import Menu from "./menu";
import Information from "./Information";
import Schedule from "./schedule";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import NavBarComp from "../comenzi&rezervari/mainPage/NavBarComp";
import ReviewHolder from "./ReviewHolder";
import UserContext from "../UserContext";

/*  var courses = [ {name: "Supa crema de procini cu julien de pancetta", price: 19, image: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
  {name: "Bifteki de legume", price: 25, image: "http://petrisorcatering.ro/wp-content/uploads/2017/11/biftec_cu_legume_la_gratar_petrisor_catering-51-01-600x600.jpg"},
  {name: "Gyros pui", price: 20, image: "https://www.takeaway.com/ro/foodwiki/uploads/sites/10/2019/08/gyros_3-1080x960.jpg"},
  {name: "Supa crema de procini cu julien de pancetta", price: 19, image: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
  {name: "Bifteki de legume", price: 25, image: "http://petrisorcatering.ro/wp-content/uploads/2017/11/biftec_cu_legume_la_gratar_petrisor_catering-51-01-600x600.jpg"},
  {name: "Gyros pui", price: 20, image: "https://www.takeaway.com/ro/foodwiki/uploads/sites/10/2019/08/gyros_3-1080x960.jpg"},{name: "Supa crema de procini cu julien de pancetta", price: 19, image: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
  {name: "Bifteki de legume", price: 25, image: "http://petrisorcatering.ro/wp-content/uploads/2017/11/biftec_cu_legume_la_gratar_petrisor_catering-51-01-600x600.jpg"},
  {name: "Gyros pui", price: 20, image: "https://www.takeaway.com/ro/foodwiki/uploads/sites/10/2019/08/gyros_3-1080x960.jpg"},{name: "Supa crema de procini cu julien de pancetta", price: 19, image: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
  {name: "Bifteki de legume", price: 25, image: "http://petrisorcatering.ro/wp-content/uploads/2017/11/biftec_cu_legume_la_gratar_petrisor_catering-51-01-600x600.jpg"},
  {name: "Gyros pui", price: 20, image: "https://www.takeaway.com/ro/foodwiki/uploads/sites/10/2019/08/gyros_3-1080x960.jpg"}
];

  var providerName = "Restaurant Template";
  var providerImages = [ {imageLink: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {imageLink: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {imageLink: "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
];
  var schedule = [
    {day: "Luni", startHour: "10 am", endHour: "5 pm"},
    {day: "Marti", startHour: "10 am", endHour: "5 pm"},
    {day: "Miercuri", startHour: "10 am", endHour: "5 pm"},
    {day: "Joi", startHour: "10 am", endHour: "5 pm"},
    {day: "Vineri", startHour: "10 am", endHour: "5 pm"},
    {day: "Sambata", startHour: "10 am", endHour: "5 pm"},
    {day: "Duminica", startHour: "10 am", endHour: "5 pm"}
  ];

  var description = "This is a test for the restaurant description";
  var rating = 8;
  var specials = [
    {name: "Pasta"},
    {name: "Crepes"},
    {name: "Buritto"},
    {name: "Chilli con Carne"}
  ];
*/

export class RestaurantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: props.providerId,
      isLoading: true,
      courses: [],
      providerName: null,
      providerImages: [],
      schedule: [],
      description: null,
      rating: 0,
      specials: [],
    };
  }


  componentDidMount() {
    axios
      .get("https://ip-accounts.herokuapp.com/api/providers/" + this.state.providerId)
      .then((response) => {
        if(response.data.data.provider.details === null){
          this.setState({
            providerName: response.data.data.provider.name,
            isLoading: false,
          });
        }
        else{
          if(response.data.data.provider.details.schedule === null){
            this.setState({
              courses: response.data.data.provider.details.menu.courses,
              providerName: response.data.data.provider.name,
              providerImages: response.data.data.provider.details.images,
              description: response.data.data.provider.details.description,
              rating: response.data.data.provider.details.rating,
              specials: response.data.data.provider.details.specials,
              isLoading: false,
            });
          }
          else{
            this.setState({
            courses: response.data.data.provider.details.menu.courses,
            providerName: response.data.data.provider.name,
            providerImages: response.data.data.provider.details.images,
            schedule: response.data.data.provider.details.schedule.schedule,
            description: response.data.data.provider.details.description,
            rating: response.data.data.provider.details.rating,
            specials: response.data.data.provider.details.specials,
            isLoading: false,
          });}
      }
    });
  }

  static contextType = UserContext;

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      var url = "http://159.65.247.164/static/carousel.html?token=" + this.context.user.emailToken + "&provider_id=" + this.state.providerId + "&alg_type=restaurant_food_recommendation";
      console.log(url);
      return (
        <div>
          <Helmet>
            <title>Restaurant</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
          </Helmet>
          <div className="page">
            {/* <BackButton /> */}
            <div id="wrapper">
              <Content
                providerName={this.state.providerName}
                providerImages={this.state.providerImages}
              />
              <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                <Col
                  xl={{ span: 8 }}
                  lg={{ span: 6 }}
                  md={{ span: 6 }}
                  sm={{ span: 6 }}
                >
                  <Menu courses={this.state.courses} />
                </Col>
                <Col
                  xl={{ span: 4 }}
                  lg={{ span: 6 }}
                  md={{ span: 6 }}
                  sm={{ span: 6 }}
                >
                  <Information
                    description={this.state.description}
                    rating={this.state.rating}
                    specials={this.state.specials}
                  />
                  <Schedule schedule={this.state.schedule} providerId={this.state.providerId} />
                  <ReviewHolder providerId={this.state.providerId} />
                </Col>
              </Row>
              <Row>
                <iframe
                  src={"http://159.65.247.164/static/carousel.html?token=" + this.context.user.emailToken + "&provider_id=5ebcf11126e32517c46effff&alg_type=restaurant_food_recommendation"}
                  frameBorder="0"
                  width="1200"
                  height="500"
                  scrolling="no"
                >
                </iframe>
              </Row>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RestaurantPage;
