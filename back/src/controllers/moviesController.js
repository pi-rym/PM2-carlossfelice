const moviesService = require("../services/moviesService");


const moviesController = async (req, res) => {
  
  try {

    const response = await moviesService.getAllFilms();
    res.status(200).json(response);

  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = moviesController;
