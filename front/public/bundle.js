/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index2.js":
/*!***************************!*\
  !*** ./scripts/index2.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//peliculas temporales\r\nconst temp = __webpack_require__(/*! ./tempData */ \"./scripts/tempData.js\");\r\n//creo cards y cardsRecomended\r\nconst renderCards = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\");\r\nconst renderRecommendedMovies = __webpack_require__(/*! ./renderRecomendedMovies */ \"./scripts/renderRecomendedMovies.js\");\r\n//****************************************************** */\r\n//******************************************************************************************* */\r\n//url de peliculas\r\n// $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {\r\n//     renderCards(data)\r\n//     renderRecommendedMovies(data)\r\n// });\r\n\r\nrenderCards(temp);\r\nrenderRecommendedMovies(temp);\r\n//****************************************************************************************** */\r\n\r\nconst carousel=__webpack_require__(/*! ./renderCarousel */ \"./scripts/renderCarousel.js\")\r\ncarousel();\r\n\r\nconst promociones=__webpack_require__(/*! ./renderPromociones */ \"./scripts/renderPromociones.js\")\r\npromociones();\r\n\r\nconst navBar=__webpack_require__(/*! ./renderNavBar */ \"./scripts/renderNavBar.js\")\r\nnavBar();\n\n//# sourceURL=webpack://front/./scripts/index2.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\n/*\r\nmovie:{title,year,director,duration,genre,rate,poster,description}\r\n*/\r\nconst moviesContainer = document.getElementById(\"containerCards\");\r\n\r\nfunction renderCards (data){\r\n  data.forEach((movie) => {\r\n    //div card\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n    //div card-body\r\n    const cardBody = document.createElement(\"div\");\r\n    cardBody.classList.add(\"card-body\");\r\n    //card-image\r\n    const poster = document.createElement(\"img\");\r\n    poster.classList.add(\"card-image\");\r\n    poster.src = movie.poster;\r\n    //card-title\r\n    const title = document.createElement(\"h3\");\r\n    title.classList.add(\"card-title\");\r\n    title.innerHTML = movie.title;\r\n    //card-text\r\n    const year = document.createElement(\"p\");\r\n    year.classList.add(\"card-text\");\r\n    year.innerHTML = movie.year;\r\n\r\n    card.appendChild(poster);\r\n    card.appendChild(title);\r\n    card.appendChild(year);\r\n    containerCards.appendChild(card);\r\n  });\r\n};\r\n\r\nmodule.exports = renderCards;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ }),

/***/ "./scripts/renderCarousel.js":
/*!***********************************!*\
  !*** ./scripts/renderCarousel.js ***!
  \***********************************/
