const Sequelize = require('sequelize');
const Tennis = require('./seed.js');
const db = require('./index.js');

module.exports = {
  readAll: (callback) => {
    Tennis.findAll().then((allPlayers) => callback(allPlayers));
  },

  addItem: ({ player, wins }, callback) => {
    Tennis.create({ player, wins })
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
  },
};
