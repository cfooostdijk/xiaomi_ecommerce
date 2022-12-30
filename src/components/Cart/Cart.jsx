import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import styles from './styles/Cart.module.scss';
import Emoji from "../../assets/Emojis/Emoji";
import BackToProducts from "../Buttons/BackToProducts/BackToProducts";
import GoToCheckout from '../Buttons/GoToCheckout/GoToCheckout'

const Cart = () => {
  const { cart, totalPrice, totalProducts, clearCart } = useCartContext();

  if (totalProducts() === 0) {
    return (
      <div className={styles.nocart}>
        <h3>No hay elementos en el carrito <Emoji symbol="🙁" label="sad"/> </h3>
        <BackToProducts />
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <BackToProducts />

			<div> { cart.map(product => <ItemCart key={product.id} product={product} /> )}</div>
			
      <div className={styles.checkout}>
			  <div className={styles.total}></div>
			</div>
				<div className={styles.totalamount}>Total: $ {totalPrice()}</div>
      <GoToCheckout />
      <p className={styles.action} onClick={() => clearCart()} >Remove all items</p>
    </div>
  )
}

export default Cart
