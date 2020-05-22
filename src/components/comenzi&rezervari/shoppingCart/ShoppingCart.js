import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './ShoppingCart.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import Order from '../orderCheckout/Order';
import { FaTimes } from 'react-icons/fa';

const TAX_RATE = 0.06;
const TAX_TEXT = '6% sales tax';

const urlCart = 'https://orderip.herokuapp.com/api/v1/cart';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.message = '';
		this.emptyCart = this.emptyCart.bind(this);
		this.userToken = "";
	}

	// postSession = async () => {
	// 	await axios({
	// 		method: 'post',
	// 		url: urlCart,
	// 		withCredentials: true,
	// 		data: {
	// 			token : this.userToken
	// 		}
	// 	}).then((response) => {
	// 		console.log(response.data.success);
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});
	// }

	patchSession = async () => {
		await axios({
			method: 'patch',
			url: urlCart + "/user?token=" + this.userToken,
			withCredentials: true,
		}).then((response) => {
			console.log(response.data.success);
		}).catch((error) => {
			console.log(error);
		});
	}

	zeroProduct = async (product,e) => {
		await axios({
			method: 'get',
			url: urlCart + '/delete-product/' + product.id,
			withCredentials: true,
		}).then((result) => {
			console.log(result);
			product.item.price = 0;
			product.item.quantity = 0;
		}).catch((error) => {
			console.log(error);
		});
		this.forceUpdate();
	}
	emptyCart = async (products) => {
		await axios({
			method: 'get',
			url: urlCart + '/clear',
			withCredentials: true,
		})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
		products.map((p, i) => {
			p.item.quantity = 0;
		});
		this.forceUpdate();
	};
	emptyCartForUser = async (products) => {
		await axios({
			method: 'delete',
			url: urlCart + '/user?token=' + this.userToken,
			withCredentials: true,
		})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
		products.map((p, i) => {
			p.item.quantity = 0;
		});
		this.forceUpdate();
	};
	cartChange = async (product,e) => {
		console.log("product");console.log(product)
		console.log("e " + e)
		console.log(window.location.href)
		if (product.item.quantity < e) {
			await axios({
				method: 'get',
				url: urlCart + '/add-quantity/' + product.id,
				withCredentials: true,
			}).then((result) => {
				console.log(result);
				product.item.quantity += 1;
			}).catch((error) => {
				console.log(error);
			});
		} else {
			await axios({
				method: 'get',
				url: urlCart + '/substract-quantity/' + product.id,
				withCredentials: true,
			}).then((result) => {
				product.item.quantity -= 1;
			}).catch((error) => {
				console.log(error);
			});
		}
		this.forceUpdate();
	};

	render() {
		let total = 0;
		let { products } = this.props;

		if (
			products === null ||
			products === undefined ||
			products.length === 0
		) {
			return <div className="emptyCart">Empty cart!</div>;
		} else {
			let tax = 0;
			console.log(products);
			let cartProductRows = products.map((p, i) => {
				let quantity = p.item.quantity;
				if (!quantity) {
					return null;
				}
				let name = p.item.product;
				let price = p.item.price * p.item.quantity;
				total += price;
				tax = Math.ceil(total * TAX_RATE);
				return (
					<tr key={i}>
						<td>
							<Button
								onClick={async (e) => {
									await this.zeroProduct(p,e);
									if(localStorage.getItem("userToken")){
										this.userToken = localStorage.getItem("userToken");
										await this.patchSession();
									}
								}}
								className="deleteProduct"
							>
								<FaTimes />
							</Button>
						</td>
						<td> {name} </td>
						<td>
							<NumericInput
								min={0}
								value={quantity}
								onChange={async (e) => {
									await this.cartChange(p,e);
									if(localStorage.getItem("userToken")){
										this.userToken = localStorage.getItem("userToken");
										await this.patchSession();
									}
								}}
								className="numericInput"
							/>
						</td>
						<td className="currency">{price}$</td>
					</tr>
				);
			});
			let ok = 0;
			for (let i = 0; i < cartProductRows.length; i++) {
				if (cartProductRows[i]) {
					ok = 1;
					break;
				}
			}
			if (ok === 0) {
				return <div className="emptyCart">Empty cart!</div>;
			}
			return (
				<Router>
					<div className={'cartClasses'}>
						<table className="tableClass">
							<thead>
								<tr>
									<th></th>
									<th>Product</th>
									<th>Quantity</th>
									<th>Subtotal</th>
								</tr>
							</thead>
							<tbody className="bodyTable">
								{cartProductRows}
							</tbody>
							<br />
							<tfoot className="footerTable">
								<tr key="subtotal">
									<td colSpan="2"></td>
									<td>
										<strong>Subtotal</strong>
									</td>
									<td className="currency">
										{total}$
									</td>
								</tr>
								<tr key="tax">
									<td colSpan="2"></td>
									<td>
										<strong>{TAX_TEXT}</strong>
									</td>
									<td className="currency">
										{tax}$
									</td>
								</tr>
								<tr key="total">
									<td colSpan="2"></td>
									<td>
										<strong>Total</strong>
									</td>
									<td className="currency">
										{total + tax}$
									</td>
								</tr>
								<br />
								<tr
									className="cart-actions"
									key="cart-actions"
								>
									<td colSpan="2"></td>
									<td>
										<Button
											className="cart-empty"
											onClick={async () => {
												if(localStorage.getItem("userToken")){
													this.userToken = localStorage.getItem("userToken");
													await this.emptyCartForUser(products);
												}else{
													await this.emptyCart(products);
												}
											}}
										>
											clear cart
										</Button>
									</td>
									<td>
										<Button className="cart-pay">
											<Link
												to="/checkout"
												className="payButton"
											>
												checkout
											</Link>
										</Button>
									</td>
								</tr>
								<br />
							</tfoot>
						</table>

						<Switch>
							<Route path="/checkout">
								<Order
									func={() => {
										setTimeout(() => {
											this.emptyCart(products);
										}, 5000);
									}}
								/>
							</Route>
						</Switch>
					</div>
				</Router>
			);
		}
	}
}

export default ShoppingCart;
