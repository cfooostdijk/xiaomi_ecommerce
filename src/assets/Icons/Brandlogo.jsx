import React from 'react';
import styles from './styles/Icons.module.scss';

const Cart = () => {
  return (
    <a href="/">
      <img className={styles.brandlogo} src={require("../Images/Xiaomi_logo.png")} alt="brandlogo" />
    </a>
  )
}

export default Cart;
