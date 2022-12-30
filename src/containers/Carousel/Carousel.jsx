import React, { useEffect, useState } from "react";

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom"; 

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import Item from '../../components/Item/Item'

const Carr = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
  },[id])

  return (
    <>
      <Carousel showDots={false} responsive={responsive}>
        {products.map((product) =>
              <Item key={product.id} product={product} />
          )}
      </Carousel>
    </>
  );
}

export default Carr