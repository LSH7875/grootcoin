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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
    var response = fetch("".concat(user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options); //restful api 

    var result = response.json();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQwZmQ2NjdlNWMwMjMzZDhmYmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsa0JBQTRCRCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NILCtDQUFRLENBQUMsR0FBRCxDQUF4QztBQUFBLE1BQU9JLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCTCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBc0NYLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDYiwrQ0FBUSxDQUFDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPYyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2YsK0NBQVEsQ0FBQyxHQUFELENBQTlDO0FBQUEsTUFBT2dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixNQUFaO0FBQ0FILElBQUFBLHNEQUFZLENBQUM7QUFBQ0csTUFBQUEsTUFBTSxFQUFDQSxNQUFSO0FBQWdC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O0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBVUk7QUFBTSxnQkFBUSxFQUFJaEIsV0FBbEI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlRO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlHO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLGNBQUksRUFBRyxRQUFkO0FBQXVCLGVBQUssRUFBRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBb0JILENBM0VEOztHQUFNakM7O0FBNkVOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgaW5kZXggPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0YWNjb3VudF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgICAgICBqb2luX3N1Y2Nlc3Moe3VzZXJpZDp1c2VyaWQsIHVzZXJuYW1lOnVzZXJuYW1lLCB1c2VycHc6dXNlcnB3LCBhY2NvdW50OmFjY291bnQsIHdhbGxldDp3YWxsZXR9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlbG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VybmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VhY2NvdW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2V3YWxsZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIu2ajOybkOqwgOyehVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVsb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW5wd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi66Gc6re47J24XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwidXNlU3RhdGUiLCJpbmRleCIsInVzZXJpZCIsInNldFVzZXJpZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VycHciLCJzZXRVc2VycHciLCJhY2NvdW50Iiwic2V0YWNjb3VudCIsIndhbGxldCIsInNldHdhbGxldCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVsb2dpbiIsIm9wdGlvbnMiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwidXNlcl91cmwiLCJyZXN1bHQiLCJqc29uIiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2lucHciLCJjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9