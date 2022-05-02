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

/***/ "./app/pages/_app.tsx":
/*!****************************!*\
  !*** ./app/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/stdlib */ \"next/stdlib\");\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/data-client */ \"next/data-client\");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var app_core_styles_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/styles/index.css */ \"./app/core/styles/index.css\");\n/* harmony import */ var app_core_styles_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(app_core_styles_index_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/shreyas/Documents/ethbio/app/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const getLayout = Component.getLayout || (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_stdlib__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary, {\n    FallbackComponent: RootErrorFallback,\n    onReset: (0,next_data_client__WEBPACK_IMPORTED_MODULE_1__.useQueryErrorResetBoundary)().reset,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"og:description\",\n        content: \"A one-page personal bio, powered by web 3.0 technology.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"og:url\",\n        content: \"https://ethbio.xyz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"og:image\",\n        content: \"https://media.discordapp.net/attachments/930160554243395604/943157909548834826/Untitled_design.png?width=477&height=477\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"og:site_name\",\n        content: \"Ethbio\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"og:title\",\n        content: \"Coming Soon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n      children: getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 18\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\nfunction RootErrorFallback({\n  error\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_error__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent, {\n    statusCode: error.statusCode || 400,\n    title: error.message || error.name\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBT0E7QUFDQTtBQUVBOztBQUVlLFNBQVNLLEdBQVQsQ0FBYTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBYixFQUFpRDtBQUM5RCxRQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBVixLQUF5QkMsSUFBRCxJQUFVQSxJQUFsQyxDQUFsQjs7QUFFQSxzQkFDRSw4REFBQyxzREFBRDtBQUNFLHFCQUFpQixFQUFFQyxpQkFEckI7QUFFRSxXQUFPLEVBQUVULDRFQUEwQixHQUFHVSxLQUZ4QztBQUFBLDRCQUlBLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBNEIsZUFBTyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQSxlQVdFLDhEQUFDLDREQUFEO0FBQUEsZ0JBQ0NILFNBQVMsZUFBQyw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRDtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7QUFFRCxTQUFTRyxpQkFBVCxDQUEyQjtBQUFDRSxFQUFBQTtBQUFELENBQTNCLEVBQXdEO0FBQ3RELHNCQUFPLDhEQUFDLHNEQUFEO0FBQWdCLGNBQVUsRUFBRUEsS0FBSyxDQUFDQyxVQUFOLElBQW9CLEdBQWhEO0FBQXFELFNBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFOLElBQWlCRixLQUFLLENBQUNHO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRoYmlvLy4vYXBwL3BhZ2VzL19hcHAudHN4PzMzNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwUHJvcHMsXG4gIEVycm9yQm91bmRhcnksXG4gIEVycm9yQ29tcG9uZW50LFxuICBFcnJvckZhbGxiYWNrUHJvcHMsXG4gIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LFxufSBmcm9tIFwiYmxpdHpcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuaW1wb3J0IFwiYXBwL2NvcmUvc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0IHx8ICgocGFnZSkgPT4gcGFnZSlcblxuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5XG4gICAgICBGYWxsYmFja0NvbXBvbmVudD17Um9vdEVycm9yRmFsbGJhY2t9XG4gICAgICBvblJlc2V0PXt1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSgpLnJlc2V0fVxuICAgID5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIG9uZS1wYWdlIHBlcnNvbmFsIGJpbywgcG93ZXJlZCBieSB3ZWIgMy4wIHRlY2hub2xvZ3kuXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9ldGhiaW8ueHl6XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL21lZGlhLmRpc2NvcmRhcHAubmV0L2F0dGFjaG1lbnRzLzkzMDE2MDU1NDI0MzM5NTYwNC85NDMxNTc5MDk1NDg4MzQ4MjYvVW50aXRsZWRfZGVzaWduLnBuZz93aWR0aD00NzcmaGVpZ2h0PTQ3N1wiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRXRoYmlvXCIvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNvbWluZyBTb29uXCIvPiAgICAgXG4gICA8L0hlYWQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0Vycm9yQm91bmRhcnk+XG4gIClcbn1cblxuZnVuY3Rpb24gUm9vdEVycm9yRmFsbGJhY2soe2Vycm9yfTogRXJyb3JGYWxsYmFja1Byb3BzKSB7XG4gIHJldHVybiA8RXJyb3JDb21wb25lbnQgc3RhdHVzQ29kZT17ZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDB9IHRpdGxlPXtlcnJvci5tZXNzYWdlIHx8IGVycm9yLm5hbWV9IC8+XG59XG4iXSwibmFtZXMiOlsiRXJyb3JCb3VuZGFyeSIsInVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5IiwiRXJyb3JDb21wb25lbnQiLCJIZWFkIiwiQ2hha3JhUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwiUm9vdEVycm9yRmFsbGJhY2siLCJyZXNldCIsImVycm9yIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/pages/_app.tsx\n");

/***/ }),

/***/ "./app/core/styles/index.css":
/*!***********************************!*\
  !*** ./app/core/styles/index.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/data-client":
/*!***********************************!*\
  !*** external "next/data-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/data-client");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/stdlib":
/*!******************************!*\
  !*** external "next/stdlib" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/stdlib");

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
var __webpack_exports__ = (__webpack_exec__("./app/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();