import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import NotFound from '../NotFound';
import MainPage from "../../../components/comenzi&rezervari/mainPage/MainPage";
import Restaurants from "../../../components/comenzi&rezervari/restaurantsPage/RestaurantsPage";
import SearchPage from "../../../components/recomandari/search/Index";
import NavBarComp from "../../../components/comenzi&rezervari/mainPage/NavBarComp";
import RestaurantPage from "../../../components/informatii&recenzii/RestaurantPage";


class NavigationNotLogged extends React.Component {
  render() {
    return (
      <div>
      <Router>
        {/* Seteaza ruta initiala a router-ului */}
        <NavBarComp/>
        <div>
          <Switch>
            <Route exact path="/login">
              <Login width={this.props.width} height={this.props.height} />
            </Route>
            <Route exact path="/">
              <MainPage width={this.props.width} height={this.props.height} />
            </Route>
            <Route exact path="/home">
              <MainPage width={this.props.width} height={this.props.height} />
            </Route>
            <Route exact path="/restaurants">
              <Restaurants width={this.props.width} height={this.props.height} />
            </Route>
            <Route exact path="/search">
              <SearchPage width={this.props.width} height={this.props.height} />
            </Route>
            <Route
                path="/restaurant/:id"
                component={(routerProps) => (
                    <RestaurantPage providerId={routerProps.match.params.id} />
                )}
            />

            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default NavigationNotLogged;
