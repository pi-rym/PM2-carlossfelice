const fetchMovies=require("./handler")
const renderRecommendedMovies = require("./renderRecomendedMovies");
const renderCards = require("./renderCards");
const navBar = require("./renderNavBar");
const carousel = require("./renderCarousel");
const promo = require("./renderPromociones");

promo();

fetchMovies().then((data) => {
    renderCards(data);
    renderRecommendedMovies(data,[0,1,2])
  });


//ruta cd front
//npm run build
//npm start
