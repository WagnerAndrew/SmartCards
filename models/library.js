const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  library: { type: String, required: true },
  cardsID: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card"
    }
  ]
})

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;
