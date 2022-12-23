import React from 'react';
import Brandbar from '../../components/Brandbar/Brandbar';
import NavBar from '../../components/Navbar/Navbar';

const Header = ({categories}) => {
	return (
		<>
			<div>
				<Brandbar />
			</div>
				
				<NavBar categories={categories} />
		</>
	)
}

export default Header;
