const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codecards"
);

const cardSeed = [
  {
    question: "What does each letter of the MERN acronym represent?",
    answer: "MongoDB, Express, React, and Node"
  },
  {
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript run-time environment that executes JavaScript code outside of a browser"
  },
  {
    question: "ES6/ES2015 is the sixth major release of the ECMAScript language specification which is commonly known as ___?",
    answer: "JavaScript"
  },
  {
    question: "What is the primary purpose of a transpiling tool like Babel?",
    answer: "To convert newer unsupported JS to JS the browser understands"
  },
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then ( (results) =>
   {console.log ("Results is: ", results)
    db.Library.findOneAndUpdate({library: "Web Development" }, { $push: { cardsID: results.insertedIds }}, { new: true })})
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
