import React from 'react';
import {Button ,InputGroup,FormControl,Spinner,Modal} from 'react-bootstrap';
import * as api from '../api';
import style from '../styles/LoginDesktopStyle';
import styleMobile from '../styles/LoginMobileStyle';
import { IoIosMail,IoIosLock,IoIosPerson} from "react-icons/io";
import { useMediaQuery } from 'react-responsive'
import ButtonFacebookLogin from './buttons/ButtonFacebookLogin';
import UserContext from '../../components/UserContext';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 767 })
	return isDesktop ? children : null
  }

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return isMobile ? children : null
}


class Login extends React.Component{
	static contextType = UserContext;
	constructor(){
		super();
		this.state ={
			email:"",
			password:"",
			newAccountEmail:"",
			newAccountPassword:"",
			newAccountConfirmPassword:"",
			username:"",
			infoTextRegister:"",
			alert:"",
			success:"",
			userData:{},
			loading:false,
			error:"",
			option:1,
			accountType:"",
			alertVisible:true,
			alertEmail:'#DCDCDC',
			alertPassword:'#DCDCDC',
			alertNewPassword:'#DCDCDC',
			alertUsername:'#DCDCDC',
			alertRoleType:'#DCDCDC',
			modalVisible: false,
			emailLostPassword:"",
			alertLostPassword:false,
		}
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleRegisterClick = this.handleRegisterClick.bind(this);
		this.handleChangeNewEmail = this.handleChangeNewEmail.bind(this);
		this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
		this.handleChangeNewPasswordConfirm = this.handleChangeNewPasswordConfirm.bind(this);
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleEmailLostPassword = this.handleEmailLostPassword.bind(this);
		this.handleLostPasswordClick = this.handleLostPasswordClick.bind(this);

	}

	 responseFacebook = (response) => {
		console.log(response);
	 }

	async handleLoginClick(){
		console.log(JSON.stringify(this.state,null,'...'))
		this.setState({success:""})
		if(this.state.email === ""){
			this.setState({alertEmail:'red'})
		} else if(this.state.password === ""){
			this.setState({alertPassword:'red'})
		} else {

			try{
				this.setState({loading:true})
				let answer = await api.login(this.state.email,this.state.password);
				if(answer.success === true){
					this.setState({loading:false,userData:answer.user,success:true})
					console.log(answer.user);
					window.location.href = "http://localhost:3000/";
					alert("Te-ai logat cu succes!");
				} else {
					this.setState({loading:false,success:false,error:answer.errorMessage})
					alert("Error " + answer.errorMessage);
				}
				
			} catch(err){
				console.log(err);
				this.setState({error:err,loading:false,success:false})
				alert("error " + err);
			}
		}
	}

	async handleRegisterClick(){
		console.log(JSON.stringify(this.state,null,'...'))

		this.setState({success:""})
		if(this.state.username === ""){
			this.setState({alertUsername:'red'})
		} else if(this.state.newAccountEmail === "" ){
			this.setState({alertEmail:'red'})
		} else if(this.state.newAccountPassword === ""){
			this.setState({alertPassword:'red'})
		} else if(this.state.newAccountConfirmPassword === ""){
			this.setState({alertNewPassword:"red"});
		} else if(this.state.newAccountConfirmPassword !== this.state.newAccountPassword){
			this.setState({fieldsError:"Parolele trebuie sa coincida!"})
			alert("Parolele nu coincid!")
		} else if(this.state.accountType === ""){
			this.setState({fieldsError:"Selecteaza tipul de cont!"})
			alert("Selecteaza tipul de cont!")
		} else if(this.state.newAccountPassword.length < 5){
			alert("Parola trebuie sa contina minim 5 caractere!")
		} else{

			try{
				this.setState({loading:true})
				let answer = await api.register(this.state.username,this.state.accountType,this.state.email,this.state.newAccountPassword);
				if(answer.success === true){
					this.setState({loading:false,userData:answer.user,success:true})
					alert("Te-ai inregistrat cu succes!")
				} else {
					this.setState({loading:false,success:false,error:answer.errorMessage})
					alert("error " + answer.errorMessage)
				}
				console.log(answer)
			} catch(err){
				console.log(err);
				alert("eroare ! " + err);
				this.setState({error:err,loading:false,success:false})
			}
		}
	}

	async handleLostPasswordClick(){
		if(this.state.emailLostPassword === ""){
			this.setState({alertLostPassword:'red'})
 		} else{
			this.setState({modalVisible:false})
			try{
				let answer = await api.lostPassword(this.state.emailLostPassword);
				console.log(JSON.stringify(answer,null,'...'))
			} catch(err){
				console.log(err);
			}
		 }
	}

