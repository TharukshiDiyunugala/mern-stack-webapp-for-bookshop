@echo off
echo ====================================
echo   MERN Bookstore - Setup Script
echo ====================================
echo.

echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)
echo Node.js: OK
echo.

echo [2/4] Installing Backend Dependencies...
cd backend
if not exist node_modules (
    echo Installing packages... This may take a few minutes.
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install backend dependencies
        pause
        exit /b 1
    )
) else (
    echo Backend dependencies already installed
)
echo.

echo [3/4] Setting up Environment Variables...
if not exist .env (
    copy .env.example .env
    echo Created .env file from .env.example
    echo IMPORTANT: Please update .env with your MongoDB connection string if needed
) else (
    echo .env file already exists
)
cd ..
echo.

echo [4/4] Installing Frontend Dependencies...
cd frontend
if not exist node_modules (
    echo Installing packages... This may take a few minutes.
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install frontend dependencies
        pause
        exit /b 1
    )
) else (
    echo Frontend dependencies already installed
)
cd ..
echo.

echo ====================================
echo   Setup Complete!
echo ====================================
echo.
echo Next steps:
echo 1. Make sure MongoDB is running
echo 2. Run 'npm run seed' in the backend folder to add sample data
echo 3. Run 'npm run dev' in the backend folder to start the server
echo 4. Run 'npm start' in the frontend folder to start the React app
echo.
echo Or use start.bat to run both automatically
echo.
pause
