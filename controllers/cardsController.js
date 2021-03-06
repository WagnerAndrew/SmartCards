const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Card
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Card
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Card
      .create(req.body)
      .then(dbModel => {
        return db.Library.findOneAndUpdate({ _id: req.body.library }, { $push: {cardsID: dbModel._id} }, { new: true })
      .then (dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      })
  },
  update: function(req, res) {
    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Card
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
