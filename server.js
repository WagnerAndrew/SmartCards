const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path =  require('path');

const app = express();
const PORT = process.env.PORT || 3001
;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smartcards");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
