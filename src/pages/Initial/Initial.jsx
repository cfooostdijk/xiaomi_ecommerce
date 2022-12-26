import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Initial.css'

import { DarkModeProvider } from '../../context/DarkModeContext';
import ThemeContainer from '../../containers/ThemeContainer/ThemeContainer'

import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Layout from '../../containers/Layout';
import CartProvider from '../../context/CartContext';
import Cart from '../../components/Cart/Cart';
import Banner from '../../components/Banner/Banner';
import Categories2 from '../../containers/Categories/Categories';



export const Initial =() =>{

  const Categories = [
    { name: "Men", id: 0, route: "/category/men's clothing" },
    { name: "Women", id: 1, route: "/category/women's clothing" },
    { name: "Electronics", id: 2, route: "/category/electronics" },
    { name: "Jewelry", id: 3, route: "/category/jewelery" }];

  return (
    <BrowserRouter>
      <CartProvider>
        <DarkModeProvider>
          <ThemeContainer />
          <Layout>
            <Categories2 />
            <Header categories={Categories} />
            {/* <Banner /> */}
              <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/category/:id" element={<ItemListContainer />}/>
                <Route exact path="/:id" element={<ItemDetailContainer />}/>
                <Route exact path='/cart' element={<Cart />} />
              </Routes>
            <Footer />
          </Layout> 
        </DarkModeProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default Initial;