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
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\groot\\grootcoin\\Front\\pages\\_app.jsx";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSyxHQUFHLEdBQUMsQ0FBQztBQUFDQyxFQUFBQSxTQUFEO0FBQVdDLEVBQUFBO0FBQVgsQ0FBRCxLQUF5QjtBQUMvQixRQUFNQyxhQUFhLEdBQUNOLGlEQUFVLENBQUNGLG1EQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CVCxpREFBVSxDQUFDRSxtREFBRCxFQUFTSyxhQUFULENBQW5DO0FBRUEsc0JBQ0k7QUFBQSw0QkFDQSwrREFBQyxrREFBRDtBQUFBLDhCQUVBO0FBQVEsYUFBSyxNQUFiO0FBQWMsMEJBQWUsUUFBN0I7QUFBc0MsV0FBRyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFJSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQU0sWUFBSSxFQUFDLDZFQUFYO0FBQXlGLFdBQUcsRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQyx5RUFGVDtBQUdJLGlCQUFTLEVBQUMseUVBSGQ7QUFJSSxtQkFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBZ0JBLCtEQUFDLDREQUFEO0FBQWdCLFdBQUssRUFBRTtBQUFDQyxRQUFBQSxLQUFEO0FBQU9DLFFBQUFBO0FBQVAsT0FBdkI7QUFBQSw2QkFDSSwrREFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCQTtBQUFBLGtCQURKO0FBdUJILENBM0JEOztBQTRCQSxpRUFBZUYsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBRU8sTUFBTU8sWUFBWSxHQUFDLEVBQW5CO0FBRVAsTUFBTVosS0FBSyxnQkFBR1csb0RBQWEsQ0FBQ0MsWUFBRCxDQUEzQjtBQUVBLGlFQUFlWixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLENBQUNNLEtBQUQsRUFBT0ksTUFBUCxLQUFnQjtBQUM1QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSTtBQUNJLGFBQU9MLEtBQVA7QUFGUjtBQUlILENBTEQ7O0FBUUEsaUVBQWVOLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRVZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuaW1wb3J0IHt1c2VSZWR1Y2VyLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9zdG9yZS9yZWR1Y2VyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCAnLi4vY3NzL2hpc3RvcnkuY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9vcmRlckJvb2suY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvY2hhcnQuY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9idXlBbmRTZWxsLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvY29udHJhY3QuY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9mb290ZXIuY3NzJ1xyXG5cclxuY29uc3QgQXBwPSh7Q29tcG9uZW50LHBhZ2VQcm9wc30pPT57XHJcbiAgICBjb25zdCBnbG9iYWxDb250ZXh0PXVzZUNvbnRleHQoU3RvcmUpXHJcbiAgICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLGdsb2JhbENvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICBcclxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWFkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWFkLTAuMS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICB7LyogPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1hZFwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1hZC0wLjEuanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCJcclxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsZGlzcGF0Y2h9fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+ey8q7Jqw66as6rCAIOunjOuToCDrqqjrk6Ag6rKD7J20IGNvbXBvbmVudHPsl5Ag7JyE7LmY7ZWc64ukLiAgKi99XHJcbiAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17fTtcclxuXHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCJpbXBvcnQge2luaXRpYWxTdGF0ZX0gZnJvbSAnLi9jb250ZXh0J1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJTdG9yZSIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwicmVkdWNlciIsIkhlYWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnbG9iYWxDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==