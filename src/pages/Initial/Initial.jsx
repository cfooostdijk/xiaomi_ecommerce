import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Initial.css'

import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';
import CartProvider from '../../context/CartContext';
import Categories2 from '../../containers/Categories/Categories';
import Checkout from '../../components/Checkout/Checkout';
import Footer from '../../components/Footer/Footer';
import Header from '../../containers/Header/Header';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Layout from '../../containers/Layout';

export const Initial =() =>{

  const Categories = [
    { name: "Smartphones", id: 0, route: "/category/smartphones" },
    { name: "Headphones", id: 1, route: "/category/headphones" },
    { name: "Smartwatchs", id: 2, route: "/category/smartwatchs" },
    { name: "Smart-Home", id: 3, route: "/category/smart-home" },
    { name: "Electronics", id:4, route: "/category/electronics" }];

  return (
    <BrowserRouter>
      <CartProvider>
          <Layout>
            <Categories2 />
            <Header categories={Categories} />
            {/* <Banner /> */}
              <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/category/:id" element={<ItemListContainer />}/>
                <Route exact path="/:id" element={<ItemDetailContainer />}/>
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/checkout' element={<Checkout />} />
                <Route exact path='/payment' element={''} />
              </Routes>
            <Footer />
          </Layout> 
      </CartProvider>
    </BrowserRouter>
  )
}

export default Initial;
