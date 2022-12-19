import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from "react-router-dom";

import styles from './styles/NavBar.module.scss';

const NavBar = ({categories}) => {
	return (
		<>
			<nav className= {styles.navbar}>{ 
				categories.map((category) => { 
					return ( <NavLink key={category.id}  to={category.route} > {category.name} </NavLink> );
				})}
			</nav>	
		</>
	)
}

NavBar.proptype = {
	menus: Proptypes.array.isRequired,
}

export default NavBar;
