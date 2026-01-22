import React, { useState, useEffect } from 'react';
import { booksAPI } from '../services/api';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, [filters]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data } = await booksAPI.getAllBooks(filters);
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
      alert('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await booksAPI.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      minPrice: '',
      maxPrice: ''
    });
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Bookstore</h1>
        <p>Discover your next favorite book</p>
      </div>

      <div className="filters-section">
        <input
          type="text"
          name="search"
          placeholder="Search by title or author..."
          value={filters.search}
          onChange={handleFilterChange}
          className="search-input"
        />
        
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="price-input"
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="price-input"
        />

        <button onClick={clearFilters} className="clear-btn">
          Clear Filters
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading books...</div>
      ) : (
        <>
          <div className="books-count">
            Found {books.length} book{books.length !== 1 ? 's' : ''}
          </div>
          
          {books.length === 0 ? (
            <div className="no-books">
              <p>No books found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="books-grid">
              {books.map(book => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
