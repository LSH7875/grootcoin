"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      userid = _useState[0],
      setUserid = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      userpw = _useState3[0],
      setUserpw = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      account = _useState4[0],
      setaccount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      wallet = _useState5[0],
      setwallet = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      loginuserid = _useState6[0],
      setloginuserid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      loginuserpw = _useState7[0],
      setloginuserpw = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.'),
      loginresult = _useState8[0],
      setloginresult = _useState8[1];

  var handleSubmit = function handleSubmit(e) {
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

  var handlelogin = function handlelogin(e) {
    e.preventDefault();
    var options = {
      method: 'GET'
    };
    var response = fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_2__.user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options); //restful api 

    var result = response;
    setloginresult(result);
  };

  var login = function login(e) {
    setloginuserid(e.target.value);
  };

  var loginpw = function loginpw(e) {
    setloginuserpw(e.target.value);
  };

  var changeUserid = function changeUserid(e) {
    setUserid(e.target.value);
    console.log(userid);
  };

  var changeUsername = function changeUsername(e) {
    setUsername(e.target.value);
  };

  var changeUserpw = function changeUserpw(e) {
    setUserpw(e.target.value);
  };

  var changeaccount = function changeaccount(e) {
    setaccount(e.target.value);
  };

  var changewallet = function changewallet(e) {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "TEhpTuS4B5dnN83zKaAPaNt2Dzs=");

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTZlYjliZTM4MTI2N2Q2MzRhNzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsa0JBQTRCRiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NKLCtDQUFRLENBQUMsR0FBRCxDQUF4QztBQUFBLE1BQU9LLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBOEJSLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9TLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPVyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBc0NaLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9hLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPZSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2hCLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9pQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcEIsTUFBWjtBQUNBSixJQUFBQSxzREFBWSxDQUFDO0FBQUNJLE1BQUFBLE1BQU0sRUFBQ0EsTUFB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QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVVJO0FBQU0sZ0JBQVEsRUFBSWQsV0FBbEI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlNO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlHO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLGNBQUksRUFBRyxRQUFkO0FBQXVCLGVBQUssRUFBRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBb0JILENBM0VEOztHQUFNL0I7O0FBNkVOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBbbG9naW51c2VyaWQsIHNldGxvZ2ludXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJwdywgc2V0bG9naW51c2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9zdWNjZXNzP3VzZXJpZD0ke2xvZ2ludXNlcmlkfSZ1c2VycHc9JHtsb2dpbnVzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VybmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VhY2NvdW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2V3YWxsZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIu2ajOybkOqwgOyehVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVsb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW5wd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi66Gc6re47J24XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwidXNlU3RhdGUiLCJ1c2VyX3VybCIsImluZGV4IiwidXNlcmlkIiwic2V0VXNlcmlkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJwdyIsInNldFVzZXJwdyIsImFjY291bnQiLCJzZXRhY2NvdW50Iiwid2FsbGV0Iiwic2V0d2FsbGV0IiwibG9naW51c2VyaWQiLCJzZXRsb2dpbnVzZXJpZCIsImxvZ2ludXNlcnB3Iiwic2V0bG9naW51c2VycHciLCJsb2dpbnJlc3VsdCIsInNldGxvZ2lucmVzdWx0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZWxvZ2luIiwib3B0aW9ucyIsIm1ldGhvZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJsb2dpbiIsInRhcmdldCIsInZhbHVlIiwibG9naW5wdyIsImNoYW5nZVVzZXJpZCIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=