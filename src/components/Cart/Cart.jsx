import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import styles from './styles/Cart.module.scss';
import Emoji from "../../assets/Emojis/Emoji";

const Cart = () => {
  const { cart, totalPrice, totalProducts, clearCart } = useCartContext();

  if (totalProducts() === 0) {
    return (
      <div className={styles.nocart}>
        <h3>No hay elementos en el carrito <Emoji symbol="🙁" label="sad"/> </h3>
        <Link className={styles.link} to="/catalog"> <button className={styles.btn}>Back to products</button></Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.headbtn}>
        <Link to='/catalog'><button className={styles.btn}>Back to products</button></Link>
      </div>

			<div> { cart.map(product => <ItemCart key={product.id} product={product} /> )}</div>
			
      <div className={styles.checkout}>
			  <div className={styles.total}></div>
			</div>
				<div className={styles.totalamount}>Total: $ {totalPrice()}</div>
      <div></div>
      <div className={styles.headbtn}>
			  <Link to='/checkout'><button className={styles.btn}>Go to Checkout</button></Link>
      </div>
      <p className={styles.action} onClick={() => clearCart()} >Remove all items</p>
    </div>
  )
}

export default Cart
