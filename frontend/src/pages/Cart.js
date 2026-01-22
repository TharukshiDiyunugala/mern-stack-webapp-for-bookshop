import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert('Please login to proceed with checkout');
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some books to get started!</p>
        <button onClick={() => navigate('/')} className="browse-btn">
          Browse Books
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.book._id} className="cart-item">
              <img 
                src={item.book.imageUrl} 
                alt={item.book.title}
                className="cart-item-image"
                onClick={() => navigate(`/books/${item.book._id}`)}
              />
              
              <div className="cart-item-info">
                <h3>{item.book.title}</h3>
                <p className="cart-item-author">by {item.book.author}</p>
                <p className="cart-item-price">${item.book.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button 
                    onClick={() => updateQuantity(item.book._id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.book._id, item.quantity + 1)}
                    disabled={item.quantity >= item.book.stock}
                  >
                    +
                  </button>
                </div>
                
                <p className="cart-item-subtotal">
                  Subtotal: ${(item.book.price * item.quantity).toFixed(2)}
                </p>
                
                <button 
                  onClick={() => removeFromCart(item.book._id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items:</span>
            <span>{cart.reduce((count, item) => count + item.quantity, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          
          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
          
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
