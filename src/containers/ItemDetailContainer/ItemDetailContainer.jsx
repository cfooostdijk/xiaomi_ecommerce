import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/Spinners/Spinner";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [prodValid, setProdValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', id);
    setLoading(false)
    getDoc(queryDoc)
      .then(product => !product.exists() ? setProdValid(false) : setProduct({id: product.id, ...product.data()})
    )},
  [id])

  if (prodValid === false) {
    return (
      <div style={styles.cont}>
        {loading ? <Spinner /> : <ErrorPage />}
      </div>
    )
  } else {
    return (
      <div style={styles.cont}>
        {loading ? <Spinner /> : <ItemDetail product={product} />}
      </div>
    )
  }
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
