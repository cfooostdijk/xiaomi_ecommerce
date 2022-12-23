import React, { useEffect, useState } from "react";
import { catAxios } from "../../services/Api";

const Categories2 = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await catAxios.get();
      setCategories(result);
      console.log(categories)
    } catch { console.log("error"); } 
  };

  useEffect(()=>{
    getCategories()
  },[])
};
  
export default Categories2;
