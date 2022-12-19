import React, { useEffect, useState } from "react";
import Api from "../services/Api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await Api.get(`/categories`);
      setCategories(result.data);
    } catch { console.log("error"); } 
  };

  useEffect(()=>{
    getCategories()
  },[])
};
  
export default Categories;
