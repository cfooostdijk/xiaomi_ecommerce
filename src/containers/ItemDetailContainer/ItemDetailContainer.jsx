import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { prodAxios } from "../../services/Api";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/Spinners/Spinner";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const getProduct = async () => {
    try {
      const result = await prodAxios.get();
      const product = result.data;
      const prod = product.find(p => p.id === parseInt(id));
      console.log(prod);
      setProduct(prod);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  useEffect(()=>{
    getProduct()
  },[id])

  return (
    <div>
      <h1>{greeting}</h1>
      {<>{loading ? <Spinner /> : <ItemDetail product={product} />}</>}
    </div>
  );
};

export default ItemDetailContainer;

