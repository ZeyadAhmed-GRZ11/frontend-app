import './App.css';
import React, { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
       fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (item) => {
    const newArray = [...cart];
    newArray.push(item);
    setCart(newArray);
    alert(item);
  };

  return (
    <main>
      <nav className='p-3 container text-center sticky-top bg-black text-white mb-4 rounded'>
        <h1>Shopify</h1>
        <h2>Items in my cart: {cart.length}</h2>
      </nav>

      <section className='container px-3'>
        <div className='row'>
          {products.map((product, i) => {
            return (
              <div
                className='col-3 col-md-3 col-md-3 align-items-stretch'
                key={i}
              >
                <ProductCard
                  addToCart={addToCart}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
                
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
