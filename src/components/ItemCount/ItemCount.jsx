import { React, useState } from 'react'
import styles from './styles/ItemCount.module.scss';

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
 
  const increase = () => { setCount(count + 1) };
  const decrease = () => { setCount(count - 1) };

  return (
    <div className={styles.count}>
			<h4>Agregar item</h4>
      <div className={styles.btn__container}>
        <button disabled={count <= 0} className={styles.control__btn} onClick={()=>decrease()}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} className={styles.control__btn} onClick={()=>increase()}>+</button>
        <button disabled={stock <= 0 || count <= 0} onClick={() => onAdd(count)} className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemCount;
