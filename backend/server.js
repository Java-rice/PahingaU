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
  )`, (err) => {
    if (err) {
      console.error('Error creating students table:', err.message);
    }
  });

  db.run(`CREATE TABLE IF NOT EXISTS landlords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS housing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    landlordId INTEGER,
    latitude REAL,
    longitude REAL,
    address TEXT,
    image TEXT,
    description TEXT,
    housingType TEXT,
    leasingOption TEXT,
    accommodationType TEXT,
    amenities TEXT,
    price REAL,
    slot INTEGER,
    FOREIGN KEY (landlordId) REFERENCES landlords(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    senderId INTEGER,
    receiverId INTEGER,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES students(id),
    FOREIGN KEY (receiverId) REFERENCES landlords(id)
  )`);
}


// University coordinates
const universityCoordinates = {
  "Adamson University": { latitude: 14.5895, longitude: 120.9860 },
  "Ateneo de Manila University": { latitude: 14.6394, longitude: 121.0782 },
  "De La Salle University": { latitude: 14.5648, longitude: 120.9932 },
  "De La Salle-College of Saint Benilde": { latitude: 14.5636, longitude: 120.9951 },
  "National University, Philippines": { latitude: 14.6043, longitude: 120.9946 },
  "Polytechnic University of the Philippines": { latitude: 14.5979, longitude: 121.0108 },
  "University of Santo Tomas": { latitude: 14.6090, longitude: 120.9891 },
  "University of the Philippines Diliman": { latitude: 14.6537, longitude: 121.0687 },
  "University of the Philippines Manila": { latitude: 14.5800, longitude: 120.9862 },
  "University of the Philippines System": { latitude: 14.6537, longitude: 121.0687 }
};


// Create universities table and insert predefined coordinates

const universityCoordinates = {
  "Adamson University": [120.986, 14.6042],
  "Ateneo de Manila University": [121.0777, 14.6407],
  "De La Salle University": [120.9932, 14.5648],
  "De La Salle-College of Saint Benilde": [120.9951, 14.5636],
  "National University, Philippines": [120.9946, 14.6043],
  "Polytechnic University of the Philippines": [121.0108, 14.5979],
  "University of Santo Tomas": [120.9896, 14.6093],
  "University of the Philippines Diliman": [121.0657, 14.6537],
  "University of the Philippines Manila": [120.9918, 14.5806],
  "University of the Philippines System": [121.0657, 14.6537]
};

const insertUniversityQuery = `
    INSERT INTO universities (name, latitude, longitude)
    VALUES (?, ?, ?)
  `;

for (const [name, coords] of Object.entries(universityCoordinates)) {
  db.run(insertUniversityQuery, [name, coords[1], coords[0]], function (err) {
    if (err && err.message.includes('SQLITE_CONSTRAINT')) {
      // The university already exists, no need to insert again
      console.log(`University ${name} already exists`);
      return;
    } else if (err) {
      console.error(`Error inserting university ${name}:`, err.message);
    } else {
      console.log(`University ${name} inserted`);
    }
  });
}

// Student registration endpoint
app.post('/api/register/student', (req, res) => {
  const { fullName, email, university, socialStatus, phone, password } = req.body;
  const { latitude, longitude } = universityCoordinates[university] || { latitude: null, longitude: null };

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error hashing password' });
    }

    const query = `INSERT INTO students (fullName, email, university, socialStatus, phone, password, latitude, longitude) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [fullName, email, university, socialStatus, phone, hashedPassword, latitude, longitude], function (err) {
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

    db.run(query, [fullName, email, phone, hashedPassword], function (err) {
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

// Add new housing entry endpoint
app.post('/api/housing/add', (req, res) => {
  const {
    landlordId, latitude, longitude, address, image,
    description, housingType, leasingOption, accommodationType,
    amenities, price, slot
  } = req.body;

  const query = `INSERT INTO housing (
    landlordId, latitude, longitude, address, image, description,
    housingType, leasingOption, accommodationType, amenities, price, slot
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(query, [
    landlordId, latitude, longitude, address, image, description,
    housingType, leasingOption, accommodationType, amenities, price, slot
  ], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Housing entry added successfully', id: this.lastID });
  });
});

app.get('/api/housing', (req, res) => {
  const query = `
    SELECT id, image, title, details, price, rating, reviews, latitude, longitude FROM housing
  `;
  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows); // Send housing data as JSON response
  });
});

// Endpoint to fetch all users
app.get('/api/users', (req, res) => {
  const query = `
    SELECT id, fullName, email, university, socialStatus, phoneNumber, username FROM users
  `;
  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows); // Send users data as JSON response
  });
});

// Endpoint to fetch all universities
app.get('/api/universities', (req, res) => {
  const query = `
    SELECT name, latitude, longitude FROM universities
  `;
  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows); // Send universities data as JSON response
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});