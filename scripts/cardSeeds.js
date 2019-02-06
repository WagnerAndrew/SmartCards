const mongoose = require("mongoose");
const db = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/codecards";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Seeded...'))

let libSeed = {
    library: "Seed Library",
    cardsID: []
 };

let cardSeed = [
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
    }
  ];

db.Card
 .deleteMany({})
 .then(() => db.Card.collection.insertMany(cardSeed))
 .then(data => {
  console.log(data.result.n + " cards inserted!");
  for (let key in data.insertedIds) {
   libSeed.cardsID.push(data.insertedIds[key]);
  }
  db.Library
   .deleteMany({})
   .then(() => db.Library.collection.insertOne(libSeed))
   .then(data => {
    console.log(data.result.n + " library inserted!");
    console.log("Library _ID: ", data.insertedId);
    console.log("Library Data:", data.ops[0]);
    process.exit(0);
   })
   .catch(err => {
    console.error(err);
    process.exit(1);
   })
})
.catch(err => {
console.error(err);
process.exit(1);
});

