const {
  getMoviesService,
  postMovieService,
  getMovieByIdService,
  getMovieByTitleService,
} = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

const getMoviesController = async (req, res) => {
  const movies = await getMoviesService();
  res.status(200).json(movies);
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const movie = await getMovieByIdService(id);
  res.status(200).json(movie);
};

const getMovieByTitleController = async (req, res) => {
  const { title } = req.query;
  if (title) {
    const movie = await getMovieByTitleService(title);
    return res.status(200).json(movie);
  }
  const movies = await getMoviesService();
  res.status(200).json(movies);
};

const postMovieController = async (req, res) => {
  await postMovieService(req.body)
  res.status(201).send({ message:"Pelicula creada exitosamente"})
};

module.exports = {
  getMoviesController: catchAsync(getMoviesController),
  getMovieByIdController: catchAsync(getMovieByIdController),
  getMovieByTitleController: catchAsync(getMovieByTitleController),
  postMovieController: catchAsync(postMovieController),
};
