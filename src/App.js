import React, { useState } from 'react';
import './App.css';
import './Animation.css';
import ShowModalProduct from './components/comenzi&rezervari/productModal/ShowModalProduct';
import MainPage from './components/comenzi&rezervari/mainPage/MainPage';
import RestaurantPage from './components/informatii&recenzii/RestaurantPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import UserContext from './components/UserContext';
import history from './history';
const Child = ({ match }) => (
	<div>
		<h3>ID: {match.params.id}</h3>
	</div>
);

const initialUser = {};

function App() {
	const [user, setUser] = useState({ _id: 'dsafads' });

	return (
		<div>
			<UserContext.Provider value={{ user, setUser }}>
				<Router history={history}>
					<Link to={'/home'} />
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
							path="/restaurant/:id"
							component={(routerProps) => (
								<RestaurantPage
									providerId={
										routerProps.match.params.id
									}
								/>
							)}
						/>
					</Switch>
					{/* <ShowModalProduct id={"5eb17a5c6f436666294bc421"} />
        <ShowModalProduct id={"5eb17a5c6f436666294bc420"} /> */}
				</Router>
				{/*<RestaurantPage providerId={"5eb175094afbf654966cb690"} />*/}
			</UserContext.Provider>
		</div>
	);
}

export default App;
