import React from 'react';

import { useCartContext } from '../../context/CartContext';

import CartLogo from '../../assets/Icons/CartLogo/CartLogo';

const CartWidget = () => {
	const {totalProducts} = useCartContext();

	return (
		<div>
			<CartLogo />
			<span>{totalProducts() || ''}</span>
		</div>
	)
}

export default CartWidget;
