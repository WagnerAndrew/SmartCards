const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codecards"
);

const cardSeed = [
  {
    question: "What does 2+2 equal?",
    answer: "4",
    guess: false
  },
  {
    question: "Apple or orange today?",
    answer: "Apple",
    guess: false
  },
  {
    question: "Sleep or study?",
    answer: "Sleep",
    guess: false
  },
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
