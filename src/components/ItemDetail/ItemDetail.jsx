import React, {useState} from 'react';
import styles from './styles/ItemDetail.module.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import BackToProducts from '../Buttons/BackToProducts/BackToProducts';
import GoToCart from '../Buttons/GoToCart/GoToCart';

const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity);
  }

  return (
    <div className={styles.king}>
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.description}>
        <BackToProducts />
        <h1>{product.title}</h1>
        <h2>$ {product.price}</h2>
        <h5>{product.description}</h5>
        <h5>Cantidad disponible: {product.stock} </h5>
        {
          goToCart ? <GoToCart />
          : <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        }
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
