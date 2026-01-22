import React, { useState, useEffect } from 'react';
import { booksAPI } from '../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    category: 'Fiction',
    stock: '',
    imageUrl: '',
    isbn: '',
    publisher: '',
    pages: '',
    language: 'English'
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data } = await booksAPI.getAllBooks({});
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBook) {
        await booksAPI.updateBook(editingBook._id, formData);
        alert('Book updated successfully!');
      } else {
        await booksAPI.createBook(formData);
        alert('Book added successfully!');
      }
      resetForm();
      fetchBooks();
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || 'Operation failed'));
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData(book);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await booksAPI.deleteBook(id);
        alert('Book deleted successfully!');
        fetchBooks();
      } catch (error) {
        alert('Error deleting book');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      description: '',
      price: '',
      category: 'Fiction',
      stock: '',
      imageUrl: '',
      isbn: '',
      publisher: '',
      pages: '',
      language: 'English'
    });
    setEditingBook(null);
    setShowForm(false);
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      
      <button onClick={() => setShowForm(!showForm)} className="toggle-form-btn">
        {showForm ? 'Cancel' : '+ Add New Book'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="book-form">
          <h2>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
          
          <div className="form-row">
            <input
              type="text"
              name="title"
              placeholder="Title *"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author *"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="description"
            placeholder="Description *"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
          />

          <div className="form-row">
            <input
              type="number"
              name="price"
              placeholder="Price *"
              value={formData.price}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock *"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
            />
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
              <option value="History">History</option>
              <option value="Biography">Biography</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Business">Business</option>
              <option value="Children">Children</option>
              <option value="Comics">Comics</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />

          <div className="form-row">
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              value={formData.isbn}
              onChange={handleChange}
            />
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              value={formData.publisher}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              name="pages"
              placeholder="Pages"
              value={formData.pages}
              onChange={handleChange}
              min="1"
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={formData.language}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-book-btn">
            {editingBook ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      )}

      <div className="books-table">
        <h2>Manage Books ({books.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>${book.price.toFixed(2)}</td>
                <td>{book.stock}</td>
                <td>
                  <button onClick={() => handleEdit(book)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(book._id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
