import React, { Component } from 'react';
import CarouselComp from './CarouselComp';
import NavBarComp from './NavBarComp';
import ChooseUsComp from './ChooseUsComp';
import OurSpecials from './OurSpecials';
import RecomandationComp from './RecomandationComp';
import FooterComp from './FooterComp';
import './style.css';
import UserContext from '../../UserContext';

export class MainPage extends Component {
	static contextType = UserContext;

	render() {

		return (
			<>
				<CarouselComp />
				<ChooseUsComp />
				<OurSpecials />
				<RecomandationComp />
				<FooterComp />
			</>
		);
	}
}

export default MainPage;
