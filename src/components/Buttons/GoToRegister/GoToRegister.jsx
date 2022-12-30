import React from 'react';
import { Link } from 'react-router-dom';
import '../Buttons.css';

const GoToRegister = () => {
	return (
		<div className='btncontainer'>
			<Link to='/register'><button className='gotoregister'>Go To Register</button ></Link>
		</div>
	)
};

export default GoToRegister;
