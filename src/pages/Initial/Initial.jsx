import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from '../../components/Cart/Cart';
import CartProvider from '../../context/CartContext';
import Checkout from '../../components/Checkout/Checkout';
import Footer from '../../components/Footer/Footer';
import Header from '../../containers/Header/Header';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Layout from '../../containers/Layout';
import Landing from '../Landing/Landing';
import NotFound from '../NotFound/NotFound';

export const Initial =() =>{

  const Categories = [
    { name: "All Products", id: 0, route: "/catalog" },
    { name: "Smartphones", id: 1, route: "/category/smartphones" },
    { name: "Headphones", id: 2, route: "/category/headphones" },
    { name: "Smartwatchs", id: 3, route: "/category/smartwatchs" },
    { name: "Smart-Home", id: 4, route: "/category/smart-home" },
    { name: "Electronics", id:5, route: "/category/electronics" }];

  return (
    <BrowserRouter>
      <CartProvider>
          <Layout>
            <Header categories={Categories} />
              <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route exact path="/catalog" element={<ItemListContainer />}/>
                <Route exact path="/category/:id" element={<ItemListContainer />}/>
                <Route exact path="/:id" element={<ItemDetailContainer />}/>
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/checkout' element={<Checkout />} />
                <Route exact path='/payment' element={''} />
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            <Footer />
          </Layout> 
      </CartProvider>
    </BrowserRouter>
  )
}

export default Initial;
