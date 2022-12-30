import { React, useState } from 'react'
import AddToCart from '../Buttons/AddToCart/AddToCart';
import styles from './styles/ItemCount.module.scss';


const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
 
  const increase = () => { setCount(count + 1) };
  const decrease = () => { setCount(count - 1) };

  return (
    <div className={styles.count}>
      <div className={styles.btn__container}>
        <button disabled={count <= 0} className={styles.control__btn} onClick={()=>decrease()}>-</button>
        <input value={count} className={styles.number} />
        <button disabled={count >= stock} className={styles.control__btn} onClick={()=>increase()}>+</button>
      </div>
      <div>
        <div disabled={stock <= 0 || count <= 0} onClick={() => onAdd(count)} ><AddToCart /></div>
      </div>
    </div>
  );
}

export default ItemCount;
