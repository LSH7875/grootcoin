"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/api.jsx":
/*!*********************!*\
  !*** ./api/api.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "join_success": () => (/* binding */ join_success)
/* harmony export */ });
/* harmony import */ var _store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Allurl.jsx */ "./store/Allurl.jsx");

const join_success = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/join_success`, options); //restful api 
}; // export const login_success = async (body) => {
//     const options = {
//         method:'GET',
//     }
//     const response = await fetch(`${user_url}/login_success?userid=${userid}&userpw=${userpw}`,options) //restful api 
// }

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx";






const index = () => {
  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: userpw,
    1: setUserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: account,
    1: setaccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: wallet,
    1: setwallet
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginuserid,
    1: setloginuserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginuserpw,
    1: setloginuserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginresult,
    1: setloginresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userid);
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.join_success)({
      userid: userid,
      username: username,
      userpw: userpw,
      account: account,
      wallet: wallet
    });
  };

  const handlelogin = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_2__.user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`, options); //restful api 

    let result = await response.json();
    setloginresult(result);
  };

  const login = e => {
    setloginuserid(e.target.value);
  };

  const loginpw = e => {
    setloginuserpw(e.target.value);
  };

  const changeUserid = e => {
    setUserid(e.target.value);
    console.log(userid);
  };

  const changeUsername = e => {
    setUsername(e.target.value);
  };

  const changeUserpw = e => {
    setUserpw(e.target.value);
  };

  const changeaccount = e => {
    setaccount(e.target.value);
  };

  const changewallet = e => {
    setwallet(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: loginresult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./store/Allurl.jsx":
/*!**************************!*\
  !*** ./store/Allurl.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user_url": () => (/* binding */ user_url)
/* harmony export */ });
const user_url = 'http://localhost:3003/api/user';

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBLHFCQUhKLGVBSUk7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixlQUFLLEVBQUc7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFVSTtBQUFNLGdCQUFRLEVBQUlYLFdBQWxCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixlQUFLLEVBQUc7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUEsb0JBQU1YO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFxQkgsQ0E1RUQ7O0FBOEVBLGlFQUFlZixLQUFmOzs7Ozs7Ozs7Ozs7OztBQ25GTyxNQUFNYixRQUFRLEdBQUcsZ0NBQWpCOzs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vYXBpL2FwaS5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9BbGx1cmwuanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlcl91cmx9IGZyb20gJy4uL3N0b3JlL0FsbHVybC5qc3gnXHJcblxyXG5leHBvcnQgY29uc3Qgam9pbl9zdWNjZXNzID0gYXN5bmMgKGJvZHkpID0+IHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcl91cmwpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9qb2luX3N1Y2Nlc3NgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5fc3VjY2VzcyA9IGFzeW5jIChib2R5KSA9PiB7XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbi8vICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7dXNlcmlkfSZ1c2VycHc9JHt1c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG5cclxuLy8gfVxyXG4iLCJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBbbG9naW51c2VyaWQsIHNldGxvZ2ludXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJwdywgc2V0bG9naW51c2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9zdWNjZXNzP3VzZXJpZD0ke2xvZ2ludXNlcmlkfSZ1c2VycHc9JHtsb2dpbnVzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5yZXN1bHQocmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXNlcmlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VhY2NvdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdld2FsbGV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJwd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdld2FsbGV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLtmozsm5DqsIDsnoVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuuhnOq3uOyduFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntsb2dpbnJlc3VsdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiZXhwb3J0IGNvbnN0IHVzZXJfdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hcGkvdXNlciciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZXJfdXJsIiwiam9pbl9zdWNjZXNzIiwiYm9keSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwidXNlU3RhdGUiLCJpbmRleCIsInVzZXJpZCIsInNldFVzZXJpZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VycHciLCJzZXRVc2VycHciLCJhY2NvdW50Iiwic2V0YWNjb3VudCIsIndhbGxldCIsInNldHdhbGxldCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZWxvZ2luIiwicmVzdWx0IiwianNvbiIsImxvZ2luIiwidGFyZ2V0IiwidmFsdWUiLCJsb2dpbnB3IiwiY2hhbmdlVXNlcmlkIiwiY2hhbmdlVXNlcm5hbWUiLCJjaGFuZ2VVc2VycHciLCJjaGFuZ2VhY2NvdW50IiwiY2hhbmdld2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==