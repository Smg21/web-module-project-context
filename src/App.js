// import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
// import data from './data';

// import Navigation from './components/Navigation';
// import Products from './components/Products';
// import ShoppingCart from './components/ShoppingCart';
// // // import { ProductProvider } from './contexts/ProductContext';
// // import { ProductProvider } from './contexts/ProductContext';
// import { ProductProvider } from './contexts/ProductContext';


// function App() {
//   const [products] = useState(data);

//   return (
//     <ProductProvider>
//       <div className="App">
//         <Navigation />
//         <Route exact path="/">
//           <Products products={products} />
//         </Route>
//         <Route path="/cart">
//           <ShoppingCart />
//         </Route>
//       </div>
//     </ProductProvider>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  const [products] = useState(data);

  return (
    <ProductProvider>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </div>
    </ProductProvider>
  );
}

export default App;
