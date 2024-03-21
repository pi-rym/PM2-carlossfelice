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

/***/ "./scripts/renderCarousel.js":
/*!***********************************!*\
  !*** ./scripts/renderCarousel.js ***!
  \***********************************/
/***/ ((module) => {

eval("function carousel() {\r\n  return `\r\n    <div class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"https://i.pinimg.com/564x/66/04/d0/6604d0f9002ad6245c5762ce5f5db3c6.jpg\" class=\"d-block w-100\"\r\n            alt=\"First slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://i.pinimg.com/564x/9a/06/66/9a066699bfe730e67406cadaacbb98ef.jpg\" class=\"d-block w-100\"\r\n            alt=\"Second slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://i.pinimg.com/564x/71/01/db/7101dbf9870cc11cdacb2efbb0770b53.jpg\" class=\"d-block w-100\"\r\n            alt=\"Third slide\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    `;\r\n}\r\n\r\nconst sectionCarousel = document.querySelector(\".section-carousel\");\r\nsectionCarousel.innerHTML = carousel();\r\n\r\nmodule.exports = carousel;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCarousel.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/renderCarousel.js");
/******/ 	
/******/ })()
;