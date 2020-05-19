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

class NavigationNotLogged extends React.Component {
  render() {
    return (
      <Router>
        {/* Seteaza ruta initiala a router-ului */}
        <div>
          <Switch>
            <Route exact path="/">
              <Login width={this.props.width} height={this.props.height} />
            </Route>
            

            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavigationNotLogged;
