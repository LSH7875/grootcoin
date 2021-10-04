(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_history_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/history.css */ "./css/history.css");
/* harmony import */ var _css_history_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_history_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_orderBook_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/orderBook.css */ "./css/orderBook.css");
/* harmony import */ var _css_orderBook_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_orderBook_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_chart_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/chart.css */ "./css/chart.css");
/* harmony import */ var _css_chart_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_chart_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/buyAndSell.css */ "./css/buyAndSell.css");
/* harmony import */ var _css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_contract_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/contract.css */ "./css/contract.css");
/* harmony import */ var _css_contract_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_contract_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/footer.css */ "./css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\KGA_19\\groot\\grootcoin\\Front\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const App = ({
  Component,
  pageProps
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_2__.default, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("script", {
        async: true,
        "custom-element": "amp-ad",
        src: "https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./store/context.js":
/*!**************************!*\
  !*** ./store/context.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./store/context.js");


const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./css/buyAndSell.css":
/*!****************************!*\
  !*** ./css/buyAndSell.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./css/chart.css":
/*!***********************!*\
  !*** ./css/chart.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./css/contract.css":
/*!**************************!*\
  !*** ./css/contract.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./css/footer.css":
/*!************************!*\
  !*** ./css/footer.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./css/history.css":
/*!*************************!*\
  !*** ./css/history.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./css/orderBook.css":
/*!***************************!*\
  !*** ./css/orderBook.css ***!
  \***************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSyxHQUFHLEdBQUMsQ0FBQztBQUFDQyxFQUFBQSxTQUFEO0FBQVdDLEVBQUFBO0FBQVgsQ0FBRCxLQUF5QjtBQUMvQixRQUFNQyxhQUFhLEdBQUNOLGlEQUFVLENBQUNGLG1EQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CVCxpREFBVSxDQUFDRSxtREFBRCxFQUFTSyxhQUFULENBQW5DO0FBRUEsc0JBQ0k7QUFBQSw0QkFDQSwrREFBQyxrREFBRDtBQUFBLDhCQUVBO0FBQVEsYUFBSyxNQUFiO0FBQWMsMEJBQWUsUUFBN0I7QUFBc0MsV0FBRyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFJSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQU0sWUFBSSxFQUFDLDZFQUFYO0FBQXlGLFdBQUcsRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQyx5RUFGVDtBQUdJLGlCQUFTLEVBQUMseUVBSGQ7QUFJSSxtQkFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBZ0JBLCtEQUFDLDREQUFEO0FBQWdCLFdBQUssRUFBRTtBQUFDQyxRQUFBQSxLQUFEO0FBQU9DLFFBQUFBO0FBQVAsT0FBdkI7QUFBQSw2QkFDSSwrREFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCQTtBQUFBLGtCQURKO0FBdUJILENBM0JEOztBQTRCQSxpRUFBZUYsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBRU8sTUFBTU8sWUFBWSxHQUFDLEVBQW5CO0FBRVAsTUFBTVosS0FBSyxnQkFBR1csb0RBQWEsQ0FBQ0MsWUFBRCxDQUEzQjtBQUVBLGlFQUFlWixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLENBQUNNLEtBQUQsRUFBT0ksTUFBUCxLQUFnQjtBQUM1QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSTtBQUNJLGFBQU9MLEtBQVA7QUFGUjtBQUlILENBTEQ7O0FBUUEsaUVBQWVOLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBUVZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vY3NzL2J1eUFuZFNlbGwuY3NzIiwid2VicGFjazovL2Zyb250Ly4vY3NzL2NoYXJ0LmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL2Nzcy9jb250cmFjdC5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL2Nzcy9oaXN0b3J5LmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL2Nzcy9vcmRlckJvb2suY3NzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7dXNlUmVkdWNlcix1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJy4uL2Nzcy9oaXN0b3J5LmNzcydcclxuaW1wb3J0ICcuLi9jc3Mvb3JkZXJCb29rLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL2NoYXJ0LmNzcydcclxuaW1wb3J0ICcuLi9jc3MvYnV5QW5kU2VsbC5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL2NvbnRyYWN0LmNzcydcclxuaW1wb3J0ICcuLi9jc3MvZm9vdGVyLmNzcydcclxuXHJcbmNvbnN0IEFwcD0oe0NvbXBvbmVudCxwYWdlUHJvcHN9KT0+e1xyXG4gICAgY29uc3QgZ2xvYmFsQ29udGV4dD11c2VDb250ZXh0KFN0b3JlKVxyXG4gICAgY29uc3QgW3N0YXRlLGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcixnbG9iYWxDb250ZXh0KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1hZFwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1hZC0wLjEuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgey8qIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtYWRcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYWQtMC4xLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiXHJcbiAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLGRpc3BhdGNofX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPnsvKuyasOumrOqwgCDrp4zrk6Ag66qo65OgIOqyg+ydtCBjb21wb25lbnRz7JeQIOychOy5mO2VnOuLpC4gICovfVxyXG4gICAgICAgIDwvU3RvcmUuUHJvdmlkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e307XHJcblxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwiaW1wb3J0IHtpbml0aWFsU3RhdGV9IGZyb20gJy4vY29udGV4dCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiU3RvcmUiLCJ1c2VSZWR1Y2VyIiwidXNlQ29udGV4dCIsInJlZHVjZXIiLCJIZWFkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2xvYmFsQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=