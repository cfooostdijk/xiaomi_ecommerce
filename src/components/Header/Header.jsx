import React from 'react';

import './Header.css';

import Brandbar from '../Brandbar/Brandbar';
import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo'
import CartWidget from '../../containers/CartWidget';
import NavBar from '../NavBar/NavBar';


const Header = ({categories}) => {

	return (
		<>
      <Brandbar />
      <div className='header'>
        <div className='headerbrand'>
          <BrandLogo />
        </div>
        <div className='headermenu'>
          <NavBar categories={categories} />
        </div>
        <div className='headericons'>
          <CartWidget />
        </div>
      </div>
		</>
	)
}

export default Header;
