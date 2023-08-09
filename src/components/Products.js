import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;


// import React, { useContext } from 'react';
// import { ProductContext } from '../contexts/ProductContext';
// import Product from './Product';

// const Products = () => {
//   const { products } = useContext(ProductContext);

//   return (
//     <div className="products-list">
//       {products.map(product => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default Products;
