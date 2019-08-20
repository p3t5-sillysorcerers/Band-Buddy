const db = require("../models");

// Defining methods for the jamController
module.exports = {
  findAll: function(req, res) {
    db.Jams
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req);
    db.Jams
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    console.log(req.params.userName)
    db.Jams
      .findOne({userName: `${req.params.userName}`})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
