import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(cart.map(product => {
        return product.id === product.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCart([ ...cart, { ...product, quantity }]);
    }
  }

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  const totalPrice = () => { 
    return cart.reduce((prev, sum) => prev + sum.quantity * sum.price, 0);
  }

  const totalProducts = () => cart.reduce((totalcount, actProd) => totalcount + actProd.quantity, 0);

  return (
    <CartContext.Provider 
    value = {{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
