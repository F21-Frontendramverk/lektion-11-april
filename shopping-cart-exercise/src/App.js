import './App.css';
import { useState } from 'react';

import products from './assets/products.json';

import Product from './components/Product';

function App() {
  
  const productItems = products.map((product, index) => {
    return <Product productInfo = { product } key={ index } />
  })

  return (
    <div className="App">
      <section>
        { productItems }
      </section>
    </div>
  );
}

export default App;
