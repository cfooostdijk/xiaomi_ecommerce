import React, {useState} from 'react';
import styles from './styles/ItemDetail.module.scss';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity);
  }

  return (
    <div className={styles.card}>
      <Link to="/"> <button className={styles.btn}>Back to products</button> </Link>
      <div className={styles.photo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.description}>
        <h2>{product.title}</h2>
        <h1>$ {product.price}</h1>
        <p>{product.description}</p>
      </div>
      {
        goToCart ? <Link to='/cart'>Terminar compra</Link>
        : <ItemCount initial={3} stock={5} onAdd={onAdd} />
      }
    </div>
  );
};

export default ItemDetail;

