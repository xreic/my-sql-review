const Sequelize = require('sequelize');
const db = require('./index.js');

const players = [
  { player: 'Bobby', wins: 42 },
  { player: 'Timmy', wins: 14 },
  { player: 'Johnson', wins: 26 },
  { player: 'Jack', wins: 30 },
];

// db.sync({ force: true })
//   .then(() => console.log('Prior tables dropped.'))
//   .catch(() => console.err('Prior tables not dropped.'));

const Tennis = db.define(
  'tennis',
  {
    player: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    wins: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

players.forEach(({ player, wins }) => {
  Tennis.create({ player, wins }).then((result) => console.log(result));
});

module.exports = Tennis;
