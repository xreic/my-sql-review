const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '1234',
  database: 'ball',
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to the database.');
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = db;
