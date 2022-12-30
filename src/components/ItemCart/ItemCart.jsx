import React from 'react';

import { useCartContext } from '../../context/CartContext';

import './ItemCart.css';

import Trash from '../../assets/Icons/Trash/Trash'

const ItemCart = ({product}) => {
	const { removeProduct } = useCartContext();
	
	return (
		<>
			<div className='CartItems'>
				<div onClick={() => removeProduct(product.id)} ><Trash /></div>
				<div className='imagebox'>
					<img src={product.image} alt={product.title} style={{ height:"120px" }} />
				</div>
				<div className='about'>
					<h1 className='title'>{product.title}</h1>
				</div>
				<div className='prices'>
					<div className='items'>Quantity: {product.quantity}</div>
					<div className='amount'>$ {product.price}</div>
					<div className='subtotal'>Sub-Total: ${product.quantity * product.price}</div>
				</div>
			</div>
			<br />
		</>
	)
};

export default ItemCart;
