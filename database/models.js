const db = require('./index.js');

module.exports = {
  readAll: (callback) => {
    db.query('SELECT * FROM tennis;', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  addItem: ({ player, wins }, callback) => {
    db.query(
      `INSERT INTO tennis (player, wins) VALUES ("${player}",${wins});`,
      (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      }
    );
  },
};
