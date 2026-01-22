import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (book.stock > 0) {
      addToCart(book);
      alert(`"${book.title}" added to cart!`);
    }
  };

  const handleCardClick = () => {
    navigate(`/books/${book._id}`);
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <img 
        src={book.imageUrl} 
        alt={book.title}
        className="book-image"
      />
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-details">
          <span className="book-category">{book.category}</span>
          {book.rating > 0 && (
            <span className="book-rating">⭐ {book.rating.toFixed(1)}</span>
          )}
        </div>
        <div className="book-footer">
          <span className="book-price">${book.price.toFixed(2)}</span>
          <button 
            className={`add-to-cart-btn ${book.stock === 0 ? 'out-of-stock' : ''}`}
            onClick={handleAddToCart}
            disabled={book.stock === 0}
          >
            {book.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
        {book.stock > 0 && book.stock < 10 && (
          <p className="low-stock">Only {book.stock} left!</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
