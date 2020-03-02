const Sequelize = require('sequelize');

const db = new Sequelize('ball', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('Connection established.');
  })
  .catch((err) => {
    console.error('Unable to establish connection.');
  });

module.exports = db;
