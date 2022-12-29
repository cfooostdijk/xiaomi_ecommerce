import React from 'react';
import { Link } from "react-router-dom";
import './ErrorPage.css';

const NotFound =() =>{

  return (
		<>
			<div className="hit-the-floor">404</div>
    	<div className='page'>
				<Link className="link" to="/catalog"> <button className="btn">Back to products</button></Link>
    	</div>
		</>
  )
}

export default NotFound;