/***/ ((module) => {

eval("function carousel() {\r\n  return `\r\n    <div class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"https://i.pinimg.com/564x/66/04/d0/6604d0f9002ad6245c5762ce5f5db3c6.jpg\" class=\"d-block w-100\"\r\n            alt=\"First slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://i.pinimg.com/564x/9a/06/66/9a066699bfe730e67406cadaacbb98ef.jpg\" class=\"d-block w-100\"\r\n            alt=\"Second slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://i.pinimg.com/564x/71/01/db/7101dbf9870cc11cdacb2efbb0770b53.jpg\" class=\"d-block w-100\"\r\n            alt=\"Third slide\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    `;\r\n}\r\n\r\nconst sectionCarousel = document.querySelector(\".section-carousel\");\r\nsectionCarousel.innerHTML = carousel();\r\n\r\nmodule.exports = carousel;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCarousel.js?");

/***/ }),

/***/ "./scripts/renderNavBar.js":
/*!*********************************!*\
  !*** ./scripts/renderNavBar.js ***!
  \*********************************/
/***/ ((module) => {

eval("function navbar(links) {\r\n  if (!Array.isArray(links)) {\r\n    console.error(\"La variable 'links' debe ser un array.\");\r\n    return \"\";\r\n  }\r\n\r\n  return `\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand me-auto\" href=\"#\">CinemaMaster</a>\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\"\r\n          aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\">\r\n            <!-- Icon de hamburguesa de Font Awesome -->\r\n            <i class=\"fas fa-bars\"></i>\r\n          </span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n          <div class=\"navbar-nav ml-auto\">\r\n            ${links.map(link => `<a class=\"nav-link\" href=\"${link.url}\">${link.text}</a>`).join('')}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  `;\r\n}\r\n\r\nconst links = [\r\n  { url: \"../index.html\", text: \"Inicio\" },\r\n  { url: \"../pages/peliculas.html\", text: \"Peliculas\" },\r\n  { url: \"../pages/series.html\", text: \"Series\" },\r\n  { url: \"../pages/generos.html\", text: \"Generos\" },\r\n  { url: \"../pages/sobreNosotros.html\", text: \"SobreNosotros\" }\r\n];\r\n\r\nconst sectionNavbar = document.querySelector(\".section-navBar\");\r\nsectionNavbar.innerHTML = navbar(links);\r\n\r\nmodule.exports = navbar;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderNavBar.js?");

/***/ }),

/***/ "./scripts/renderPromociones.js":
/*!**************************************!*\
  !*** ./scripts/renderPromociones.js ***!
  \**************************************/
/***/ ((module) => {

eval("function promociones(){\r\n    return `\r\n    \r\n    \r\n<div class=\"container\">\r\n<h2 class=\"section-title\">¡Aprovecha nuestras promociones!</h2>\r\n<div class=\"promociones-grid\">\r\n  <div class=\"promocion\">\r\n    <img src=\"https://i.pinimg.com/564x/9f/05/2a/9f052aeaaae3e0a2c07425d99a5cc9ef.jpg\" alt=\"Promoción 1\"\r\n      class=\"promocion-img\">\r\n    <h3 class=\"promocion-title\">Descuento en Combo de Palomitas y Refresco</h3>\r\n    <p class=\"promocion-description\">Compra un combo de palomitas y refresco y obtén un 20% de descuento.</p>\r\n  </div>\r\n  <div class=\"promocion\">\r\n    <img src=\"https://i.pinimg.com/564x/92/70/11/92701158468cddca162421f1588fda72.jpg\" alt=\"Promoción 2\"\r\n      class=\"promocion-img\">\r\n    <h3 class=\"promocion-title\">2x1 en Entradas los Martes</h3>\r\n    <p class=\"promocion-description\">Ven los martes y disfruta de nuestras películas con la promoción 2x1 en\r\n      entradas.</p>\r\n  </div>\r\n  <div class=\"promocion\">\r\n    <img src=\"https://i.pinimg.com/564x/42/db/77/42db77ca69c021e1af07caac9f159b2a.jpg\" alt=\"Promoción 3\"\r\n      class=\"promocion-img\">\r\n    <h3 class=\"promocion-title\">Estreno Exclusivo con Descuento</h3>\r\n    <p class=\"promocion-description\">Obtén un descuento especial en el estreno exclusivo de la semana presentando\r\n      tu boleto de cine.</p>\r\n  </div>\r\n\r\n  <div class=\"promocion\">\r\n    <img src=\"https://i.pinimg.com/564x/f5/e3/91/f5e3914ed16efc0595f21621c6c2f98a.jpg\" alt=\"Promoción 4\" class=\"promocion-img\">\r\n    <h3 class=\"promocion-title\">Descuento en Combo Familiar</h3>\r\n    <p class=\"promocion-description\">Disfruta de un 20% de descuento en nuestro combo familiar que incluye\r\n      palomitas, bebidas y snacks para toda la familia.</p>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n    `\r\n}\r\nconst sectionPromociones = document.querySelector(\".section-promociones\");\r\nsectionPromociones.innerHTML=promociones()\r\nmodule.exports=promociones;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderPromociones.js?");

/***/ }),

/***/ "./scripts/renderRecomendedMovies.js":
/*!*******************************************!*\
  !*** ./scripts/renderRecomendedMovies.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\r\nconst renderRecommendedMovies = (data) => {\r\n    const recommendedMovieIndexes = [5,4,6]; \r\n    // const recommendedMovieIndexes = [0]; \r\n    const recommendedMovies = data.filter((movie, index) => recommendedMovieIndexes.includes(index));\r\n\r\n    const containerFavoriteFilms = document.getElementById('containerFavoriteFilms');\r\n    recommendedMovies.forEach(movie => {\r\n        containerFavoriteFilms.innerHTML += createMovieCard2(movie);\r\n    });\r\n}\r\n\r\n// Function to create HTML for a movie card\r\nfunction createMovieCard2 (movie){\r\n    return `\r\n        <div class=\"card\">\r\n            <img class=\"card-image\" src=\"${movie.poster}\" alt=\"${movie.title}\">\r\n            <h3 class=\"card-title\">${movie.title}</h3>\r\n            <p class=\"card-text\">${movie.year}</p>\r\n        </div>\r\n    `;\r\n}\r\nmodule.exports=renderRecommendedMovies;\n\n//# sourceURL=webpack://front/./scripts/renderRecomendedMovies.js?");

/***/ }),

