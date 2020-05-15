import React from "react";
import "./App.css";
import "./Animation.css";
import ShowModalProduct from "./components/comenzi&rezervari/productModal/ShowModalProduct";
import MainPage from "./components/comenzi&rezervari/mainPage/MainPage";
import RestaurantPage from "./components/informatii&recenzii/RestaurantPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/*<Router>
        <Link to={"/home"} />
        <Switch>
          <Route exact path={"/home"} component={MainPage} />
        </Switch>
        <ShowModalProduct id={"5eb17a5c6f436666294bc421"} />
        <ShowModalProduct id={"5eb17a5c6f436666294bc420"} />
      </Router>*/}
      <RestaurantPage providerId={"5eb175094afbf654966cb690"} />
    </div>
  );
}

export default App;
