const db = require('./index.js');

const players = [
  { player: 'Bobby', wins: 42 },
  { player: 'Timmy', wins: 14 },
  { player: 'Johnson', wins: 26 },
  { player: 'Jack', wins: 30 },
];

players.forEach(({ player, wins }) => {
  db.query(`INSERT INTO tennis (player, wins) VALUES ("${player}", ${wins});`);
});
