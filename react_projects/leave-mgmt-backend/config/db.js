const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'leave_mgmt_system'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB!');
});
module.exports = connection;
