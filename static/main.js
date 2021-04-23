/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/gitContribute.js":
/*!************************************!*\
  !*** ./static/js/gitContribute.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test() {\n    return renderGitContribute();\n}\n\nconst canvas = document.getElementById('canvas-kusa');\nconst ctx = canvas.getContext('2d');\nconst a = 2 * Math.PI / 6;\nconst pathJson = 'js/contribute.json';\nconst r = 30;\nconst offsetX = 3;\nconst offsetY = 3;\nconst tileCountX = 14;\nconst tileCountY = 7;\n\nfunction renderGitContribute() {\n    return loadJSON(function(json) {\n        let contributes = json.Contribute.reverse();\n        let cs = [];\n        let ds = [];\n\n        for (let i = 0; i < tileCountX * tileCountY; i++) {\n            var count = Number(contributes[i].count);\n            var date = contributes[i].data;\n            cs.push(count);\n            ds.push(date);\n        }\n        cs = cs.reverse();\n        ds = ds.reverse();\n\n        let originX = r;\n        let originY = r;\n        let dx = r * Math.sin(a);\n        for (let cx = 0; cx < tileCountX; cx++) {\n            for (let cy = 0; cy < tileCountY; cy++) {\n                let idx = cx * tileCountY + cy;\n                let cc = cs[idx];\n                let x = originX + offsetX + 2 * dx * cx;\n                x = cy % 2 == 0 ? x : x + dx;\n                let y = originY + offsetY + (r + r * Math.cos(a)) * cy;\n                let flag1 = Math.random() > 0.5;\n\n\n                if (cc === 0 && flag1) {\n                    drawHexagon1(x, y, 'black');\n                } else if (cc === 0) {\n\n                } else if (cc <= 3) {\n                    drawHexagon2(x, y, 'gold');\n                } else if (cc <= 5) {\n                    drawHexagon3(x, y, 'orange');\n                } else {\n                    drawHexagon1(x, y, 'red');\n                }\n\n                if (cc !== 0 || flag1) {\n                    let c = Math.max(cx * cx * 5, 1);\n                    let outline_color = 'rgb(' + c + ',' + c + ',' + c + ')';\n                    drawOutline(x, y, outline_color);\n                }\n            }\n        }\n    });\n}\n\n\n\nfunction drawOutline(x, y, color) {\n    ctx.lineWidth = 1.0;\n    ctx.strokeStyle = color;\n    ctx.beginPath();\n    for (var i = 0; i < 6; i++) {\n        ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));\n    }\n    ctx.closePath();\n    ctx.stroke();\n}\n\nfunction drawHexagon1(x, y, color) {\n    ctx.fillStyle = color;\n    ctx.beginPath();\n    for (var i = 0; i < 6; i++) {\n        ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));\n    }\n    ctx.closePath();\n    ctx.fill();\n}\n\nfunction drawHexagon2(x, y, color) {\n    drawHexagon1(x, y, 'black')\n    ctx.fillStyle = color;\n    let dr = r / 3;\n    ctx.beginPath();\n    for (var j = 0; j < 6; j++) {\n        ctx.lineTo(x + dr * Math.sin(a * j), y + dr * Math.cos(a * j));\n    }\n    ctx.closePath();\n    ctx.fill();\n}\n\nfunction drawHexagon3(x, y, color) {\n    ctx.lineWidth = 2.0;\n    ctx.strokeStyle = color;\n    ctx.fillStyle = 'black'\n    let rs = [30, 20, 10, 5];\n    for (var i = 0; i < 4; i++) {\n        let dr = rs[i];\n        ctx.beginPath();\n        for (var j = 0; j < 6; j++) {\n            ctx.lineTo(x + dr * Math.sin(a * j), y + dr * Math.cos(a * j));\n        }\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n    }\n}\n\n\nfunction loadJSON(callback) {\n    var xobj = new XMLHttpRequest();\n    xobj.overrideMimeType(\"application/json\");\n    xobj.open('GET', pathJson, true);\n    xobj.onreadystatechange = function() {\n        if (xobj.readyState == 4 && xobj.status == \"200\") {\n            callback(JSON.parse(xobj.responseText));\n        }\n    };\n    xobj.send(null);\n}\n\n//# sourceURL=webpack://sayamapp.github.io/./static/js/gitContribute.js?");

/***/ }),

/***/ "./static/js/index.js":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gitContribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gitContribute.js */ \"./static/js/gitContribute.js\");\n\n\n(0,_gitContribute_js__WEBPACK_IMPORTED_MODULE_0__.test)();\n\n//# sourceURL=webpack://sayamapp.github.io/./static/js/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/index.js");
/******/ 	
/******/ })()
;