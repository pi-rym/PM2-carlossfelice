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

/***/ "./scripts/renderRecomendedMovies.js":
/*!*******************************************!*\
  !*** ./scripts/renderRecomendedMovies.js ***!
  \*******************************************/
/***/ ((module) => {

eval("const renderRecommendedMovies = (data, recommendedMovieIndexes) => {\r\n    const recommendedMovies = data.filter((movie, index) => recommendedMovieIndexes.includes(index));\r\n\r\n    const containerFavoriteFilms = document.getElementById('containerFavoriteFilms');\r\n    recommendedMovies.forEach(movie => {\r\n        containerFavoriteFilms.innerHTML += createMovieCard2(movie);\r\n    });\r\n}\r\n\r\n// Function to create HTML for a movie card\r\nfunction createMovieCard2 (movie){\r\n    return `\r\n        <div class=\"card\">\r\n            <img class=\"card-image\" src=\"${movie.poster}\" alt=\"${movie.title}\">\r\n            <h3 class=\"card-title\">${movie.title}</h3>\r\n            <p class=\"card-text\">${movie.year}</p>\r\n        </div>\r\n    `;\r\n}\r\n\r\nmodule.exports = renderRecommendedMovies;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderRecomendedMovies.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/renderRecomendedMovies.js");
/******/ 	
/******/ })()
;