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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var buycolor = {
  "background": "rgba(225,35,67)",
  "color": "#fff"
};
var sellcolor = {
  "background": "rgba(23,99,182)",
  "color": "#fff"
};

var Buy = function Buy() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      buyPrice = _useState[0],
      setBuyPrice = _useState[1];

  var onUp = function onUp() {
    setBuyPrice(function (price) {
      return price + 1;
    });
  };

  var onDown = function onDown() {
    setBuyPrice(function (price) {
      return price - 1;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "\uBCF4\uC720"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "\uB9E4\uC218 \uAC00\uB2A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "\uAC00\uACA9(KRW)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: buyPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: onDown,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: onUp,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(Buy, "O5T9cT7rsfBFQYr/hXL20wDUfWQ=");

_c = Buy;

var Sell = function Sell() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "ddd"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_c2 = Sell;

var buyAndSell = function buyAndSell() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('buy'),
      bsBtn = _useState2[0],
      setbsBtn = _useState2[1];

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
        className: "buyBtn",
        children: "\uB9E4\uC218"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: bsBtn === 'sell' ? sellcolor : {},
        onClick: sell,
        className: "sellBtn",
        children: "\uB9E4\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), bsBtn === 'buy' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Buy, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sell, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s2(buyAndSell, "uuKESYQ6Lgu2zdW9qcTwunlrOSU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGMxZDAxY2JiODFhMGZlZjg0NzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFFBQVEsR0FBRztBQUFFLGdCQUFjLGlCQUFoQjtBQUFtQyxXQUFTO0FBQTVDLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQUUsZ0JBQWMsaUJBQWhCO0FBQW1DLFdBQVM7QUFBNUMsQ0FBbEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkLGtCQUErQkgsK0NBQVEsQ0FBQyxDQUFELENBQXZDO0FBQUEsTUFBT0ksUUFBUDtBQUFBLE1BQWdCQyxXQUFoQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2RELElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQWY7QUFBQSxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1DLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUk7QUFDaEJILElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQWY7QUFBQSxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFRLGVBQU8sRUFBRUksTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJO0FBQVEsZUFBTyxFQUFFRixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBN0JEOztHQUFNSDs7S0FBQUE7O0FBK0JOLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUs7QUFDZCxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FORDs7TUFBTUE7O0FBUU4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSTtBQUFBOztBQUNuQixtQkFBMEJWLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFDYkQsSUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNkRixJQUFBQSxRQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFRLGFBQUssRUFBR0QsS0FBSyxLQUFLLEtBQVgsR0FBbUJWLFFBQW5CLEdBQThCLEVBQTdDO0FBQWlELGVBQU8sRUFBRVksR0FBMUQ7QUFBK0QsaUJBQVMsRUFBQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxhQUFLLEVBQUdGLEtBQUssS0FBSyxNQUFYLEdBQW9CVCxTQUFwQixHQUFnQyxFQUEvQztBQUFtRCxlQUFPLEVBQUVZLElBQTVEO0FBQWtFLGlCQUFTLEVBQUMsU0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQU1RSCxLQUFLLEtBQUssS0FBVixnQkFDTSw4REFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETixnQkFFTSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBeEJEOztJQUFNRDs7QUEwQk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXlBbmRTZWxsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYnV5Y29sb3IgPSB7IFwiYmFja2dyb3VuZFwiOiBcInJnYmEoMjI1LDM1LDY3KVwiLCBcImNvbG9yXCI6IFwiI2ZmZlwiIH1cclxuY29uc3Qgc2VsbGNvbG9yID0geyBcImJhY2tncm91bmRcIjogXCJyZ2JhKDIzLDk5LDE4MilcIiwgXCJjb2xvclwiOiBcIiNmZmZcIiB9XHJcblxyXG5jb25zdCBCdXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYnV5UHJpY2Usc2V0QnV5UHJpY2VdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBvblVwID0gKCkgPT57XHJcbiAgICAgICAgc2V0QnV5UHJpY2UoKHByaWNlKT0+cHJpY2UrMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRvd24gPSAgKCk9PntcclxuICAgICAgICBzZXRCdXlQcmljZSgocHJpY2UpPT5wcmljZS0xKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7rs7TsnKA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjAgS1JXPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7rp6TsiJgg6rCA64qlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEtSVzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT7qsIDqsqkoS1JXKTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+e2J1eVByaWNlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRG93bn0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblVwfT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNlbGwgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgZGRkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1eUFuZFNlbGwgPSAoKT0+e1xyXG4gICAgY29uc3QgW2JzQnRuLCBzZXRic0J0bl0gPSB1c2VTdGF0ZSgnYnV5JylcclxuXHJcbiAgICBjb25zdCBidXkgPSAoKSA9PntcclxuICAgICAgICBzZXRic0J0bignYnV5JylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxsID0gKCkgPT57XHJcbiAgICAgICAgc2V0YnNCdG4oJ3NlbGwnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwiYnV5QW5kU2VsbEJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGJzQnRuID09PSAnYnV5Jyk/IGJ1eWNvbG9yIDoge319IG9uQ2xpY2s9e2J1eX0gY2xhc3NOYW1lPVwiYnV5QnRuXCI+66ek7IiYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsoYnNCdG4gPT09ICdzZWxsJyk/IHNlbGxjb2xvciA6IHt9fSBvbkNsaWNrPXtzZWxsfSBjbGFzc05hbWU9XCJzZWxsQnRuXCI+66ek64+EPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBic0J0biA9PT0gJ2J1eSdcclxuICAgICAgICAgICAgICAgICAgICA/IDxCdXkgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxTZWxsIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV5QW5kU2VsbCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImJ1eWNvbG9yIiwic2VsbGNvbG9yIiwiQnV5IiwiYnV5UHJpY2UiLCJzZXRCdXlQcmljZSIsIm9uVXAiLCJwcmljZSIsIm9uRG93biIsIlNlbGwiLCJidXlBbmRTZWxsIiwiYnNCdG4iLCJzZXRic0J0biIsImJ1eSIsInNlbGwiXSwic291cmNlUm9vdCI6IiJ9