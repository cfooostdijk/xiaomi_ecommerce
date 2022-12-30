import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";

import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../assets/Spinners/Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [prodValid, setProdValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', id);
    setLoading(false)
    getDoc(queryDoc)
      .then(product => !product.exists() ? setProdValid(false) : setProduct({ id: product.id, ...product.data() })
    )},
  [id])

  if (prodValid === false) {
    return (
      <> { loading ? <Spinner /> : <ErrorPage /> } </>
    )
  } else {
    return (
      <> { loading ? <Spinner /> : <ItemDetail product={product} /> } </>
    )
  }
};

export default ItemDetailContainer;
