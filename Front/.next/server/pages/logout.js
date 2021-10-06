"use strict";
(() => {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Logout = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_0__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch({
      type: 'logout'
    });
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: "Logout.."
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9nb3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUdBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0FBRWpCLFFBQU07QUFBQ0MsSUFBQUEsS0FBRDtBQUFPQyxJQUFBQTtBQUFQLE1BQW1CSixpREFBVSxDQUFDSCxtREFBRCxDQUFuQztBQUVBSSxFQUFBQSxnREFBUyxDQUFDLE1BQUk7QUFDVkcsSUFBQUEsUUFBUSxDQUFDO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUVBQyxJQUFBQSxVQUFVLENBQUMsTUFBSTtBQUNYUixNQUFBQSx1REFBQTtBQUNILEtBRlMsRUFFUixJQUZRLENBQVY7QUFHSCxHQU5RLEVBTVAsRUFOTyxDQUFUO0FBUUEsc0JBQ0k7QUFBQTtBQUFBLG1CQURKO0FBS0gsQ0FqQkQ7O0FBbUJBLGlFQUFlSSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVPLE1BQU1PLFlBQVksR0FBQztBQUN0QkMsRUFBQUEsYUFBYSxFQUFDLENBRFE7QUFFdEJDLEVBQUFBLE1BQU0sRUFBQyxFQUZlO0FBR3RCQyxFQUFBQSxNQUFNLEVBQUMsRUFIZTtBQUl0QkMsRUFBQUEsUUFBUSxFQUFDLEVBSmE7QUFLdEJDLEVBQUFBLE9BQU8sRUFBQyxDQUxjO0FBTXRCQyxFQUFBQSxNQUFNLEVBQUMsQ0FOZTtBQU90QkMsRUFBQUEsR0FBRyxFQUFDO0FBUGtCLENBQW5CO0FBV1AsTUFBTW5CLEtBQUssZ0JBQUdXLG9EQUFhLENBQUNDLFlBQUQsQ0FBM0I7QUFFQSxpRUFBZVosS0FBZjs7Ozs7Ozs7OztBQ2ZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvbG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzdGF0ZSxkaXNwYXRjaH0gPSB1c2VDb250ZXh0KFN0b3JlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvZ291dCcgfSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIExvZ291dC4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGxvZ2luX2Jvb2xlYW46MCxcclxuICAgIHVzZXJpZDonJyxcclxuICAgIHVzZXJwdzonJyxcclxuICAgIHVzZXJuYW1lOicnLFxyXG4gICAgYWNjb3VudDowLFxyXG4gICAgd2FsbGV0OjAsXHJcbiAgICBtc2c6JycsXHJcbn07XHJcblxyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiU3RvcmUiLCJSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJMb2dvdXQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidHlwZSIsInNldFRpbWVvdXQiLCJiYWNrIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImxvZ2luX2Jvb2xlYW4iLCJ1c2VyaWQiLCJ1c2VycHciLCJ1c2VybmFtZSIsImFjY291bnQiLCJ3YWxsZXQiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9