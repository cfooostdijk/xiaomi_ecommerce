import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from './styles/ItemCart.module.scss';

const ItemCart = ({product}) => {
	const { removeProduct } = useCartContext();

	return (
	  <div className={styles.itemcart}>
			<img src={product.image} alt={product.title}/>
			<div>
        <h2>{product.title}</h2>
        <h1>$ {product.price}</h1>
				<h2>Subtotal: ${product.quantity * product.price}</h2>
				<button onClick={() => removeProduct(product.id)}>Eliminar</button>
			</div>
		</div >
	)
};

export default ItemCart;
