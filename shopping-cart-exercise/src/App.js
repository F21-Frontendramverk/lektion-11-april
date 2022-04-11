import './App.css';
import { useState } from 'react';

import products from './assets/products.json';

import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);
  
  function updateCart(product) {
    console.log(product);
    const cartCopy = [...cart]; // Gör en kopia på vår array med spread operatorn (...)
    cartCopy.push(product); // Pushade in vår nya produkt i arrayen.
    setCart(cartCopy); // Uppdatera state med vår nya array
  }

  const productItems = products.map((product, index) => {
    return <Product productInfo = { product } key={ index } updateCart={ updateCart } />
  });

  return (
    <div className="App">
      <Header />
      <section className='products'>
        { productItems }
      </section>
    </div>
  );
}

export default App;