/***/ "./scripts/tempData.js":
/*!*****************************!*\
  !*** ./scripts/tempData.js ***!
  \*****************************/
/***/ ((module) => {

eval("const tempData = [\r\n  {\r\n    title: \"Guardians of the Galaxy Vol. 2\",\r\n    year: 2017,\r\n    director: \"James Gunn\",\r\n    duration: \"2h 16min\",\r\n    genre: [\"Action\", \"Adventure\", \"Comedy\"],\r\n    rate: 7.7,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg\",\r\n  },\r\n  {\r\n    title: \"Star Wars: Episode IV - A New Hope\",\r\n    year: 1977,\r\n    director: \"George Lucas\",\r\n    duration: \"2h 1min\",\r\n    genre: [\"Action\", \"Adventure\", \"Fantasy\", \"Sci-Fi\"],\r\n    rate: 8.7,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg\",\r\n  },\r\n  {\r\n    title: \"The Lord of the Rings: The Fellowship of the Ring\",\r\n    year: 2001,\r\n    director: \"Peter Jackson\",\r\n    duration: \"2h 58min\",\r\n    genre: [\"Action\", \"Adventure\", \"Drama\", \"Fantasy\"],\r\n    rate: 8.8,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg\",\r\n  },\r\n\r\n  {\r\n    title: \"The Godfather\",\r\n    year: 1972,\r\n    director: \"Francis Ford Coppola\",\r\n    duration: \"2h 55min\",\r\n    genre: [\"Crime\", \"Drama\"],\r\n    rate: 9.2,\r\n    poster: \"https://i.pinimg.com/564x/ed/ff/9c/edff9c9654e400a894303b4e34049b53.jpg\",\r\n    description: \"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.\"\r\n  },\r\n  {\r\n    title: \"The Dark Knight\",\r\n    year: 2008,\r\n    director: \"Christopher Nolan\",\r\n    duration: \"2h 32min\",\r\n    genre: [\"Action\", \"Crime\", \"Drama\"],\r\n    rate: 9.0,\r\n    poster: \"https://i.pinimg.com/564x/83/9a/04/839a046d5787aa573073ae170a07ed4a.jpg\",\r\n    description: \"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.\"\r\n  },\r\n  {\r\n    title: \"Pulp Fiction\",\r\n    year: 1994,\r\n    director: \"Quentin Tarantino\",\r\n    duration: \"2h 34min\",\r\n    genre: [\"Crime\", \"Drama\"],\r\n    rate: 8.9,\r\n    poster: \"https://i.pinimg.com/564x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg\",\r\n    description: \"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.\"\r\n  },\r\n  {\r\n    title: \"Interstellar\",\r\n    year: 2014,\r\n    director: \"Christopher Nolan\",\r\n    duration: \"2h 49min\",\r\n    genre: [\"Adventure\", \"Drama\", \"Sci-Fi\"],\r\n    rate: 8.6,\r\n    poster: \"https://i.pinimg.com/564x/1c/63/d2/1c63d274fa70ffaa88b4f9eba86f0e0e.jpg\",\r\n    description: \"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.\"\r\n  },\r\n  {\r\n    title: \"Inception\",\r\n    year: 2010,\r\n    director: \"Christopher Nolan\",\r\n    duration: \"2h 28min\",\r\n    genre: [\"Action\", \"Adventure\", \"Sci-Fi\"],\r\n    rate: 8.8,\r\n    poster: \"https://i.pinimg.com/564x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg\",\r\n    description: \"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.\"\r\n  }\r\n];\r\nmodule.exports=tempData;\n\n//# sourceURL=webpack://front/./scripts/tempData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index2.js");
/******/ 	
/******/ })()
;