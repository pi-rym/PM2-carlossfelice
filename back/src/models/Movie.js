const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: Number,
  genre: [String],
  rate: Number,
  poster: String
});
const Movie = model("Movie", movieSchema);
module.exports = Movie;
