const {Router} =require("express");
const moviesController=require("../controllers/moviesController")
// const validateMovie = require("../middlewares/validateMovie");

const movieRoute=Router()

movieRoute.get("/",moviesController);
// movieRouter.post("/",validateMovie,movieController.createMovie)
module.exports=movieRoute;