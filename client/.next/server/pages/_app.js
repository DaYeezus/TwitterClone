/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Layout = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname.replace(\"/\", \"\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentPage(router.pathname.replace(\"/\", \"\"));\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            \"Twitter \",\n                            currentPage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Type\",\n                        content: \"text/html;charset=windows-1251\"\n                    }, void 0, false, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Type\",\n                        content: \"text/html;charset=UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=7\"\n                    }, void 0, false, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://rb.gy/ogau5a\",\n                        type: \"image/icon type\"\n                    }, void 0, false, {\n                        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yeezus/projects/TwitterClone/client/components/Layout.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUM5QjtBQUNTO0FBRXRDLE1BQU1NLE1BQU0sR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxHQUFLO0lBQzNCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixNQUFNLEtBQUNJLFdBQVcsTUFBRUMsY0FBYyxNQUFJUCwrQ0FBUSxDQUFDSyxNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRlYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1pRLGNBQWMsQ0FBQ0YsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbkQsRUFBRTtRQUFDSixNQUFNLENBQUNHLFFBQVE7S0FBQyxDQUFDO0lBQ3JCLHFCQUNJLDhEQUFDViwyQ0FBUTs7MEJBQ0wsOERBQUNHLGtEQUFJOztrQ0FDRCw4REFBQ1MsT0FBSzs7NEJBQUMsVUFBUTs0QkFBQ0osV0FBVzs7Ozs7O2lDQUFTO2tDQUNwQyw4REFBQ0ssTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7O2lDQUFFO2tDQUN2RSw4REFBQ0YsTUFBSTt3QkFBQ0csU0FBUyxFQUFDLGNBQWM7d0JBQUNELE9BQU8sRUFBQyxnQ0FBZ0M7Ozs7O2lDQUFFO2tDQUN6RSw4REFBQ0YsTUFBSTt3QkFBQ0csU0FBUyxFQUFDLGNBQWM7d0JBQUNELE9BQU8sRUFBQyx5QkFBeUI7Ozs7O2lDQUFFO2tDQUNsRSw4REFBQ0YsTUFBSTt3QkFBQ0csU0FBUyxFQUFDLGlCQUFpQjt3QkFBQ0QsT0FBTyxFQUFDLE1BQU07Ozs7O2lDQUFFO2tDQUNsRCw4REFBQ0UsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxzQkFBc0I7d0JBQUNDLElBQUksRUFBRSxpQkFBaUI7Ozs7O2lDQUFHOzs7Ozs7eUJBQ3BFOzBCQUNQLDhEQUFDQyxNQUFJOzBCQUNBZixRQUFROzs7Ozt5QkFDTjs7Ozs7O2lCQUNBLENBQ2I7Q0FDTDtBQUVELGlFQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKFwiL1wiLCBcIlwiKSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShyb3V0ZXIucGF0aG5hbWUucmVwbGFjZShcIi9cIiwgXCJcIikpXG4gICAgfSwgW3JvdXRlci5wYXRobmFtZV0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXIge2N1cnJlbnRQYWdlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDtjaGFyc2V0PXdpbmRvd3MtMTI1MVwiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcIi8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPTdcIi8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3JiLmd5L29nYXU1YVwiIHR5cGU9e1wiaW1hZ2UvaWNvbiB0eXBlXCJ9Lz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJodHRwRXF1aXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/yeezus/projects/TwitterClone/client/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/yeezus/projects/TwitterClone/client/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ1k7QUFFMUMsU0FBU0MsS0FBSyxDQUFDLEVBQUNDLFNBQVMsR0FBRUMsU0FBUyxHQUFDLEVBQUU7SUFDbkMscUJBQU8sOERBQUNILDBEQUFNO2tCQUNWLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ3ZCO0NBQ1o7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICByZXR1cm4gPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();