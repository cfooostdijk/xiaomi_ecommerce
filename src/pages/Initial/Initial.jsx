import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../containers/Header/Header';

import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Layout from '../../containers/Layout';
import CartProvider from '../../context/CartContext';
import Cart from '../../components/Cart/Cart';


export const Initial =() =>{

  const Greeting = ["Welcome"];
  const Title = ["Another shop store"]
  const Pag = ["This is a Category"]

  const Categories = [
    { name: "Men", id: 0, route: "/category/men's clothing" },
    { name: "Women", id: 1, route: "/category/women's clothing" },
    { name: "Electronics", id: 2, route: "/category/electronics" },
    { name: "Jewelry", id: 3, route: "/category/jewelery" }];

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Header categories={Categories} />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={Greeting} title={Title} />}/>
              <Route path="/category/:id" element={<ItemListContainer greeting={Greeting} pag={Pag} />}/>
              <Route path="/:id" element={<ItemDetailContainer />}/>
              <Route exact path='/cart' element={<Cart />} />
            </Routes>
          </Layout> 
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default Initial;
