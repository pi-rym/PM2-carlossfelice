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

/***/ "./scripts/validarFormulario.js":
/*!**************************************!*\
  !*** ./scripts/validarFormulario.js ***!
  \**************************************/
/***/ ((module) => {

eval("function validarFormulario() {\r\n  const title = document.getElementById('title').value.trim();\r\n  const year = document.getElementById('year').value.trim();\r\n  const director = document.getElementById('director').value.trim();\r\n  const duration = document.getElementById('duration').value.trim();\r\n  const genre = document.getElementById('genre').value.trim();\r\n  const rate = document.getElementById('rate').value.trim();\r\n  const poster = document.getElementById('poster').value.trim();\r\n\r\n  if (title === '') {\r\n    alert('Por favor ingrese el título de la película.');\r\n    return false;\r\n  }\r\n\r\n  if (isNaN(parseInt(year)) || parseInt(year) < 1900 || parseInt(year) > 2025) {\r\n    alert('Por favor ingrese un año válido (entre 1900 y 2025).');\r\n    return false;\r\n  }\r\n\r\n  if (director === '') {\r\n    alert('Por favor ingrese el director de la película.');\r\n    return false;\r\n  }\r\n\r\n  if (isNaN(parseInt(duration)) || parseInt(duration) < 1) {\r\n    alert('Por favor ingrese la duración de la película en minutos.');\r\n    return false;\r\n  }\r\n\r\n  if (genre === '') {\r\n    alert('Por favor ingrese al menos un género.');\r\n    return false;\r\n  }\r\n\r\n  if (isNaN(parseFloat(rate)) || parseFloat(rate) < 0 || parseFloat(rate) > 10) {\r\n    alert('Por favor ingrese una calificación válida (entre 0 y 10).');\r\n    return false;\r\n  }\r\n\r\n  if (poster === '') {\r\n    alert('Por favor ingrese la URL del póster de la película.');\r\n    return false;\r\n  }\r\n\r\n  return true;\r\n}\r\n\r\nmodule.exports = validarFormulario;\n\n//# sourceURL=webpack://front/./scripts/validarFormulario.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/validarFormulario.js");
/******/ 	
/******/ })()
;