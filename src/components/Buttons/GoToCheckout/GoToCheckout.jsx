import React from 'react';
import { Link } from 'react-router-dom';
import '../Buttons.css';

const GoToCheckout = () => {
	return (
		<div className='btncontainer'>
			<Link to='/checkout'><button className='gotocheckout'>Go To Checkout</button ></Link>
		</div>
	)
};

export default GoToCheckout;