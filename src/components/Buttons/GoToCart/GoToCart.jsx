import React from 'react';
import '../Buttons.css';
import {Link} from 'react-router-dom'

const GoToCart = () => {
	return (
		<div className='btncontainer'>
			<Link to='/cart'><button className='gotocart'>Go To Cart</button ></Link>
		</div>
	)
};

export default GoToCart;