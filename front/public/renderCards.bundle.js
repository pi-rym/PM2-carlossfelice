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

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("/*\r\nmovie:{title,year,director,duration,genre,rate,poster,description}\r\n*/\r\n\r\nfunction renderCards(data) {\r\n\r\n  const moviesContainer = document.getElementById(\"containerCards\");\r\n\r\n  data.forEach((movie) => {\r\n    // div card\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\"); // Agrega la clase \"card\"\r\n\r\n    // div card-body\r\n    const cardBody = document.createElement(\"div\");\r\n    cardBody.classList.add(\"card-body\");\r\n\r\n    // card-image\r\n    const poster = document.createElement(\"img\");\r\n    poster.classList.add(\"card-image\");\r\n    poster.src = movie.poster;\r\n\r\n    // card-title\r\n    const title = document.createElement(\"h3\");\r\n    title.classList.add(\"card-title\");\r\n    title.innerHTML = movie.title;\r\n\r\n    // card-text\r\n    const year = document.createElement(\"p\");\r\n    year.classList.add(\"card-text\");\r\n    year.innerHTML = `<strong>Año:</strong> ${movie.year}`;\r\n\r\n    const director = document.createElement(\"p\");\r\n    director.classList.add(\"card-text\");\r\n    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;\r\n\r\n    const duration = document.createElement(\"p\");\r\n    duration.classList.add(\"card-text\");\r\n    duration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;\r\n\r\n    const genre = document.createElement(\"p\");\r\n    genre.classList.add(\"card-text\");\r\n    genre.innerHTML = `<strong>Género:</strong> ${movie.genre}`;\r\n\r\n    const rate = document.createElement(\"p\");\r\n    rate.classList.add(\"card-text\");\r\n    rate.innerHTML = `<strong>Rate:</strong> ${movie.rate}`;\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.classList.add(\"card-text\");\r\n    description.innerHTML = `<strong>Descripción:</strong> ${movie.description}`;\r\n\r\n    card.appendChild(poster);\r\n    card.appendChild(title);\r\n    card.appendChild(year);\r\n    card.appendChild(director);\r\n    card.appendChild(duration);\r\n    card.appendChild(genre);\r\n    card.appendChild(rate);\r\n    card.appendChild(description);\r\n\r\n    moviesContainer.appendChild(card);\r\n  });\r\n}\r\n\r\nmodule.exports = renderCards;\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/renderCards.js");
/******/ 	
/******/ })()
;