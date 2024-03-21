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
  try {
    const movieData = req.body;
    console.log("Datos recibidos:", movieData);
    await postMovieService(movieData);
    res.status(201).send({ message: "Película creada exitosamente" });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).send({ message: "Error al procesar la solicitud" });
  }
};

module.exports = {
  getMoviesController: catchAsync(getMoviesController),
  getMovieByIdController: catchAsync(getMovieByIdController),
  getMovieByTitleController: catchAsync(getMovieByTitleController),
  postMovieController: catchAsync(postMovieController),
};
