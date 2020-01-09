const db = require("./index.js");
const temp = [
  { name: "porsche", amount: 0 },
  { name: "zerglings", amount: 2 },
  { name: "RTX2070", amount: 1 },
  { name: "forest", amount: 0.5 },
  { name: "hrla", amount: 34 }
];

temp.forEach(({ name, amount }) => {
  db.query(
    `INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount});`
  );
});
