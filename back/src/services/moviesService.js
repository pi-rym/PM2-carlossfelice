const Movie = require("../db/models/Movie");

const getMoviesService = async () => {
  try {
    const movies = await Movie.find()
    return movies;
  } catch (error) {
    throw new Error("Error al obtener las películas", error);
  }
};

const getMovieByIdService = async (id) => {
  try {
    const movie = await Movie.findById(id);
    return movie;
  } catch (error) {
    throw new Error("Error al obtener la película por ID", error);
  }
};

const getMovieByTitleService = async (title) => {
  try {
    const movie = await Movie.findOne({ title });
    return movie;
  } catch (error) {
    throw new Error("Error al obtener la película por título", error);
  }
};

const postMovieService = async (movie) => {
  try {
    const newMovie = await Movie.create(movie);
    return newMovie;
  } catch (error) {
    throw new Error("Error al crear la película", error);
  }
};

module.exports = {
  getMoviesService,
  getMovieByIdService,
  getMovieByTitleService,
  postMovieService
};
