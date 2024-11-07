import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(() => {
        setError('Failed to load products.'); 
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {error && <p>{error}</p>} 
      {filteredProducts.map(product => (
        <div key={product.id} className="product-tile">
          <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
