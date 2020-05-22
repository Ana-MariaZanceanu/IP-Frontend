import React, { useState ,useEffect} from 'react';
import './App.css';
import './Animation.css';
import * as api from './accounts/api/index';

import UserContext from './components/UserContext';
import Navigation from './accounts/components/navigation/Navigation';

const initialUser = {};

async function checkIfItIsLogged(){
	const value = localStorage.getItem('userToken');
	if(value === null){
		return false;
	} else {
		const answer = await api.getUser();
		return answer.user;
	}
}

function App() {
	const [user, setUser] = useState({});
	const [isLogged,setIsLogged] = useState(false);
	const [loaded,setLoaded] = useState(false);

	console.log("USER",user);
	useEffect(async () => {
		const answer = await checkIfItIsLogged();
		if(answer === false){
			setIsLogged(false);
			setLoaded(true);
		} else {
			setUser(answer);
			setIsLogged(true);
			setLoaded(true);
		}
	}, [])

	if(loaded === true){
		return (
			<div>
			{/* <button onClick={()=>{checkIfItIsLogged()}}>
	
			</button> */}
				<UserContext.Provider value={{ user, setUser }}>
					<Navigation logged={isLogged} />
				</UserContext.Provider>
			</div>
		);
	} else return(<div></div>);
}

export default App;
