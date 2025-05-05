const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set up MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Sample route
app.get('/', (req, res) => {
  res.send('Leave Management API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
