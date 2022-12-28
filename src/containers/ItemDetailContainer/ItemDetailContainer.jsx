import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/Spinners/Spinner";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', id);
    setLoading(false)
    getDoc(queryDoc)
      // .then(product => {setProduct({id: product.id, ...product.data() }))
    .then(product => {
      if (product.exists) {
        setProduct({id: product.id, ...product.data() });
      } else {
        console.log('document abc DOES NOT exist');
      }
    })},
  [id])
  
  return (
    <div style={styles.cont}>
      {<>{loading ? <Spinner /> : <ItemDetail product={product} />}</>}
    </div>
  );
};

const styles = {
  cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}

export default ItemDetailContainer;

// setLoading(false);
// {<>{loading ? <Spinner /> : <ItemDetail product={product} />}</>}
