import React from 'react';
import styles from './styles/Header.module.scss';
import Brandbar from '../../components/Brandbar/Brandbar';
import Navbar from '../../components/Navbar/Navbar';
import Brandlogo from '../../assets/Icons/Brandlogo';
import CartWidget from '../../containers/CartWidget';

const Header = ({categories}) => {
	return (
		<>
      <Brandbar />
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
