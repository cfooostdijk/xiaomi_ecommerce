import React from 'react';
import './Initial.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartContainer from '../../containers/CartContainer';
import CartProvider from '../../context/CartContext';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Landing from '../Landing/Landing';
import Layout from '../../containers/Layout';
import Order from '../../containers/OrderContainer/OrderContainer';
import Register from '../../components/Register/Register';

export const Initial =() =>{

  const Categories = [
    { name: 'All Products', id: 0, route: '/catalog' },
    { name: 'Smartphones', id: 1, route: '/category/smartphones' },
    { name: 'Headphones', id: 2, route: '/category/headphones' },
    { name: 'Smartwatchs', id: 3, route: '/category/smartwatchs' },
    { name: 'Smart-Home', id: 4, route: '/category/smart-home' },
    { name: 'Electronics', id:5, route: '/category/electronics' }];

  return (
    <BrowserRouter>
      <CartProvider>
          <Layout>
            <Header categories={Categories} />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/catalog' element={<ItemListContainer />} />
              <Route exact path='/category/:id' element={<ItemListContainer />} />
              <Route exact path='/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<CartContainer />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/checkout' element={<Order />} />
              <Route exact path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Layout> 
      </CartProvider>
    </BrowserRouter>
  )
}

export default Initial;
