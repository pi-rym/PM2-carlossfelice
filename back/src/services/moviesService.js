const Movie=require("../models/Movie");

const getMoviesService = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error("Error al obtener las películas");
  }
};
const postMovieService = async ({ title, year, director, duration, genre, rate, poster }) => {
  try {
    const newMovie = await Movie.create({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster
    });
    return newMovie;
  } catch (error) {
    throw new Error("Error al crear la película");
  }
};
module.exports={
  getMoviesService,
  postMovieService
}