import React from 'react';
import { Link } from 'react-router-dom';
import '../Icons.css'

const Cart = () => {
  return (
    <Link to='/'>
      <img className='brandlogo' src={require('../../Images/Xiaomi_logo.png')} alt="brandlogo" />
    </Link>
  )
}

export default Cart;
