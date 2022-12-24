import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

const Item = ({ product }) => {
  return (
    <div class="card-container">
      <div class="card-wrapper">
        <div lass="card-top">
          <div class="image">
            <img src={product.image} alt={product.title} style={styles.img} />
          </div>
        </div>
        <div class="card-bottom">
          <div class="top-text">{product.title}</div>
          <div class="bottom-text"> $ {product.price}</div>
          <div>
            <Link to={`/${product.id}`} >
              <button type="button" class="button">Check it out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  img: {
    width: "300px",
    height: "400px"
  }
}

export default Item;
