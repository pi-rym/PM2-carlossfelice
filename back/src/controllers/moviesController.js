const {
  getMoviesService,
  postMovieService,
} = require("../services/moviesService");
const Movie=require("../models/Movie");

const getMoviesController = async (req, res) => {
  try {
    const movies = await getMoviesService();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postMovieController = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    const newMovie = new Movie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });

    await newMovie.save();

    res.status(201).json({ message: "Película creada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getMoviesController,
  postMovieController,
};
