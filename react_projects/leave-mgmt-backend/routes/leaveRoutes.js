const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all leave requests
router.get('/', (req, res) => {
  db.query('SELECT * FROM leave_requests', (err, results) => {
    if (err) {
      console.error('Error fetching leave requests:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

module.exports = router;
