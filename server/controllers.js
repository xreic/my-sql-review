const { readAll, addItem } = require('../database/models.js');
const Promise = require('bluebird');

const controllers = {
  getItems: (req, res) => {
    // readAll((err, result) => {
    //   if (err) {
    //     res
    //       .status(404)
    //       .send(err)
    //       .end();
    //   } else {
    //     res
    //       .status(200)
    //       .send(result)
    //       .end();
    //   }
    // });
    // console.log('We got it');

    return new Promise((resolve, reject) => {
      readAll()
        .then((result) => {
          res
            .status(200)
            .send(result)
            .end();
          console.log('We got it.');
        })
        .catch((err) => {
          res
            .status(200)
            .send(err)
            .end();
          console.log('We did not get it.');
        });
    });
  },

  postItems: (req, res) => {
    // addItem(req.body, (err) => {
    //   if (err) {
    //     res
    //       .status(404)
    //       .send(err)
    //       .end();
    //   } else {
    //     res
    //       .status(201)
    //       .send('Item Added')
    //       .end();
    //   }
    // });
    // console.log('This is your post request speaking');

    return new Promise((resolve, reject) => {
      addItem(req.body)
        .then((result) => {
          res
            .status(200)
            .send(result)
            .end();
          console.log('Post request successful.');
        })
        .catch((err) => {
          res
            .status(200)
            .send(err)
            .end();
          console.log('Post request unsuccessful.');
        });
    });
  },
};

module.exports = controllers;
