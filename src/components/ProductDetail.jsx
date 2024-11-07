import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [buttonText, setButtonText] = useState('Add to Cart'); 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setButtonText('Added'); 
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail font-extrabold ">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        {buttonText}
      </button>
    </div>
  );
};

export default ProductDetail;
