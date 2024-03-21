const mongoose = require("mongoose");
/**get */
const validateMovieId = (req, res, next) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    next({ message: "Id no es valido", statusCode: 400 });
  }
};

/**post */
const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (![title, year, director, duration, genre, rate, poster].every(Boolean))
    return res.status(400).json({ message: "Faltan datos por completar" });
  next();
};

module.exports = { validateMovieId, validateMovie };
