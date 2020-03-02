const Sequelize = require('sequelize');
const Tennis = require('./seed.js');
const db = require('./index.js');
const Promise = require('bluebird');

module.exports = {
  readAll: () => {
    // Tennis.findAll().then((allPlayers) => callback(allPlayers));
    return new Promise((resolve, reject) => {
      Tennis.findAll()
        .then((allPlayers) => resolve(allPlayers))
        .catch((err) => reject(err));
    });
  },

  addItem: ({ player, wins }, callback) => {
    // Tennis.create({ player, wins })
    //   .then((result) => callback(null, result))
    //   .catch((err) => callback(err));
    return new Promise((resolve, reject) => {
      Tennis.create({ player, wins })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  },
};
