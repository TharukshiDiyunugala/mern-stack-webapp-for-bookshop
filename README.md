# 📚 MERN Bookstore Application

A full-stack bookstore application built with MongoDB, Express.js, React, and Node.js.

---

## ⚡ **NEW USER? START HERE!** ⚡

👉 **Read [START_HERE.md](START_HERE.md) first for quick setup and overview!**

---

## 🎯 Project Overview

This is a comprehensive bookstore management system where users can browse books, add them to cart, and make purchases. Admins can manage the book inventory through a dedicated admin panel.

## ✨ Key Features

### User Features
- **Browse Books**: View all available books with details
- **Search & Filter**: Find books by title, author, or category
- **Book Details**: View detailed information about each book
- **Shopping Cart**: Add/remove books and manage cart
- **User Authentication**: Secure login and registration
- **Order History**: View past purchases

### Admin Features
- **Book Management**: Add, edit, and delete books
- **Inventory Control**: Manage stock levels
- **Category Management**: Organize books by categories

## 🏗️ System Architecture

### Backend (Node.js + Express)
- RESTful API design
- JWT-based authentication
- MongoDB with Mongoose ODM
- Input validation and error handling
- Security best practices (bcrypt, cors, helmet)

### Frontend (React)
- Component-based architecture
- React Router for navigation
- Context API for state management
- Axios for API calls
- Responsive design

### Database (MongoDB)
- Users collection (authentication & profiles)
- Books collection (inventory)
- Orders collection (purchase history)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone and Navigate**
```bash
cd MERN
```

2. **Backend Setup**
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

Start backend server:
```bash
npm run dev
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm start
```

## 📁 Project Structure

```
MERN/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Book.js               # Book schema
│   │   └── Order.js              # Order schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── books.js              # Book CRUD routes
│   │   └── orders.js             # Order routes
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── admin.js              # Admin authorization
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   ├── bookController.js     # Book operations
│   │   └── orderController.js    # Order processing
│   ├── server.js                 # Entry point
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js         # Navigation bar
    │   │   ├── BookCard.js       # Book display card
    │   │   ├── Cart.js           # Shopping cart
    │   │   └── ProtectedRoute.js # Route protection
    │   ├── pages/
    │   │   ├── Home.js           # Landing page
    │   │   ├── BookDetails.js    # Single book view
    │   │   ├── Login.js          # User login
    │   │   ├── Register.js       # User registration
    │   │   ├── AdminDashboard.js # Admin panel
    │   │   └── OrderHistory.js   # User orders
    │   ├── context/
    │   │   ├── AuthContext.js    # Auth state management
    │   │   └── CartContext.js    # Cart state management
    │   ├── services/
    │   │   └── api.js            # API integration
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get single book
- `POST /api/books` - Add new book (Admin only)
- `PUT /api/books/:id` - Update book (Admin only)
- `DELETE /api/books/:id` - Delete book (Admin only)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/user` - Get user's orders
- `GET /api/orders/:id` - Get single order

## 💡 Technical Highlights for Interview

### 1. **Authentication Flow**
- Password hashing with bcrypt
- JWT token generation and verification
- Protected routes on both frontend and backend
- Role-based access control (User/Admin)

### 2. **State Management**
- React Context API for global state
- Separate contexts for Auth and Cart
- Persistent cart in localStorage

### 3. **Database Design**
- Normalized schema design
- Mongoose validation
- Indexing for performance

### 4. **Error Handling**
- Centralized error handling middleware
- Proper HTTP status codes
- User-friendly error messages

### 5. **Security Features**
- CORS configuration
- Helmet.js for security headers
- Input validation and sanitization
- Rate limiting (optional)

## 🎤 Interview Talking Points

1. **Why MERN Stack?**
   - Single language (JavaScript) across full stack
   - React's component reusability
   - MongoDB's flexibility for schema changes
   - Express's simplicity and middleware ecosystem

2. **System Design Decisions**
   - RESTful API for clear separation of concerns
   - JWT for stateless authentication
   - Context API vs Redux (simpler for small-medium apps)
   - Component composition for reusability

3. **Scalability Considerations**
   - Database indexing on frequently queried fields
   - Pagination for book listings
   - Image storage strategy (base64 vs CDN)
   - Caching strategies for popular books

4. **Common Debugging Scenarios**
   - CORS errors and solutions
   - JWT expiration handling
   - MongoDB connection issues
   - React re-render optimization

## 🧪 Testing

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📦 Deployment

- Backend: Heroku, Railway, or Render
- Frontend: Vercel, Netlify
- Database: MongoDB Atlas

## 👨‍💻 Development Notes

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`
- Make sure MongoDB is running before starting the backend

## 📝 License

MIT License - feel free to use for learning and portfolio purposes
