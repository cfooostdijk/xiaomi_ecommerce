import React from 'react';
import BrandSlide from '../../components/BrandSlide/BrandSlide';
import NavBar from '../../components/Navbar/Navbar';

const Header = ({categories}) => {
	return (
		<>
			{/* <BrandSlide /> */}
			<NavBar categories={categories} />
		</>
	)
}

export default Header;
