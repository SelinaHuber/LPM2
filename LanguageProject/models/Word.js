const mongoose = require("mongoose");
const Schema = mongoose.Schema



const wordSchema = new Schema({
  searchedWord: String,
  translatedWord: String,
  gerSentence: String,
  engSentence: String,
  ipaWord: String,
  comment: String,
  owner : [{
    User: Schema.Types.ObjectId
  }]
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;