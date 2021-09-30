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
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "NEjNPMok0U9RDY8l5tQQuKtjmJ0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDBjODY0OTk0YWQzNzUxZjgwMjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsa0JBQTRCRCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NILCtDQUFRLENBQUMsR0FBRCxDQUF4QztBQUFBLE1BQU9JLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCTCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBWjtBQUNBSCxJQUFBQSxzREFBWSxDQUFDO0FBQUNHLE1BQUFBLE1BQU0sRUFBQ0EsTUFBUjtBQUFnQkUsTUFBQUEsUUFBUSxFQUFDQSxRQUF6QjtBQUFtQ0UsTUFBQUEsTUFBTSxFQUFDQSxNQUExQztBQUFrREUsTUFBQUEsT0FBTyxFQUFDQSxPQUExRDtBQUFtRUUsTUFBQUEsTUFBTSxFQUFDQTtBQUExRSxLQUFELENBQVo7QUFDSCxHQUpEOztBQUtBLE1BQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNKLENBQUQsRUFBTztBQUN2QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUgsR0FIRDs7QUFLQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxDQUFELEVBQU87QUFDeEJWLElBQUFBLFNBQVMsQ0FBQ1UsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNBTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBTW1CLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1IsQ0FBRCxFQUFPO0FBQzFCUixJQUFBQSxXQUFXLENBQUNRLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNULENBQUQsRUFBTztBQUN4Qk4sSUFBQUEsU0FBUyxDQUFDTSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLENBQUQsRUFBTztBQUN6QkosSUFBQUEsVUFBVSxDQUFDSSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0gsR0FGRDs7QUFHQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWCxDQUFELEVBQU87QUFDeEJGLElBQUFBLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQU0sZ0JBQVEsRUFBSVIsWUFBbEI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlNO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlHO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFRLEVBQUlDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFPLGNBQUksRUFBRyxRQUFkO0FBQXVCLGVBQUssRUFBRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBVUk7QUFBTSxnQkFBUSxFQUFJUCxXQUFsQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFHLE1BQWQ7QUFBcUIsa0JBQVEsRUFBSVE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFHLE1BQWQ7QUFBcUIsa0JBQVEsRUFBSUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQU8sY0FBSSxFQUFHLFFBQWQ7QUFBdUIsZUFBSyxFQUFHO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvQkgsQ0F2REQ7O0dBQU16Qjs7QUF5RE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge2pvaW5fc3VjY2Vzc30gZnJvbSAnLi4vYXBpL2FwaSdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJwdywgc2V0VXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt3YWxsZXQsIHNldHdhbGxldF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY2hhbmdlVXNlcmlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VhY2NvdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdld2FsbGV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJwd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdld2FsbGV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLtmozsm5DqsIDsnoVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuuhnOq3uOyduFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImpvaW5fc3VjY2VzcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlbG9naW4iLCJjaGFuZ2VVc2VyaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCIsImxvZ2luIiwibG9naW5wdyJdLCJzb3VyY2VSb290IjoiIn0=