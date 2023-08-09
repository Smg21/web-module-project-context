import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './data';

import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [products] = useState(data);

  return (
    <ProductProvider>
      <CartProvider>
        <div className="App">
          <Router>
            <Navigation />
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </Router>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
