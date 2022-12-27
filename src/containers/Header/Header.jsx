import React, {useContext} from 'react';
import styles from './styles/Header.module.scss';
import Brandbar from '../../components/Brandbar/Brandbar';
import Navbar from '../../components/Navbar/Navbar';
import Brandlogo from '../../assets/Icons/Brandlogo';
import CartWidget from '../../containers/CartWidget';
import { ThemeContext } from '../../context/ThemeContext';
import SwitchButton from '../../components/Lightswitch/Lightswitch';

const Header = ({categories}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

	return (
		<div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
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
        <SwitchButton />
      </div>
		</div>
	)
}

export default Header;