	handleEmailLostPassword(event){
		this.setState({emailLostPassword: event.target.value,alertLostPassword:'#DCDCDC'});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value,alertEmail:'#DCDCDC'});
	}

	handleChangePassword(event){
		this.setState({password: event.target.value,alertPassword:'#DCDCDC'});
	}

	handleChangeNewEmail(event){
		this.setState({newAccountEmail: event.target.value,alertEmail:'#DCDCDC'});
	}

	handleChangeNewPassword(event){
		this.setState({newAccountPassword: event.target.value,alertPassword:'#DCDCDC'});
	}

	handleChangeNewPasswordConfirm(event){
		this.setState({newAccountConfirmPassword: event.target.value,alertNewPassword:'#DCDCDC'});
	}

	handleChangeUsername(event){
		this.setState({username: event.target.value,alertUsername:'#DCDCDC'});
	}

	infoText = (success) =>{
		if(success === ""){
			return <p></p>
		}
		if(success === false){
			return <p style={{color:'#F80505'}}>Ops ! Error: {this.state.error} </p>
		}
		if(success === true){
			return <p style={{color:'#1FF01B'}}>Te-ai logat cu succes !</p>
		}
	}
	

	renderInputfield = (topText,placeHolder,inputFunction,type,alert,value) => {
		return(
			<div style={style.inputContainer}>
			<p style={style.inputText}>{topText}</p>
			<InputGroup className="mb-3" style={style.inputGroup}>
				<FormControl
					placeholder={placeHolder}
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={inputFunction}
					type={type}
					value={value}
					style={{borderColor:alert}}
				/>
				<InputGroup.Prepend>
					<InputGroup.Text style={{...styleMobile.inputGroupText,borderColor:alert}} id="basic-addon1">
						{topText === "Password" || topText === "Confirm password" ?<IoIosLock size={22} style={styleMobile.iconStyle}/> : <div></div>}
						{topText === "Email address" || topText === "" ? <IoIosMail size={22} style={styleMobile.iconStyle}/> : <div></div>}
						{topText === "Username" ? <IoIosPerson size={22} style={styleMobile.iconStyle}/> : <div></div>}
					</InputGroup.Text>
				</InputGroup.Prepend>
			</InputGroup>
		</div>
		);
	}

	renderInputFieldPhone = (topText,placeHolder,inputFunction,type,alert,value) =>{
		return(
				<InputGroup className="mb-3" style={styleMobile.fieldButton}>
					<FormControl
						placeholder={placeHolder}
						aria-label="Username"
						aria-describedby="basic-addon1"
						onChange={inputFunction}
						type={type}
						style={{borderColor:alert}}
						value={value}
					/>
					<InputGroup.Prepend>
						<InputGroup.Text style={{...styleMobile.inputGroupText,borderColor:alert}} id="basic-addon1">
							{topText === "Password" || topText === "Confirm password" ?<IoIosLock size={22} style={styleMobile.iconStyle}/> : <div></div>}
							{topText === "Email address" || topText === "" ? <IoIosMail size={22} style={styleMobile.iconStyle}/> : <div></div>}
							{topText === "Username" ? <IoIosPerson size={22} style={styleMobile.iconStyle}/> : <div></div>}					
						</InputGroup.Text>
					</InputGroup.Prepend>
				</InputGroup>
		);
	}

	modalLostPassword = () => {
		return (
		<Modal show={this.state.modalVisible} onHide={()=>{this.setState({modalVisible:false})}}>
			<Modal.Header closeButton>
				<Modal.Title>Lost password</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Type here your email address and we will sent you a new one</p>
				{this.renderInputfield("","YourEmail@mail.com",this.handleEmailLostPassword,"email",this.state.alertLostPassword,this.state.emailLostPassword)}
			</Modal.Body>
			<Modal.Footer>
				<Button style={styleMobile.closeButtonLostPassword} variant="secondary" onClick={()=>{this.setState({modalVisible:false})}}>
					Close
				</Button>
				<Button style={styleMobile.sendButtonLostPassword} variant="primary" onClick={this.handleLostPasswordClick}>
					Send
				</Button>
			</Modal.Footer>
		</Modal>
		);
	}


	renderRoleButton = (text,role) => {
		return(
			<Button variant="outline-danger" onClick={()=>{this.setState({accountType:role})}}
				style={{backgroundColor:this.state.accountType === role ? "red" : "white",color:this.state.accountType === role ? "white" : "red"}}>
				{text}
			</Button>
		);
	}

	render(){
		return (
			<div>
				<Desktop>
					<div style={style.container}>
					<div style={style.leftContainer}>
						{
							this.state.option === 1 ? 
							<div className="shadow p-3 mb-5 bg-white rounded" style={style.loginContainer}>

								<p style={style.loginText}>Log in to your account</p>

								{this.modalLostPassword()}

								{this.renderInputfield("Email address","YourEmail@mail.com",this.handleChangeEmail,"email",this.state.alertEmail,this.state.email)}
								{this.renderInputfield("Password","Password",this.handleChangePassword,"password",this.state.alertPassword,this.state.password)}

								<Button variant="danger" style={style.logInButton} onClick={this.handleLoginClick}>
									Log in
								</Button>

								<ButtonFacebookLogin/>

								<button style={style.dontHaveAccount} onClick={()=>{this.setState({option:2,success:""})}}>
									Don't have an account? Create one
								</button>
								
								<button style={style.dontHaveAccount} onClick={()=>{this.setState({modalVisible:true})}}>
									I forggot my password
								</button>

								{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={styleMobile.spinnerStyle} /> : <p></p>}

							</div> 

							: <div className="shadow p-3 mb-5 bg-white rounded" style={style.loginContainer}>
								<p style={style.createAccountText}>Create account</p>

								<div style={style.roleContainer}>
									{this.renderRoleButton("Client","client")}
									{this.renderRoleButton("Provider","provider")}
								</div>

								{this.renderInputfield("Username","username",this.handleChangeUsername,"text",this.state.alertUsername,this.state.username)}
								{this.renderInputfield("Email address","example@mail.com",this.handleChangeNewEmail,"text",this.state.alertEmail,this.state.newAccountEmail)}
								{this.renderInputfield("Password","●●●●●●●●●",this.handleChangeNewPassword,"password",this.state.alertPassword,this.state.newAccountPassword)}
								{this.renderInputfield("Confirm password","●●●●●●●●●",this.handleChangeNewPasswordConfirm,"password",this.state.alertNewPassword,this.state.newAccountConfirmPassword)}

								<Button variant="danger" style={style.logInButton} onClick={this.handleRegisterClick} >
									Register
								</Button>
								
								<button style={style.alreadyHaveAccount} onClick={()=>{this.setState({option:1,success:""})}}>
									Already have an account? Log in 
								</button>

								{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={styleMobile.spinnerStyle} /> : <p></p>}

							</div>
						}
					</div>
					<div style={style.rightContainer}>
					<img src="https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg" alt="Logo" style={style.chefImg} />;
					</div>
		
				</div>
			</Desktop>
				<Mobile>
					<div style={{flexDirection:'column',width:this.props.width,height:this.props.height}}>
						<div style={styleMobile.chefContainer}>
							<img src="https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg" alt="Logo" style={{width:300,height:'100%',resizeMode: 'contain'}} />;
						</div>
						<div style={styleMobile.containerStyle}>
							{
								this.state.option === 1 ? 
								<div className="shadow p-3 mb-5 bg-white rounded"  style={styleMobile.whiteContainer}>
									<p style={styleMobile.loginText}>Log in to your account</p>
									{this.renderInputFieldPhone("Email address","YourEmail@mail.com",this.handleChangeEmail,"email",this.state.alertEmail,this.state.email)}
									{this.renderInputFieldPhone("Password","Password",this.handleChangePassword,"password",this.state.alertPassword,this.state.password)}

									{this.modalLostPassword()}

									<Button variant="danger" style={styleMobile.loginButton} onClick={this.handleLoginClick}>
										Log in
									</Button>

									<ButtonFacebookLogin/>

									<button style={styleMobile.dontHaveAccount} onClick={()=>{this.setState({option:2,success:"",alertEmail:'#DCDCDC',alertPassword:'#DCDCDC',email:"",password:""})}}>
										Don't have an account? Create one
									</button>

									<button style={style.dontHaveAccount} onClick={()=>{this.setState({modalVisible:true})}}>
										I forggot my password
									</button>

									{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={styleMobile.spinnerStyle} /> : <p></p>}
								</div>
								:
								<div className="shadow p-3 mb-5 bg-white rounded"  style={styleMobile.whiteContainer}>
									<div style={styleMobile.buttonsRoleContainer}>
										{this.renderRoleButton("Client","client")}
										<p style={styleMobile.createAccountText}>Create account</p>
										{this.renderRoleButton("Provider","provider")}
									</div>

									{this.renderInputFieldPhone("Username","username",this.handleChangeUsername,"text",this.state.alertUsername,this.state.username)}
									{this.renderInputFieldPhone("Email address","example@mail.com",this.handleChangeNewEmail,"text",this.state.alertEmail,this.state.newAccountEmail)}
									{this.renderInputFieldPhone("Password","●●●●●●●●●",this.handleChangeNewPassword,"password",this.state.alertPassword,this.state.newAccountPassword)}
									{this.renderInputFieldPhone("Confirm password","●●●●●●●●●",this.handleChangeNewPasswordConfirm,"password",this.state.alertNewPassword,this.state.newAccountConfirmPassword)}

									<Button variant="danger" style={styleMobile.registerButton} onClick={this.handleRegisterClick}>
										Register
									</Button>

									<button style={style.alreadyHaveAccount} onClick={()=>{this.setState({option:1,success:"",alertEmail:'#DCDCDC',alertPassword:'#DCDCDC',email:"",password:""})}}>
										Already have an account? Log in 
									</button>

									{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={styleMobile.spinnerStyle} /> : <p></p>}

								</div>
							}
						</div>
					</div>
				</Mobile>
			</div>
		);
	}
}

export default Login;

