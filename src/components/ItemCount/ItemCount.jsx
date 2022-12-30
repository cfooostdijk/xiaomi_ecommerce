import { React, useState } from 'react'

import './ItemCount.css';

import AddToCart from '../Buttons/AddToCart/AddToCart';


const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
 
  const increase = () => { setCount(count + 1) };
  const decrease = () => { setCount(count - 1) };

  return (
    <div className='count'>
      <div className='btn__container'>
        <button disabled={count <= 0} className='control__btn' onClick={()=>decrease()}>-</button>
        <input value={count} className='number' readOnly={true} />
        <button disabled={count >= stock} className='control__btn' onClick={()=>increase()}>+</button>
      </div>
      <div>
        <div disabled={stock <= 0 || count <= 0} onClick={() => onAdd(count)} ><AddToCart /></div>
      </div>
    </div>
  );
}

export default ItemCount;
