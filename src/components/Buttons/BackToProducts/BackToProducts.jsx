import React from 'react';
import { Link } from 'react-router-dom';
import '../Buttons.css';

const BackToProducts = () => {
	return (
		<div className='btncontainer'>
			<Link to='/catalog'><button className='backtoproducts'>Back To Products</button ></Link>
		</div>
	)
};

export default BackToProducts;
