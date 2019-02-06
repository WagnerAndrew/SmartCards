const mongoose = require("mongoose");
const db = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/smartcards";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Seeded...'))

let lib1Seed = {
    library: "Web Development",
    cardsID: []
 };

let lib2Seed = {
  library: "Geography",
  cardsID: []
};

let lib3Seed = {
  library: "Music",
  cardsID: []
};

let card1Seed = [
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

  let card2Seed = [
    {
      question: "What is Earth's largest continent?",
      answer: "Asia"
    },
    {
      question: "What is the only sea without any coasts?",
      answer: "The Sargasso Sea"
    },
    {
      question: "What is the driest place on Earth?",
      answer: "McMurdo Dry Valleys in Antactica"
    },
    {
      question: "In what country can you visit Machu Picchu?",
      answer: "Peru"
    }
  ];

  let card3Seed = [
    {
      question: "Who was awarded the very first gold record?",
      answer: 'Perry Como in 1958 for his recording of "Catch a Falling Star"'
    },
    {
      question: "What Depeche Mode song was inspired by Priscilla Presley's book Elvis and Me?",
      answer: '"Personal Jesus"'
    },
    {
      question: "How much pressure do the strings in a grand piano exert on the frame?",
      answer: "Each string has a tension of 160-200 lbs, resulting in a total combined force of up to 30 tons in a concert grand"
    },
    {
      question: "What is the oldest surviving musical instrument?",
      answer: "An ancient bone flute, estimated to be about 43,000-82,000 years old, was found by Dr Ivan Turk, a palaeontologist at the Slovenian Academy of Science at a Neanderthal campsite in Ljubljana, Slovenia, in 1998"
    }
  ];

db.Card
 .deleteMany({})
 .then(() => db.Card.collection.insertMany(card1Seed))
 .then(data => {
  console.log(data.result.n + " cards inserted!");
  for (let key in data.insertedIds) {
   lib1Seed.cardsID.push(data.insertedIds[key]);
  }
  db.Library
   .deleteMany({})
   .then(() => db.Library.collection.insertOne(lib1Seed))
   .then(data => {
    console.log(data.result.n + " library inserted!");
    console.log("Library _ID: ", data.insertedId);
    console.log("Library Data:", data.ops[0]);
    
   })
   .catch(err => {
    console.error(err);
    
   })
})
.catch(err => {
console.error(err);

});


db.Card
 .find({})
 .then(() => db.Card.collection.insertMany(card2Seed))
 .then(data => {
  console.log(data.result.n + " cards inserted!");
  for (let key in data.insertedIds) {
   lib2Seed.cardsID.push(data.insertedIds[key]);
  }
  db.Library
   .find({})
   .then(() => db.Library.collection.insertOne(lib2Seed))
   .then(data => {
    console.log(data.result.n + " library inserted!");
    console.log("Library _ID: ", data.insertedId);
    console.log("Library Data:", data.ops[0]);
   
   })
   .catch(err => {
    console.error(err);
    
   })
})
.catch(err => {
console.error(err);

});



db.Card
 .find({})
 .then(() => db.Card.collection.insertMany(card3Seed))
 .then(data => {
  console.log(data.result.n + " cards inserted!");
  for (let key in data.insertedIds) {
   lib3Seed.cardsID.push(data.insertedIds[key]);
  }
  db.Library
   .find({})
   .then(() => db.Library.collection.insertOne(lib3Seed))
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


