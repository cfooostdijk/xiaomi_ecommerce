import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from './styles/ItemCart.module.scss';
import Trash from '../../assets/Icons/Trash/Trash'

const ItemCart = ({product}) => {
	const { removeProduct } = useCartContext();
	
	return (
		<>
			<div className={styles.CartItems}>
				<div className={styles.action} onClick={() => removeProduct(product.id)} ><Trash /></div>
				<div className={styles.imagebox}>
					<img src={product.image} alt={product.title} style={{ height:"120px" }} />
				</div>
				<div className={styles.about}>
					<h1 className={styles.title}>{product.title}</h1>
				</div>
				<div className={styles.prices}>
					<div className={styles.items}>Quantity: {product.quantity}</div>
					<div className={styles.amount}>$ {product.price}</div>
					<div className={styles.subtotal}>Sub-Total: ${product.quantity * product.price}</div>
				</div>
			</div>
			<br />
		</>
	)
};

export default ItemCart;
