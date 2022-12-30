import React from 'react';
import { Link } from "react-router-dom";
import BackToProducts from '../../components/Buttons/BackToProducts/BackToProducts';
import './ErrorPage.css';

const NotFound =() =>{

  return (
		<>
			<div className="hit-the-floor">404</div>
    	<div className='page'>
				<Link to='/catalog'><BackToProducts /></Link>
    	</div>
		</>
  )
}

export default NotFound;
