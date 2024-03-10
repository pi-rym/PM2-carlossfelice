//peliculas temporales
const temp = require("./tempData");
//creo cards y cardsRecomended
const renderCards = require("./renderCards");
const renderRecommendedMovies = require("./renderRecomendedMovies");
//****************************************************** */
//******************************************************************************************* */
//url de peliculas
// $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
//     renderCards(data)
//     renderRecommendedMovies(data)
// });

renderCards(temp);
renderRecommendedMovies(temp);
//****************************************************************************************** */

const carousel=require("./renderCarousel")
carousel();

const promociones=require("./renderPromociones")
promociones();

const navBar=require("./renderNavBar")
navBar();