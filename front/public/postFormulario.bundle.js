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

/***/ "./scripts/formulario.js":
/*!*******************************!*\
  !*** ./scripts/formulario.js ***!
  \*******************************/
/***/ (() => {

eval("const genres = [\r\n  \"Action\",\r\n  \"Fantasy\",\r\n  \"Comedy\",\r\n  \"Drama\",\r\n  \"Sci-fi\",\r\n  \"Terror\",\r\n  \"Adventure\",\r\n  \"Romance\",\r\n];\r\n\r\nconst btnSubmit = document.getElementById(\"btnSubmit\");\r\nconst btnCleaner = document.getElementById(\"btnCleaner\");\r\nconst options = document.getElementById(\"options\");\r\nconst title = document.getElementById(\"title\");\r\nconst year = document.getElementById(\"year\");\r\nconst director = document.getElementById(\"director\");\r\nconst duration = document.getElementById(\"duration\");\r\nconst rate = document.getElementById(\"rate\");\r\nconst poster = document.getElementById(\"poster\");\r\n\r\nfunction renderGenres() {\r\n  options.innerText = \"\";\r\n  for (const genre of genres) {\r\n    const input = document.createElement(\"input\");\r\n    const label = document.createElement(\"label\");\r\n    input.type = \"checkbox\";\r\n    input.id = genre;\r\n    input.name = \"genre[]\";\r\n    input.value = genre;\r\n\r\n    label.htmlFor = genre;\r\n    label.textContent = genre;\r\n\r\n    options.appendChild(input);\r\n    options.appendChild(label);\r\n  }\r\n  return options;\r\n}\r\n\r\nfunction validateCheckboxes() {\r\n  const checkBoxes = document.querySelectorAll('input[name=\"genre[]\"]');\r\n\r\n  for (const item of checkBoxes) {\r\n    if (item.checked) {\r\n      item.classList.add(\"selected\");\r\n      return true;\r\n    }\r\n  }\r\n\r\n}\r\nvalidateCheckboxes();\r\n\r\nfunction handlerSubmmit(event) {\r\n  event.preventDefault();\r\n\r\n  const genres = validateCheckboxes();\r\n\r\n  if (\r\n    ![\r\n      title.value,\r\n      year.value,\r\n      director.value,\r\n      duration.value,\r\n      rate.value,\r\n      poster.value,\r\n      genres,\r\n    ].every(Boolean)\r\n  )\r\n    return alert(\"Faltan llenar campos\");\r\n  return alert(\"Pelicula enviada\");\r\n}\r\n\r\nbtnSubmit.addEventListener(\"click\", handlerSubmmit);\r\n\n\n//# sourceURL=webpack://front/./scripts/formulario.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/formulario.js"]();
/******/ 	
/******/ })()
;