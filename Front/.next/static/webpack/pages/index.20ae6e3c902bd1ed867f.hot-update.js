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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "priceBox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
        children: "\uAC00\uACA9(KRW)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
        className: "coinPrice"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: buyPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: onDown,
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: onUp,
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
    lineNumber: 40,
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
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: bsBtn === 'sell' ? sellcolor : {},
        onClick: sell,
        className: "sellBtn",
        children: "\uB9E4\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this), bsBtn === 'buy' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Buy, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sell, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBhZTZlM2M5MDJiZDFlZDg2N2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFFBQVEsR0FBRztBQUFFLGdCQUFjLGlCQUFoQjtBQUFtQyxXQUFTO0FBQTVDLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQUUsZ0JBQWMsaUJBQWhCO0FBQW1DLFdBQVM7QUFBNUMsQ0FBbEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkLGtCQUErQkgsK0NBQVEsQ0FBQyxDQUFELENBQXZDO0FBQUEsTUFBT0ksUUFBUDtBQUFBLE1BQWdCQyxXQUFoQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2RELElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQWY7QUFBQSxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1DLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUk7QUFDaEJILElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQWY7QUFBQSxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFJLGlCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLGtCQUFLSDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJO0FBQUEsK0JBQUk7QUFBUSxpQkFBTyxFQUFFSSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQUEsK0JBQUk7QUFBUSxpQkFBTyxFQUFFRixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQTlCRDs7R0FBTUg7O0tBQUFBOztBQWdDTixJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2Qsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBTkQ7O01BQU1BOztBQVFOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUk7QUFBQTs7QUFDbkIsbUJBQTBCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQ2JELElBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUs7QUFDZEYsSUFBQUEsUUFBUSxDQUFDLE1BQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBUSxhQUFLLEVBQUdELEtBQUssS0FBSyxLQUFYLEdBQW1CVixRQUFuQixHQUE4QixFQUE3QztBQUFpRCxlQUFPLEVBQUVZLEdBQTFEO0FBQStELGlCQUFTLEVBQUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsYUFBSyxFQUFHRixLQUFLLEtBQUssTUFBWCxHQUFvQlQsU0FBcEIsR0FBZ0MsRUFBL0M7QUFBbUQsZUFBTyxFQUFFWSxJQUE1RDtBQUFrRSxpQkFBUyxFQUFDLFNBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFNUUgsS0FBSyxLQUFLLEtBQVYsZ0JBQ00sOERBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE4sZ0JBRU0sOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQXhCRDs7SUFBTUQ7O0FBMEJOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV5QW5kU2VsbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGJ1eWNvbG9yID0geyBcImJhY2tncm91bmRcIjogXCJyZ2JhKDIyNSwzNSw2NylcIiwgXCJjb2xvclwiOiBcIiNmZmZcIiB9XHJcbmNvbnN0IHNlbGxjb2xvciA9IHsgXCJiYWNrZ3JvdW5kXCI6IFwicmdiYSgyMyw5OSwxODIpXCIsIFwiY29sb3JcIjogXCIjZmZmXCIgfVxyXG5cclxuY29uc3QgQnV5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2J1eVByaWNlLHNldEJ1eVByaWNlXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3Qgb25VcCA9ICgpID0+e1xyXG4gICAgICAgIHNldEJ1eVByaWNlKChwcmljZSk9PnByaWNlKzEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Eb3duID0gICgpPT57XHJcbiAgICAgICAgc2V0QnV5UHJpY2UoKHByaWNlKT0+cHJpY2UtMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+67O07JygPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEtSVzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+66ek7IiYIOqwgOuKpTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MCBLUlc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlQm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+6rCA6rKpKEtSVyk8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvaW5QcmljZVwiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+e2J1eVByaWNlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtvbkRvd259Pi08L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17b25VcH0+KzwvYnV0dG9uPjwvbGk+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTZWxsID0gKCkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIGRkZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBidXlBbmRTZWxsID0gKCk9PntcclxuICAgIGNvbnN0IFtic0J0biwgc2V0YnNCdG5dID0gdXNlU3RhdGUoJ2J1eScpXHJcblxyXG4gICAgY29uc3QgYnV5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0YnNCdG4oJ2J1eScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsbCA9ICgpID0+e1xyXG4gICAgICAgIHNldGJzQnRuKCdzZWxsJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cImJ1eUFuZFNlbGxCb3hcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhic0J0biA9PT0gJ2J1eScpPyBidXljb2xvciA6IHt9fSBvbkNsaWNrPXtidXl9IGNsYXNzTmFtZT1cImJ1eUJ0blwiPuunpOyImDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGJzQnRuID09PSAnc2VsbCcpPyBzZWxsY29sb3IgOiB7fX0gb25DbGljaz17c2VsbH0gY2xhc3NOYW1lPVwic2VsbEJ0blwiPuunpOuPhDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnNCdG4gPT09ICdidXknXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8QnV5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8U2VsbCAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1eUFuZFNlbGwiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJidXljb2xvciIsInNlbGxjb2xvciIsIkJ1eSIsImJ1eVByaWNlIiwic2V0QnV5UHJpY2UiLCJvblVwIiwicHJpY2UiLCJvbkRvd24iLCJTZWxsIiwiYnV5QW5kU2VsbCIsImJzQnRuIiwic2V0YnNCdG4iLCJidXkiLCJzZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==