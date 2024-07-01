// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    createTables();
  }
});

// Create tables if they don't exist
function createTables() {
  db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    university TEXT,
    socialStatus TEXT,
    phone TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS landlords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    password TEXT
  )`);
}

// Student registration endpoint
app.post('/api/register/student', (req, res) => {
  const { fullName, email, university, socialStatus, phone, password } = req.body;
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error hashing password' });
    }

    const query = `INSERT INTO students (fullName, email, university, socialStatus, phone, password) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [fullName, email, university, socialStatus, phone, hashedPassword], function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Student registered successfully', id: this.lastID });
    });
  });
});

// Landlord registration endpoint
app.post('/api/register/landlord', (req, res) => {
    const { fullName, email, phone, password } = req.body;
    
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Error hashing password' });
      }
  
      const query = `INSERT INTO landlords (fullName, email, phone, password) 
                     VALUES (?, ?, ?, ?)`;
      
      db.run(query, [fullName, email, phone, hashedPassword], function(err) {
        if (err) {
          if (err.message.includes("UNIQUE constraint failed: landlords.email")) {
            return res.status(400).json({ error: 'Email already registered' });
          }
          return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'Landlord registered successfully', id: this.lastID });
      });
    });
  });

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password, isLandlord } = req.body;
    const table = isLandlord ? 'landlords' : 'students';
    
    const query = `SELECT * FROM ${table} WHERE email = ?`;
    
    db.get(query, [email], (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error comparing passwords' });
        }
        if (!result) {
          return res.status(400).json({ error: 'Invalid password' });
        }
        
        // Don't send the password back to the client
        const { password, ...userWithoutPassword } = user;
        res.json({ message: 'Login successful', user: userWithoutPassword });
      });
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});