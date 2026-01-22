# 🚀 Quick Start Guide

Follow these steps to run the MERN Bookstore application:

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js (v14+) installed
- ✅ MongoDB installed and running OR MongoDB Atlas account
- ✅ npm installed

## Step 1: Install MongoDB (if not installed)

### Windows:
1. Download from: https://www.mongodb.com/try/download/community
2. Install and run MongoDB as a service

### Mac:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux:
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy .env.example to .env and update if needed
copy .env.example .env

# Seed the database with sample data
node seed.js

# Start the backend server
npm run dev
```

The backend should now be running on `http://localhost:5000`

## Step 3: Frontend Setup

Open a NEW terminal window:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

The frontend should open automatically at `http://localhost:3000`

## Step 4: Test the Application

1. **Browse Books**: Visit http://localhost:3000
2. **Login as User**: 
   - Email: user@bookstore.com
   - Password: user123
3. **Login as Admin**: 
   - Email: admin@bookstore.com
   - Password: admin123

## Common Issues & Solutions

### Issue: MongoDB Connection Failed
**Solution**: 
- Make sure MongoDB is running: `mongod` (or check if service is active)
- Check MONGODB_URI in backend/.env file

### Issue: Port 3000 already in use
**Solution**: 
- Kill the process using port 3000
- Or change port in frontend/package.json

### Issue: Port 5000 already in use
**Solution**: 
- Change PORT in backend/.env file
- Update REACT_APP_API_URL accordingly

### Issue: CORS errors
**Solution**: 
- Make sure backend is running on port 5000
- Check proxy setting in frontend/package.json

## API Testing with Postman/Thunder Client

Import these example requests:

### Register User
```
POST http://localhost:5000/api/auth/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Get All Books
```
GET http://localhost:5000/api/books
```

### Create Book (Admin only)
```
POST http://localhost:5000/api/books
Headers: Authorization: Bearer YOUR_TOKEN_HERE
Body: {
  "title": "New Book",
  "author": "Author Name",
  "description": "Book description",
  "price": 29.99,
  "category": "Fiction",
  "stock": 10
}
```

## Interview Preparation Tips

**What to explain:**
1. **Architecture**: MERN stack separation, REST API design
2. **Authentication**: JWT tokens, bcrypt password hashing
3. **State Management**: Context API for auth and cart
4. **Database Design**: MongoDB schemas with Mongoose
5. **Security**: Protected routes, role-based access control

**Be ready to debug:**
- CORS issues
- JWT token expiration
- MongoDB connection problems
- React component re-rendering

**System design questions:**
- Why MongoDB over SQL?
- How to scale the application?
- Caching strategies
- Image storage solutions

Good luck with your interview! 🎯
