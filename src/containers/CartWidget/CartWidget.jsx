import React from 'react';
import styles from './styles/CartWidget.module.scss';
import CartLogo from '../../assets/Icons/CartLogo/CartLogo';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {
	const {totalProducts} = useCartContext();

	return (
		<div className= {styles.cartwidget}>
			<CartLogo />
			<span className= {styles.badge}>{totalProducts() || ''}</span>
		</div>
	)
}

export default CartWidget;
