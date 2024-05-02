import React, { useState } from "react";
import Navigation from "./component/Navigation";
import Product from "./component/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import DetailsProduct from "./component/DetailsProduct";
import Search from "./component/Search";
import { items } from "./component/MData";
const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navigation cart={cart} setData={setData}/>
        <Routes>
          <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<DetailsProduct cart={cart} setCart={setCart} />} />
          <Route path="/search/:trem" element={<Search cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
