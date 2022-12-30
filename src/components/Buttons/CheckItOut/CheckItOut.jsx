import React from 'react';
import {Link} from 'react-router-dom'
import '../Buttons.css';

const CheckItOut = ({ product }) => {
	return (
		<div className='btncontainer'>
			<Link to={`/${product.id}`}><button className='checkitout'>Check It Out</button ></Link>
		</div>
	)
};

export default CheckItOut;
