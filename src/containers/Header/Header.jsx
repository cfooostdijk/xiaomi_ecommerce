import React, {useContext} from 'react';
import styles from './styles/Header.module.scss';
import Brandbar from '../../components/Brandbar/Brandbar';
import Navbar from '../../components/Navbar/Navbar';
import CartWidget from '../../containers/CartWidget';
import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo'


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
