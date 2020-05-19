import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ListGroup } from "react-bootstrap";
import '../../../App.css';
import '../../../Animation.css';
import ShowModalProduct from '../../../components/comenzi&rezervari/productModal/ShowModalProduct';
import MainPage from '../../../components/comenzi&rezervari/mainPage/MainPage';
import RestaurantPage from '../../../components/informatii&recenzii/RestaurantPage';
import '../../styles/Profile.css';
import '../../../Animation.css';
import NotFound from '../NotFound';


import Profile from "../Profile";
import history from "../../../history";

class NavigationLogged extends React.Component {
  render() {
    return (
      <div>
        
      <Router history={history}>
         {/* Seteaza ruta initiala a router-ului */}
            <Switch>
              <Route
                exact
                path={'/'}
                component={MainPage}
              />

              <Route
                exact
                path={'/home'}
                component={MainPage}
              />
              <Route
                exact
                path={'/profile'}
                component={Profile}
              />

              <Route
                path="/restaurant/:id"
                component={(routerProps) => (
                  <RestaurantPage
                    providerId={
                      routerProps.match.params.id
                    }
                  />
                )}
              />

              <Route component={NotFound}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default NavigationLogged;
