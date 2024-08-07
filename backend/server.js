const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appends the extension of the original file
  }
});


const upload = multer({ storage });

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
    password TEXT,
    profilePicture TEXT
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
    password TEXT,
    profilePicture TEXT
  )`);
  db.run(`
    CREATE TABLE IF NOT EXISTS housing (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      details TEXT,
      price TEXT,
      rating REAL,
      reviews INTEGER,
      latitude REAL,
      longitude REAL
    )
  `);

  // Create universities table and insert predefined coordinates
  db.run(`
    CREATE TABLE IF NOT EXISTS universities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      latitude REAL,
      longitude REAL
    )
  `);

  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    senderId INTEGER,
    receiverId INTEGER,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES students(id),
    FOREIGN KEY (receiverId) REFERENCES landlords(id)
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

  db.run(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    housingId INTEGER,
    rating REAL,
    comment TEXT,
    reviewedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES students(id),
    FOREIGN KEY (housingId) REFERENCES housing(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    housingId INTEGER,
    reservationDate DATE,
    reservedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT,
    FOREIGN KEY (userId) REFERENCES students(id),
    FOREIGN KEY (housingId) REFERENCES housing(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    housingId INTEGER,
    scheduleDate DATE,
    status TEXT,
    FOREIGN KEY (userId) REFERENCES students(id),
    FOREIGN KEY (housingId) REFERENCES housing(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS leasing_options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    optionName TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS accommodation_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    typeName TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS amenities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amenityName TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS housing_status (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    statusName TEXT
  )`);
}

app.post('/api/upload-profile-picture', upload.single('profilePicture'), (req, res) => {
  const userId = req.body.userId;
  const table = req.body.isLandlord ? 'landlords' : 'students'; // Correct table name determination

  const profilePicture = req.file.path;

  db.run(`UPDATE ${table} SET profilePicture = ? WHERE id = ?`, [profilePicture, userId], function(err) {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Profile picture updated successfully', profilePicture });
  });
});



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

    const query = `INSERT INTO students (fullName, email, university, socialStatus, phone, password, latitude, longitude, profilePicture) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [fullName, email, university, socialStatus, phone, hashedPassword, latitude, longitude, profilePicture], function (err) {
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

    const query = `INSERT INTO landlords (fullName, email, phone, password, profilePicture) 
                     VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [fullName, email, phone, hashedPassword, profilePicture], function (err) {
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

// Search users endpoint
app.get('/api/users/search', (req, res) => {
  const { query } = req.query;

  const searchQuery = `
    SELECT id, fullName, email
    FROM students
    WHERE fullName LIKE '%' || ? || '%' 
    UNION 
    SELECT id, fullName, email
    FROM landlords
    WHERE fullName LIKE '%' || ? || '%'
  `;

  db.all(searchQuery, [query, query], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ users: rows });
  });
});


// Search messages endpoint
app.get('/api/messages/:chatId/:isLandlord', (req, res) => {
  const { chatId, isLandlord } = req.params;
  const senderTable = isLandlord === 'true' ? 'landlords' : 'students';
  const receiverTable = isLandlord === 'true' ? 'students' : 'landlords';

  const searchQuery = `
    SELECT messages.*, senders.fullName AS senderName, receivers.fullName AS receiverName
    FROM messages
    JOIN ${senderTable} AS senders ON messages.senderId = senders.id
    JOIN ${receiverTable} AS receivers ON messages.receiverId = receivers.id
    WHERE (senders.id = ? OR receivers.id = ?)
    ORDER BY timestamp;
  `;

  db.all(searchQuery, [chatId, chatId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ messages: rows });
  });
});



// Send message endpoint
app.post('/api/messages/send', (req, res) => {
  const { senderId, receiverId, message, isLandlordSender } = req.body;
  const senderTable = isLandlordSender ? 'landlords' : 'students';
  const receiverTable = isLandlordSender ? 'students' : 'landlords';

  // Insert message
  const insertQuery = `INSERT INTO messages (senderId, receiverId, message) VALUES (?, ?, ?)`;
  db.run(insertQuery, [senderId, receiverId, message], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Message sent successfully', id: this.lastID });
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
