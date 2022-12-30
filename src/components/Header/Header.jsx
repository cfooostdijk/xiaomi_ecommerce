import React from 'react';
import styles from './styles/Header.module.scss';
import Brandbar from '../Brandbar/Brandbar';
import Navbar from '../Navbar/Navbar';

import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo'
import CartWidget from '../CartWidget';


const Header = ({categories}) => {

	return (
		<>
      <Brandbar />
      <div className={styles.header}>
        <div className={styles.headerbrand}>
          <BrandLogo />
        </div>
        <div className={styles.headermenu}>
          <Navbar categories={categories} />
        </div>
        <div className={styles.headericons}>
          <CartWidget />
        </div>
      </div>
		</>
	)
}

export default Header;
