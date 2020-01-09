const { readAll, addItem } = require("../database/models.js");

const controllers = {
  getItems: (req, res) => {
    readAll((err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    });
    console.log("We got it");
  },
  postItems: (req, res) => {
    // TODO
    addItem(req.body, err => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send("item added");
      }
    });
    console.log("This is your post request speaking");
  }
};

module.exports = controllers;
