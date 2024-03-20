const axios = require("axios");
const fetchMovies=require("./handler")
const renderRecommendedMovies = require("./renderRecomendedMovies");
const renderCards = require("./renderCards");

const navBar = require("./renderNavBar");
navBar();
const carousel = require("./renderCarousel");
carousel();
const promo = require("./renderPromociones");
promo();

fetchMovies().then((data) => {
    renderCards(data);
    renderRecommendedMovies(data,[5,4,6])
  });


//ruta cd front
//npm run build
//npm start
