import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { booksAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const { data } = await booksAPI.getBookById(id);
      setBook(data);
    } catch (error) {
      console.error('Error fetching book:', error);
      alert('Book not found');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (book && book.stock > 0) {
      addToCart(book, quantity);
      alert(`${quantity} x "${book.title}" added to cart!`);
    }
  };

  if (loading) {
    return <div className="loading">Loading book details...</div>;
  }

  if (!book) {
    return <div className="loading">Book not found</div>;
  }

  return (
    <div className="book-details-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="book-details-content">
        <div className="book-image-section">
          <img src={book.imageUrl} alt={book.title} className="book-detail-image" />
        </div>

        <div className="book-info-section">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>

          <div className="book-meta">
            <span className="category-badge">{book.category}</span>
            {book.rating > 0 && (
              <span className="rating">⭐ {book.rating.toFixed(1)} ({book.numReviews} reviews)</span>
            )}
          </div>

          <p className="book-description">{book.description}</p>

          <div className="book-additional-info">
            {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
            {book.publishedDate && (
              <p><strong>Published:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
            )}
            {book.pages && <p><strong>Pages:</strong> {book.pages}</p>}
            {book.language && <p><strong>Language:</strong> {book.language}</p>}
            {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
          </div>

          <div className="price-section">
            <span className="price">${book.price.toFixed(2)}</span>
            <span className={`stock-status ${book.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
            </span>
          </div>

          {book.stock > 0 && (
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max={book.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(book.stock, Number(e.target.value))))}
                />
              </div>
              <button onClick={handleAddToCart} className="add-to-cart-btn-large">
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
