import React from 'react';

const Product = ({ product, addItem }) => { // Receive addItem as a prop
  const { title, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button> {/* Use addItem */}
    </div>
  );
};

export default Product;
