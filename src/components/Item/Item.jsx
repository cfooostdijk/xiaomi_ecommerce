import React from 'react';
import CheckItOut from '../Buttons/CheckItOut/CheckItOut';
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div lass="card-top">
          <div className="image">
            <img src={product.image} alt={product.title} style={styles.img} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="top-text">{product.title}</div>
          <div className="bottom-text"> $ {product.price}</div>
          <div>
            <CheckItOut product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  img: {
    width:"auto",
    height:"auto",
    maxWidth:"200px",
    maxHeight:"300px",
  }
}

export default Item;
