const db = require("./index.js");
module.exports = {
  readAll: callback => {
    db.query("SELECT * FROM tennis;", (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  addItem: ({ name, amount }, callback) => {
    db.query(
      `INSERT INTO tennis (item_name, amount) VALUES ("${name}",${amount});`,
      err => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      }
    );
  }
};
