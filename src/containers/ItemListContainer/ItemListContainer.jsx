import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

import ItemList from '../../lists/ItemList';
import Spinner from '../../assets/Spinners/Spinner';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (id) {
      const queryFilter = query(queryCollection, where('category', '==', id))
      getDocs(queryFilter)
      .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  },[id])

  return (
    <> { loading ? <Spinner /> : <ItemList products={products} /> } </>
  );
};
  
export default ItemListContainer;
