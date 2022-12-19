import styles from './styles/Header.module.scss';
import React from 'react';
import Navbar from '../../components/NavBar';
import Brandlogo from '../../assets/Icons/Brandlogo';
import CartWidget from '../CartWidget';

const Header = ({categories}) => {
	return (
		<>
      <div className={styles.header}>
        <div className={styles.headerbrand}>
          <Brandlogo />
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
