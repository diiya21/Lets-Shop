import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container">
      <h1 className='font-bold font-serif'>Product Home Page</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="product-list">
        <ProductList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
