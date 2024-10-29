import React, { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './components/home/Home';
import Details from './components/Details/Details';
import CartDetails from './components/cart/CartDetails'; 
import Fashion from './components/Pages/Fashion';
import Mobiles from './components/Pages/Mobiles';
import Electronics from './components/Pages/Electronics';
import Tv from './components/Pages/Tv';
import Beauty from './components/Pages/Beauty';
import Homes from './components/Pages/Homes';
import Furniture from './components/Pages/Furniture';

// Create a DataContext
export const DataContext = createContext("");

const App = () => {
  const [accounts, setAccounts] = useState("");

  return (
    <DataContext.Provider value={{ accounts, setAccounts }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name/details/:id" element={<Details />} />
        <Route path="/CartDetails" element={<CartDetails />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/Homes" element={<Homes />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Mobiles" element={<Mobiles />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default App;
