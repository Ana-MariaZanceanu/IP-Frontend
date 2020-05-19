import React from 'react';

const defaultValue = {
	user: {},
	host: "http://localhost:3000/",
	setUser: () => {},
};

const UserContext = React.createContext(defaultValue);

export default UserContext;
