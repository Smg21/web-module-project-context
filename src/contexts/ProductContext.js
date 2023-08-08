import React, { createContext, useContext, useState } from 'react';
import data from '../data';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(data);
  const [cart, setCart] = useState([]); // Add cart state

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem, cart }}>
      {children}
    </ProductContext.Provider>
  );
};
