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

/***/ "./scripts/renderNavBar.js":
/*!*********************************!*\
  !*** ./scripts/renderNavBar.js ***!
  \*********************************/
/***/ (() => {

eval("\r\n\r\nfunction navbar(links) {\r\n  if (!Array.isArray(links)) {\r\n    console.error(\"La variable 'links' debe ser un array.\");\r\n    return \"\";\r\n  }\r\n\r\n  return `\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand me-auto\" href=\"#\">CinemaMaster</a>\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\"\r\n          aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\">\r\n            <!-- Icon de hamburguesa de Font Awesome -->\r\n            <i class=\"fas fa-bars\"></i>\r\n          </span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n          <div class=\"navbar-nav ml-auto\">\r\n            ${links.map(link => `<a class=\"nav-link\" href=\"${link.url}\">${link.text}</a>`).join('')}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  `;\r\n}\r\n\r\nconst links = [\r\n  { url: \"../index.html\", text: \"Inicio\" },\r\n  { url: \"../pages/peliculas.html\", text: \"Peliculas\" },\r\n  { url: \"../pages/series.html\", text: \"Series\" },\r\n  { url: \"../pages/generos.html\", text: \"Generos\" },\r\n  { url: \"../pages/sobreNosotros.html\", text: \"SobreNosotros\" }\r\n];\r\n\r\nconst sectionNavbar = document.querySelector(\".section-navBar\");\r\nsectionNavbar.innerHTML = navbar(links);\r\n\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/renderNavBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/renderNavBar.js"]();
/******/ 	
/******/ })()
;