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
/* harmony import */ var _store_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/useLocalStorage */ "./store/useLocalStorage.js");
/* harmony import */ var _css_history_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/history.css */ "./css/history.css");
/* harmony import */ var _css_history_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_history_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_orderBook_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/orderBook.css */ "./css/orderBook.css");
/* harmony import */ var _css_orderBook_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_orderBook_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_chart_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/chart.css */ "./css/chart.css");
/* harmony import */ var _css_chart_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_chart_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/buyAndSell.css */ "./css/buyAndSell.css");
/* harmony import */ var _css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_buyAndSell_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_contract_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/contract.css */ "./css/contract.css");
/* harmony import */ var _css_contract_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_contract_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/footer.css */ "./css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_assets_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/assets.css */ "./css/assets.css");
/* harmony import */ var _css_assets_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_assets_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_coinNews_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/coinNews.css */ "./css/coinNews.css");
/* harmony import */ var _css_coinNews_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_coinNews_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_usePersist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/usePersist */ "./store/usePersist.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\KGA_19\\1006\\grootcoin\\Front\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const App = ({
  Component,
  pageProps
}) => {
  // const globalContext=useContext(Store)
  const localstorageKey = "@initialState";
  const globalStore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default);
  const [state, dispatch] = (0,_store_usePersist__WEBPACK_IMPORTED_MODULE_14__.usePersistedReducer)((0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_2__.default, globalStore), localstorageKey);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(localStorage.getItem(localstorageKey));

    if (JSON.parse(localStorage.getItem(localstorageKey))) {
      dispatch({
        type: "init_stored",
        value: JSON.parse(localStorage.getItem(localstorageKey))
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("script", {
        async: true,
        "custom-element": "amp-ad",
        src: "https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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

const initialState = {
  login_boolean: 0,
  userid: '',
  userpw: '',
  username: '',
  account: 0,
  wallet: 0,
  msg: ''
};
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer = (state, action) => {
  switch (action.type) {
    case "init_stored":
      console.log('init_stored : ', action.value.login_boolean);
      return _objectSpread(_objectSpread({}, state), {}, {
        login_boolean: action.value.login_boolean
      });

    case "login_boolean_true":
      console.log(action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        login_boolean: action.payload,
        userid: action.userid,
        username: action.username,
        userpw: action.userpw,
        account: action.account,
        wallet: action.wallet,
        msg: ''
      });

    case "login_boolean_false":
      return _objectSpread(_objectSpread({}, state), {}, {
        login_boolean: action.payload,
        userid: '',
        userpw: '',
        username: '',
        account: 0,
        wallet: 0,
        msg: '로그인을 진행해주세요'
      });

    case "logout":
      return _objectSpread(_objectSpread({}, state), {}, {
        login_boolean: 0,
        userid: '',
        userpw: '',
        username: '',
        account: 0,
        wallet: 0,
        msg: '로그인을 진행해주세요'
      });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./store/useLocalStorage.js":
/*!**********************************!*\
  !*** ./store/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.js");



function useLocalStorage(key, initialState) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_1__.default, () => window.localStorage.getItem(key) || initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);
  return [state, dispatch];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);

/***/ }),

/***/ "./store/usePersist.jsx":
/*!******************************!*\
  !*** ./store/usePersist.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePersistedReducer": () => (/* binding */ usePersistedReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const usePersistedReducer = ([state, dispatch], key = "state") => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
};

/***/ }),

/***/ "./css/assets.css":
/*!************************!*\
  !*** ./css/assets.css ***!
  \************************/
/***/ (() => {



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

/***/ "./css/coinNews.css":
/*!**************************!*\
  !*** ./css/coinNews.css ***!
  \**************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUQsQ0FGTyxDQUFUO0FBSUEsU0FBTyxDQUFDQSxLQUFELEVBQU9DLFFBQVAsQ0FBUDtBQUNILENBTk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS91c2VQZXJzaXN0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQge3VzZVJlZHVjZXIsdXNlQ29udGV4dCx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9zdG9yZS9yZWR1Y2VyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnLi4vc3RvcmUvdXNlTG9jYWxTdG9yYWdlJ1xyXG5pbXBvcnQgJy4uL2Nzcy9oaXN0b3J5LmNzcydcclxuaW1wb3J0ICcuLi9jc3Mvb3JkZXJCb29rLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL2NoYXJ0LmNzcydcclxuaW1wb3J0ICcuLi9jc3MvYnV5QW5kU2VsbC5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL2NvbnRyYWN0LmNzcydcclxuaW1wb3J0ICcuLi9jc3MvZm9vdGVyLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvYXNzZXRzLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvY29pbk5ld3MuY3NzJ1xyXG5pbXBvcnQgeyB1c2VQZXJzaXN0ZWRSZWR1Y2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlUGVyc2lzdCdcclxuXHJcbmNvbnN0IEFwcD0oe0NvbXBvbmVudCxwYWdlUHJvcHN9KT0+e1xyXG4gICAgLy8gY29uc3QgZ2xvYmFsQ29udGV4dD11c2VDb250ZXh0KFN0b3JlKVxyXG4gICAgY29uc3QgbG9jYWxzdG9yYWdlS2V5ID0gXCJAaW5pdGlhbFN0YXRlXCJcclxuICAgIGNvbnN0IGdsb2JhbFN0b3JlID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUGVyc2lzdGVkUmVkdWNlcihcclxuICAgICAgICB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdsb2JhbFN0b3JlKSxcclxuICAgICAgICBsb2NhbHN0b3JhZ2VLZXlcclxuICAgIClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2Fsc3RvcmFnZUtleSkpXHJcbiAgICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxzdG9yYWdlS2V5KSkpIHsgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluaXRfc3RvcmVkXCIsIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxzdG9yYWdlS2V5KSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICBcclxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWFkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWFkLTAuMS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICB7LyogPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1hZFwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1hZC0wLjEuanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCJcclxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsZGlzcGF0Y2h9fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+ey8q7Jqw66as6rCAIOunjOuToCDrqqjrk6Ag6rKD7J20IGNvbXBvbmVudHPsl5Ag7JyE7LmY7ZWc64ukLiAgKi99XHJcbiAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBsb2dpbl9ib29sZWFuOjAsXHJcbiAgICB1c2VyaWQ6JycsXHJcbiAgICB1c2VycHc6JycsXHJcbiAgICB1c2VybmFtZTonJyxcclxuICAgIGFjY291bnQ6MCxcclxuICAgIHdhbGxldDowLFxyXG4gICAgbXNnOicnLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCJpbXBvcnQge2luaXRpYWxTdGF0ZX0gZnJvbSAnLi9jb250ZXh0J1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJpbml0X3N0b3JlZFwiOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdF9zdG9yZWQgOiAnLGFjdGlvbi52YWx1ZS5sb2dpbl9ib29sZWFuKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbl9ib29sZWFuOmFjdGlvbi52YWx1ZS5sb2dpbl9ib29sZWFuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJsb2dpbl9ib29sZWFuX3RydWVcIjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luX2Jvb2xlYW46IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdXNlcmlkOiBhY3Rpb24udXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJwdzogYWN0aW9uLnVzZXJwdyxcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjdGlvbi5hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgd2FsbGV0OiBhY3Rpb24ud2FsbGV0LFxyXG4gICAgICAgICAgICAgICAgbXNnOicnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFwibG9naW5fYm9vbGVhbl9mYWxzZVwiOlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5fYm9vbGVhbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyaWQ6JycsXHJcbiAgICAgICAgICAgICAgICB1c2VycHc6JycsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6MCxcclxuICAgICAgICAgICAgICAgIHdhbGxldDowLFxyXG4gICAgICAgICAgICAgICAgbXNnOifroZzqt7jsnbjsnYQg7KeE7ZaJ7ZW07KO87IS47JqUJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImxvZ291dFwiOlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5fYm9vbGVhbjogMCxcclxuICAgICAgICAgICAgICAgIHVzZXJpZDonJyxcclxuICAgICAgICAgICAgICAgIHVzZXJwdzonJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudDowLFxyXG4gICAgICAgICAgICAgICAgd2FsbGV0OjAsXHJcbiAgICAgICAgICAgICAgICBtc2c6J+uhnOq3uOyduOydhCDsp4TtlontlbTso7zshLjsmpQnXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge3VzZVJlZHVjZXIsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZShrZXksIGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCAoKSA9PiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RhdGUpO1xyXG4gIH0sIFtrZXksIHN0YXRlXSk7XHJcblxyXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlOyIsImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQZXJzaXN0ZWRSZWR1Y2VyID0gKFtzdGF0ZSwgZGlzcGF0Y2hdICwga2V5ID0gXCJzdGF0ZVwiKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gICAgfSxbc3RhdGVdKVxyXG5cclxuICAgIHJldHVybiBbc3RhdGUsZGlzcGF0Y2hdXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJTdG9yZSIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwicmVkdWNlciIsIkhlYWQiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ1c2VQZXJzaXN0ZWRSZWR1Y2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9jYWxzdG9yYWdlS2V5IiwiZ2xvYmFsU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwidmFsdWUiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibG9naW5fYm9vbGVhbiIsInVzZXJpZCIsInVzZXJwdyIsInVzZXJuYW1lIiwiYWNjb3VudCIsIndhbGxldCIsIm1zZyIsImFjdGlvbiIsInBheWxvYWQiLCJrZXkiLCJ3aW5kb3ciLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==