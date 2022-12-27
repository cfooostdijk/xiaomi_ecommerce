import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { prodAxios } from "../../services/Api";
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
    getDoc(queryDoc)
      .then(product => setProduct({id: product.id, ...product.data() }))
  },[id])
  

  // const getProduct = async () => {
  //   try {
  //     const result = await prodAxios.get();
  //     const product = result.data;
  //     const prod = product.find(p => p.id === parseInt(id));
  //     console.log(prod);
  //     setProduct(prod);
  //   } catch { console.log("error"); } 
  //   finally { setLoading(false); }
  // };

  // useEffect(()=>{
  //   getProduct()
  // },[id])

  return (
    <div style={styles.cont}>
      <ItemDetail product={product} />
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

