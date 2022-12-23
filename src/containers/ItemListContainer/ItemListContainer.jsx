import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { prodAxios, catidAxios } from "../../services/Api";
import { useParams } from "react-router-dom"; 
import Spinner from "../../assets/Spinners/Spinner";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  const getProductsByCat = async (id) => {
    try {
      const result = await catidAxios.get(`/${id}`);
      const products = result.data;
      const prods = products.filter(p => p.category === id);
      console.log(prods);
      setProducts(prods);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  const getProducts = async (id) => {
    try {
      const result = await prodAxios.get();
      const products = result.data;
      console.log(products);
      setProducts(products);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  useEffect(()=>{
    if (id) {
      getProductsByCat(id)
    } else {
      getProducts()
    }

  },[id])

   return (
    <>
      {<>{loading ? <Spinner /> : <ItemList products={products} />}</>}
    </>
  );
};
  
export default ItemListContainer;
