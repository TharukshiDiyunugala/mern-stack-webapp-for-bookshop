@echo off
echo ====================================
echo   MERN Bookstore - Quick Start
echo ====================================
echo.
echo Starting Backend and Frontend servers...
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C in this window to stop both servers
echo.

:: Start backend in a new window
start "MERN Backend" cmd /k "cd backend && echo Starting Backend Server... && npm run dev"

:: Wait a bit for backend to start
timeout /t 3 /nobreak >nul

:: Start frontend in a new window
start "MERN Frontend" cmd /k "cd frontend && echo Starting Frontend Server... && npm start"

echo.
echo Both servers are starting in separate windows...
echo Check those windows for server status
echo.
echo Demo Credentials:
echo Admin: admin@bookstore.com / admin123
echo User: user@bookstore.com / user123
echo.
pause
