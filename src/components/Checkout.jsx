import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => alert('Checkout Successful. Your order has been placed.')}>Checkout</button>
    </div>
  );
};

export default Checkout;

