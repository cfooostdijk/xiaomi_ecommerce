import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";


import CartList from "../../lists/CartList";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Spinner from '../../assets/Spinners/Spinner';

const CartContainer = () => {
  const { totalProducts } = useCartContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (totalProducts() === 0) {
    return (
      <> { loading ? <Spinner /> : <ErrorPage /> } </>
    )
  } else {
    return (
      <> { loading ? <Spinner /> : <CartList /> } </>
    )
  }
}

export default CartContainer;
