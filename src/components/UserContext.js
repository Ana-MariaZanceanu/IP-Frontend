import React from 'react';

const defaultValue = {
	user: {},
	setUser: () => {},
};

const UserContext = React.createContext(defaultValue);

export default UserContext;
