const { Router } = require("express");

const {
  getMoviesController,
  postMovieController,
} = require("../controllers/moviesController");

const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", validateMovie, postMovieController);

module.exports = moviesRouter;
