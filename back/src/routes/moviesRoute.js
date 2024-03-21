const { Router } = require("express");
const moviesRouter = Router();
const {
  getMoviesController,
  postMovieController,
} = require("../controllers/moviesController");
const {validateMovieId , validateMovie } = require("../middlewares/validateMovie");
const {
  getMovieByIdService,
  getMovieByTitleService,
} = require("../services/moviesService");

moviesRouter.get("/", getMoviesController);
moviesRouter.get("/:id", validateMovieId, getMovieByIdService);
moviesRouter.get("/:title", getMovieByTitleService);

moviesRouter.post("/", validateMovie, postMovieController);

module.exports = moviesRouter;
