require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Book = require('./models/Book');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    description: "Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.",
    price: 12.99,
    category: "Fiction",
    stock: 50,
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    publisher: "Scribner",
    pages: 180,
    language: "English",
    rating: 4.5
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    price: 14.99,
    category: "Fiction",
    stock: 45,
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    publisher: "Harper Perennial",
    pages: 324,
    language: "English",
    rating: 4.8
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    price: 13.99,
    category: "Fiction",
    stock: 60,
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    publisher: "Signet Classic",
    pages: 328,
    language: "English",
    rating: 4.7
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    description: "A Handbook of Agile Software Craftsmanship. Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    price: 39.99,
    category: "Technology",
    stock: 30,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
    publisher: "Prentice Hall",
    pages: 464,
    language: "English",
    rating: 4.6
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    isbn: "9780062316110",
    description: "A Brief History of Humankind explores the ways in which biology and history have defined us.",
    price: 16.99,
    category: "History",
    stock: 40,
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    publisher: "Harper",
    pages: 443,
    language: "English",
    rating: 4.5
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.",
    price: 19.99,
    category: "Self-Help",
    stock: 55,
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=400&fit=crop",
    publisher: "Avery",
    pages: 320,
    language: "English",
    rating: 4.8
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "9780307887894",
    description: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses.",
    price: 17.99,
    category: "Business",
    stock: 35,
    imageUrl: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=300&h=400&fit=crop",
    publisher: "Crown Business",
    pages: 336,
    language: "English",
    rating: 4.4
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "9780439708180",
    description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle.",
    price: 10.99,
    category: "Children",
    stock: 70,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    publisher: "Scholastic",
    pages: 309,
    language: "English",
    rating: 4.9
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Book.deleteMany({});

    // Create admin user
    console.log('👤 Creating admin user...');
    const adminPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin User',
      email: 'admin@bookstore.com',
      password: 'admin123',
      role: 'admin'
    });

    // Create regular user
    console.log('👤 Creating regular user...');
    await User.create({
      name: 'Test User',
      email: 'user@bookstore.com',
      password: 'user123',
      role: 'user'
    });

    // Create books
    console.log('📚 Creating books...');
    await Book.insertMany(sampleBooks);

    console.log('✅ Database seeded successfully!');
    console.log('\n📝 Demo Credentials:');
    console.log('Admin: admin@bookstore.com / admin123');
    console.log('User: user@bookstore.com / user123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
