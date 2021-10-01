"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/buyAndSell.jsx":
/*!***********************************!*\
  !*** ./components/buyAndSell.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\grootcoin\\grootcoin\\Front\\components\\buyAndSell.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var buycolor = {
  "background": "#1e65a3",
  "color": "#fff"
};
var sellcolor = {
  "background": "#1e65a3",
  "color": "#fff"
};

var Buy = function Buy() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "ddd"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = Buy;

var Sell = function Sell() {};

_c2 = Sell;

var buyAndSell = function buyAndSell() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('buy'),
      bsBtn = _useState[0],
      setbsBtn = _useState[1];

  var buy = function buy() {
    setbsBtn('buy');
  };

  var sell = function sell() {
    setbsBtn('sell');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    id: "buyAndSellBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: bsBtn === 'buy' ? buycolor : {},
        onClick: buy,
        children: "\uB9E4\uC218"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: bsBtn === 'sell' ? sellcolor : {},
        onClick: sell,
        children: "\uB9E4\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), bsBtn === 'buy' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Buy, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sell, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(buyAndSell, "uuKESYQ6Lgu2zdW9qcTwunlrOSU=");

/* harmony default export */ __webpack_exports__["default"] = (buyAndSell);

var _c, _c2;

$RefreshReg$(_c, "Buy");
$RefreshReg$(_c2, "Sell");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWYyZWRlYzBmMWY4NmRiMjBkZjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQUUsZ0JBQWMsU0FBaEI7QUFBMkIsV0FBUztBQUFwQyxDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRztBQUFFLGdCQUFjLFNBQWhCO0FBQTJCLFdBQVM7QUFBcEMsQ0FBbEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQU5EOztLQUFNQTs7QUFRTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLLENBRWpCLENBRkQ7O01BQU1BOztBQUlOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUk7QUFBQTs7QUFDbkIsa0JBQTBCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQ2JELElBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUs7QUFDZEYsSUFBQUEsUUFBUSxDQUFDLE1BQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBUSxhQUFLLEVBQUdELEtBQUssS0FBSyxLQUFYLEdBQW1CTCxRQUFuQixHQUE4QixFQUE3QztBQUFpRCxlQUFPLEVBQUVPLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFRLGFBQUssRUFBR0YsS0FBSyxLQUFLLE1BQVgsR0FBb0JKLFNBQXBCLEdBQWdDLEVBQS9DO0FBQW1ELGVBQU8sRUFBRU8sSUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQU1RSCxLQUFLLEtBQUssS0FBVixnQkFDTSw4REFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETixnQkFFTSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBeEJEOztHQUFNRDs7QUEwQk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXlBbmRTZWxsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYnV5Y29sb3IgPSB7IFwiYmFja2dyb3VuZFwiOiBcIiMxZTY1YTNcIiwgXCJjb2xvclwiOiBcIiNmZmZcIiB9XHJcbmNvbnN0IHNlbGxjb2xvciA9IHsgXCJiYWNrZ3JvdW5kXCI6IFwiIzFlNjVhM1wiLCBcImNvbG9yXCI6IFwiI2ZmZlwiIH1cclxuXHJcbmNvbnN0IEJ1eSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgZGRkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNlbGwgPSAoKSA9PntcclxuXHJcbn1cclxuXHJcbmNvbnN0IGJ1eUFuZFNlbGwgPSAoKT0+e1xyXG4gICAgY29uc3QgW2JzQnRuLCBzZXRic0J0bl0gPSB1c2VTdGF0ZSgnYnV5JylcclxuXHJcbiAgICBjb25zdCBidXkgPSAoKSA9PntcclxuICAgICAgICBzZXRic0J0bignYnV5JylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxsID0gKCkgPT57XHJcbiAgICAgICAgc2V0YnNCdG4oJ3NlbGwnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwiYnV5QW5kU2VsbEJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGJzQnRuID09PSAnYnV5Jyk/IGJ1eWNvbG9yIDoge319IG9uQ2xpY2s9e2J1eX0+66ek7IiYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsoYnNCdG4gPT09ICdzZWxsJyk/IHNlbGxjb2xvciA6IHt9fSBvbkNsaWNrPXtzZWxsfT7rp6Trj4Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJzQnRuID09PSAnYnV5J1xyXG4gICAgICAgICAgICAgICAgICAgID8gPEJ1eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPFNlbGwgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXlBbmRTZWxsIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYnV5Y29sb3IiLCJzZWxsY29sb3IiLCJCdXkiLCJTZWxsIiwiYnV5QW5kU2VsbCIsImJzQnRuIiwic2V0YnNCdG4iLCJidXkiLCJzZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==