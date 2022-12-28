import React from 'react';
import {Link} from 'react-router-dom'
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
            <Link to={`/${product.id}`} >
              <button type="button" className="button">Check it out</button>
            </Link>
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
    maxWidth:"300px",
    maxHeight:"400px",
  }
}

export default Item;
