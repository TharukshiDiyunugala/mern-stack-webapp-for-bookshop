# ⚡ Quick Command Reference

## 🚀 First Time Setup

```bash
# Run setup script (installs dependencies)
setup.bat

# Create backend .env file
cd backend
copy .env.example .env

# Seed database with sample data
node seed.js

# Start both servers
cd ..
start.bat
```

---

## 💻 Development Commands

### Backend (Terminal 1)
```bash
cd backend

# Start development server (with auto-restart)
npm run dev

# Start production server
npm start

# Seed database
node seed.js
```

### Frontend (Terminal 2)
```bash
cd frontend

# Start React development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## 🗄️ MongoDB Commands

### Windows
```bash
# Start MongoDB service
net start MongoDB

# Stop MongoDB service
net stop MongoDB

# Check MongoDB status
services.msc
```

### Mac/Linux
```bash
# Start MongoDB
brew services start mongodb-community
# or
sudo systemctl start mongodb

# Stop MongoDB
brew services stop mongodb-community
# or
sudo systemctl stop mongodb

# Check status
brew services list
# or
sudo systemctl status mongodb
```

### MongoDB Shell
```bash
# Connect to MongoDB
mongosh
# or
mongo

# Common commands:
show dbs                    # List databases
use bookstore              # Switch to bookstore db
show collections           # List collections
db.books.find()            # Show all books
db.users.find()            # Show all users
db.books.countDocuments()  # Count books
```

---

## 🔧 Troubleshooting Commands

### Check if Ports are Available
```bash
# Check port 5000 (backend)
netstat -ano | findstr :5000

# Check port 3000 (frontend)
netstat -ano | findstr :3000
```

### Kill Process on Port
```bash
# Kill process by PID (use PID from netstat)
taskkill /PID <PID_NUMBER> /F

# Example:
taskkill /PID 12345 /F
```

### Clean Install
```bash
# Backend
cd backend
rmdir /s /q node_modules
del package-lock.json
npm install

# Frontend
cd frontend
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Clear Browser Data
```
Chrome: Ctrl + Shift + Delete
Firefox: Ctrl + Shift + Delete
Edge: Ctrl + Shift + Delete

Or:
Chrome DevTools → Application → Clear Storage
```

---

## 🎯 Quick Test Commands

### Test Backend API
```bash
# Test if backend is running
curl http://localhost:5000

# Test books endpoint (PowerShell)
Invoke-RestMethod -Uri http://localhost:5000/api/books

# Using curl (if installed)
curl http://localhost:5000/api/books
```

### Test MongoDB Connection
```bash
cd backend
node -e "require('./config/db')(); setTimeout(() => process.exit(0), 3000)"
```

---

## 📦 Package Management

### Check Versions
```bash
# Node version
node --version

# npm version
npm --version

# Check outdated packages
npm outdated
```

### Update Packages
```bash
# Update to latest compatible versions
npm update

# Update specific package
npm update <package-name>

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🐛 Debug Commands

### Backend Debugging
```bash
# Start with verbose logging
cd backend
set DEBUG=* && npm run dev

# Or add console.logs
node server.js
```

### Frontend Debugging
```bash
# React DevTools (install browser extension)
# Then open browser DevTools → Components/Profiler

# Check for errors
# Open browser Console (F12)
```

### Clear All Data and Restart
```bash
# Stop all servers (Ctrl+C in both terminals)

# Clear MongoDB database
mongosh
use bookstore
db.dropDatabase()
exit

# Re-seed
cd backend
node seed.js

# Restart
cd ..
start.bat
```

---

## 🔑 Demo Credentials

### After Seeding Database:
```
Admin:
Email: admin@bookstore.com
Password: admin123

User:
Email: user@bookstore.com
Password: user123
```

---

## 📝 Git Commands (Optional)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MERN Bookstore"

# Add remote (your GitHub repo)
git remote add origin https://github.com/yourusername/mern-bookstore.git

# Push
git push -u origin main
```

---

## 🌐 URLs to Remember

```
Frontend:  http://localhost:3000
Backend:   http://localhost:5000
API Base:  http://localhost:5000/api

API Endpoints:
- GET    /api/books              (Get all books)
- GET    /api/books/:id          (Get one book)
- POST   /api/auth/register      (Register user)
- POST   /api/auth/login         (Login user)
- POST   /api/books              (Add book - admin)
- PUT    /api/books/:id          (Update book - admin)
- DELETE /api/books/:id          (Delete book - admin)
```

---

## ⚙️ Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🎨 VS Code Commands

```
Ctrl+`        Open terminal
Ctrl+B        Toggle sidebar
Ctrl+Shift+P  Command palette
Ctrl+P        Quick file open
Ctrl+F        Find in file
Ctrl+Shift+F  Find in all files
F5            Start debugging
```

---

## 📱 Chrome DevTools

```
F12           Open DevTools
Ctrl+Shift+C  Inspect element
Ctrl+Shift+J  Console
Ctrl+Shift+I  DevTools
Ctrl+Shift+M  Toggle device toolbar (mobile view)
```

---

## 🚨 Emergency: Nothing Works!

```bash
# Nuclear option - reset everything:

# 1. Stop all servers (Ctrl+C)

# 2. Delete all dependencies
rmdir /s /q backend\node_modules
rmdir /s /q frontend\node_modules
del backend\package-lock.json
del frontend\package-lock.json

# 3. Reinstall
cd backend
npm install
cd ..\frontend
npm install
cd ..

# 4. Reset database
mongosh
use bookstore
db.dropDatabase()
exit

# 5. Re-seed
cd backend
node seed.js
cd ..

# 6. Restart
start.bat

# 7. Hard refresh browser (Ctrl+Shift+R)
```

---

## 📞 Quick Diagnostic Checklist

Before asking for help, check:
- [ ] Is MongoDB running?
- [ ] Is backend running on port 5000?
- [ ] Is frontend running on port 3000?
- [ ] Did you run `node seed.js`?
- [ ] Any errors in backend terminal?
- [ ] Any errors in browser console?
- [ ] Did you hard refresh browser?
- [ ] Is .env file created?
- [ ] Are node_modules installed?

---

## 💡 Pro Tips

```bash
# Run both terminals in one window (split)
# VS Code: Ctrl+Shift+5 (split terminal)

# Keep this file open for quick reference

# Use PowerShell/CMD, not Git Bash (compatibility)

# Always check terminal for errors

# Google error messages (they're your friend!)
```

---

**Keep this file handy during development! 📌**
