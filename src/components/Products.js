import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from './Product';

const Products = () => {
  const { products, addItem } = useContext(ProductContext); // UseContext to get products and addItem

  return (
    <div className="products">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addItem={addItem} // Pass the addItem function
        />
      ))}
    </div>
  );
};

export default Products;
