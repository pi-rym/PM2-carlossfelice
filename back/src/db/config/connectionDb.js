require("dotenv").config();

const mongoose = require("mongoose");

const URI = process.env.URI;

const connectionDb = async () => {
  await mongoose.connect(URI);
};

module.exports = connectionDb;
