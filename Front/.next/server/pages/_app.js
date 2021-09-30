"use strict";
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\grootcoin\\Front\\pages\\_app.jsx";

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("script", {
        async: true,
        "custom-element": "amp-ad",
        src: "https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1LLEdBQUcsR0FBQyxDQUFDO0FBQUNDLEVBQUFBLFNBQUQ7QUFBV0MsRUFBQUE7QUFBWCxDQUFELEtBQXlCO0FBQy9CLFFBQU1DLGFBQWEsR0FBQ04saURBQVUsQ0FBQ0YsbURBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJULGlEQUFVLENBQUNFLG1EQUFELEVBQVNLLGFBQVQsQ0FBbkM7QUFFQSxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsOEJBRUE7QUFBUSxhQUFLLE1BQWI7QUFBYywwQkFBZSxRQUE3QjtBQUFzQyxXQUFHLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUlJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQywyQkFBNUI7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBTSxZQUFJLEVBQUMsNkVBQVg7QUFBeUYsV0FBRyxFQUFDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSTtBQUNJLFdBQUcsRUFBQyxZQURSO0FBRUksWUFBSSxFQUFDLHlFQUZUO0FBR0ksaUJBQVMsRUFBQyx5RUFIZDtBQUlJLG1CQUFXLEVBQUM7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFnQkEsOERBQUMsNERBQUQ7QUFBZ0IsV0FBSyxFQUFFO0FBQUNDLFFBQUFBLEtBQUQ7QUFBT0MsUUFBQUE7QUFBUCxPQUF2QjtBQUFBLDZCQUNJLDhEQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJBO0FBQUEsa0JBREo7QUF1QkgsQ0EzQkQ7O0FBNEJBLGlFQUFlRixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUVPLE1BQU1PLFlBQVksR0FBQyxFQUFuQjtBQUVQLE1BQU1aLEtBQUssZ0JBQUdXLG9EQUFhLENBQUNDLFlBQUQsQ0FBM0I7QUFFQSxpRUFBZVosS0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLENBQUNNLEtBQUQsRUFBT0ksTUFBUCxLQUFnQjtBQUM1QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSTtBQUNJLGFBQU9MLEtBQVA7QUFGUjtBQUlILENBTEQ7O0FBUUEsaUVBQWVOLE9BQWY7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuaW1wb3J0IHt1c2VSZWR1Y2VyLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9zdG9yZS9yZWR1Y2VyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBBcHA9KHtDb21wb25lbnQscGFnZVByb3BzfSk9PntcclxuICAgIGNvbnN0IGdsb2JhbENvbnRleHQ9dXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsZ2xvYmFsQ29udGV4dClcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtYWRcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYWQtMC4xLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIHsvKiA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWFkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWFkLTAuMS5qc1wiPjwvc2NyaXB0PiAqL31cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIlxyXG4gICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICBcclxuICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSxkaXNwYXRjaH19PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz57LyrsmrDrpqzqsIAg66eM65OgIOuqqOuToCDqsoPsnbQgY29tcG9uZW50c+yXkCDsnITsuZjtlZzri6QuICAqL31cclxuICAgICAgICA8L1N0b3JlLlByb3ZpZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXt9O1xyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsImltcG9ydCB7aW5pdGlhbFN0YXRlfSBmcm9tICcuL2NvbnRleHQnXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlN0b3JlIiwidXNlUmVkdWNlciIsInVzZUNvbnRleHQiLCJyZWR1Y2VyIiwiSGVhZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9