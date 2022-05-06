import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Products from './Products'
import ControlArea from './ControlArea';
import Carrinho from './Carrinho';
import MyContextProvider from './context/myContext';

function App() {
  return (
      <MyContextProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/admin" element={ <ControlArea /> } />
          <Route path="/carrinho" element={ <Carrinho /> } />
        </Routes>
      </MyContextProvider>

  );
}

export default App;
