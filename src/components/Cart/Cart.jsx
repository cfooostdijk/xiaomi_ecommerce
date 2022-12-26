import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import styles from './styles/Cart.module.scss';

const Cart = () => {
  const { cart, totalPrice, totalProducts } = useCartContext();
console.log(totalProducts)
  if (totalProducts() === 0) {
    return (
      <div className={styles.nocart}>
        <h3>No hay elementos en el carrito <br></br><br></br>
          =(</h3>
        <Link to="/"> <button className={styles.btn}>Back to products</button></Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Shopping Cart</h3>
      </div>

			<div> { cart.map(product => <ItemCart key={product.id} product={product} /> )}</div>
			
      <div className={styles.checkout}>
			  <div className={styles.total}></div>
				<div className={styles.totalamount}>Total: $ {totalPrice()}</div>
			</div>
			<button className={styles.button}>Checkout</button>
    </div>
  )
}

export default Cart