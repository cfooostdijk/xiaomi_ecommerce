import React from 'react';
import '../Initial/Initial.css';

import BackToProducts from '../../components/Buttons/BackToProducts/BackToProducts';

const NotFound =() =>{
  return (
		<div className='page'>
			<div><h1>Nothing over here</h1></div>
			<BackToProducts />
		</div>
  )
}

export default NotFound;
