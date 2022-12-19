import React from 'react';
import styles from './styles/Item.module.scss';
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.features}>
        <ul>
          <li>$ {product.price}</li>
        </ul>
      </div>
      <div>
        <Link to={`/${product.id}`} >
          <button type="button" className={styles.btn}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
