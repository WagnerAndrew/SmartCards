const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  guess: Boolean
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
