import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 Bookstore
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/cart" className="cart-link">
                  🛒 Cart {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                </Link>
              </li>
              <li>
                <Link to="/orders">My Orders</Link>
              </li>
              {isAdmin() && (
                <li>
                  <Link to="/admin">Admin Dashboard</Link>
                </li>
              )}
              <li className="user-info">
                <span>Hello, {user.name}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register" className="register-btn">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
