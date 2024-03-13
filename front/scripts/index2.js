// //creo cards y cardsRecomended
// const renderCards = require("./renderCards");
// const renderRecommendedMovies = require("./renderRecomendedMovies");

//********************** */
const navBar = require("./renderNavBar");
navBar();
const carousel = require("./renderCarousel");
carousel();
const promo = require("./renderPromociones");
promo();
//****************************************************** */
//url de peliculas
// $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
//     renderCards(data)
//     renderRecommendedMovies(data)
// });
/********************************************************** */
//peliculas temporales
// const tempData = require("./tempData");
// const renderCards = require('./renderCards');
// renderCards(tempData);
// const renderRecomendedMovies = require('./renderRecomendedMovies');
// renderRecomendedMovies(tempData);
//****************************************************************************************** */

//clase asincronismo
// url de peliculas
// npm i axios
//https://students-api.up.railway.app/movies
//https://students-api.2.us-1.fl0.io/movies

const axios = require("axios");
const renderCards = require("./renderCards");

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    const data = response.data; // Guardar los datos de las películas
    renderCards(data); // Llamar a la función renderCards con los datos de las películas
  } catch (err) {
    console.log("Error al obtener películas: ", err.message);
  }
};

//ruta cd front - cd scripts

fetchMovies().then(data => {
  renderCards(data);
});