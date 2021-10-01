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
      return price > 0 ? -1 : 0;
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
        className: "coinPrice",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: buyPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            className: "plusMinus",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                onClick: onDown,
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                onClick: onUp,
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
    lineNumber: 45,
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
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: bsBtn === 'sell' ? sellcolor : {},
        onClick: sell,
        className: "sellBtn",
        children: "\uB9E4\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), bsBtn === 'buy' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Buy, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sell, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTJkY2VmYjhmOGRhYmQ3OTQxM2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFFBQVEsR0FBRztBQUFFLGdCQUFjLGlCQUFoQjtBQUFtQyxXQUFTO0FBQTVDLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQUUsZ0JBQWMsaUJBQWhCO0FBQW1DLFdBQVM7QUFBNUMsQ0FBbEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkLGtCQUErQkgsK0NBQVEsQ0FBQyxDQUFELENBQXZDO0FBQUEsTUFBT0ksUUFBUDtBQUFBLE1BQWdCQyxXQUFoQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2RELElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQWY7QUFBQSxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1DLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUk7QUFDaEJILElBQUFBLFdBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBU0EsS0FBSyxHQUFDLENBQU4sR0FBVSxDQUFDLENBQVgsR0FBZSxDQUF4QjtBQUFBLEtBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFTSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxpQ0FDSTtBQUFJLHFCQUFTLEVBQUMsV0FBZDtBQUFBLG9DQUNJO0FBQUEscUNBQUk7QUFBUSx1QkFBTyxFQUFFSSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHFDQUFJO0FBQVEsdUJBQU8sRUFBRUYsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3QkgsQ0FuQ0Q7O0dBQU1IOztLQUFBQTs7QUFxQ04sSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNkLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQU5EOztNQUFNQTs7QUFRTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFJO0FBQUE7O0FBQ25CLG1CQUEwQlYsK0NBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT1csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSztBQUNiRCxJQUFBQSxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2RGLElBQUFBLFFBQVEsQ0FBQyxNQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQVEsYUFBSyxFQUFHRCxLQUFLLEtBQUssS0FBWCxHQUFtQlYsUUFBbkIsR0FBOEIsRUFBN0M7QUFBaUQsZUFBTyxFQUFFWSxHQUExRDtBQUErRCxpQkFBUyxFQUFDLFFBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFRLGFBQUssRUFBR0YsS0FBSyxLQUFLLE1BQVgsR0FBb0JULFNBQXBCLEdBQWdDLEVBQS9DO0FBQW1ELGVBQU8sRUFBRVksSUFBNUQ7QUFBa0UsaUJBQVMsRUFBQyxTQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBTVFILEtBQUssS0FBSyxLQUFWLGdCQUNNLDhEQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUROLGdCQUVNLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0F4QkQ7O0lBQU1EOztBQTBCTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1eUFuZFNlbGwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBidXljb2xvciA9IHsgXCJiYWNrZ3JvdW5kXCI6IFwicmdiYSgyMjUsMzUsNjcpXCIsIFwiY29sb3JcIjogXCIjZmZmXCIgfVxyXG5jb25zdCBzZWxsY29sb3IgPSB7IFwiYmFja2dyb3VuZFwiOiBcInJnYmEoMjMsOTksMTgyKVwiLCBcImNvbG9yXCI6IFwiI2ZmZlwiIH1cclxuXHJcbmNvbnN0IEJ1eSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtidXlQcmljZSxzZXRCdXlQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IG9uVXAgPSAoKSA9PntcclxuICAgICAgICBzZXRCdXlQcmljZSgocHJpY2UpPT5wcmljZSsxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRG93biA9ICAoKT0+e1xyXG4gICAgICAgIHNldEJ1eVByaWNlKChwcmljZSk9PnByaWNlPjAgPyAtMSA6IDApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPuuztOycoDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MCBLUlc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPuunpOyImCDqsIDriqU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjAgS1JXPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZUJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PuqwgOqyqShLUlcpPC9oNj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2luUHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e2J1eVByaWNlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGx1c01pbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtvbkRvd259Pi08L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17b25VcH0+KzwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+ICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTZWxsID0gKCkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIGRkZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBidXlBbmRTZWxsID0gKCk9PntcclxuICAgIGNvbnN0IFtic0J0biwgc2V0YnNCdG5dID0gdXNlU3RhdGUoJ2J1eScpXHJcblxyXG4gICAgY29uc3QgYnV5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0YnNCdG4oJ2J1eScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsbCA9ICgpID0+e1xyXG4gICAgICAgIHNldGJzQnRuKCdzZWxsJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cImJ1eUFuZFNlbGxCb3hcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhic0J0biA9PT0gJ2J1eScpPyBidXljb2xvciA6IHt9fSBvbkNsaWNrPXtidXl9IGNsYXNzTmFtZT1cImJ1eUJ0blwiPuunpOyImDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGJzQnRuID09PSAnc2VsbCcpPyBzZWxsY29sb3IgOiB7fX0gb25DbGljaz17c2VsbH0gY2xhc3NOYW1lPVwic2VsbEJ0blwiPuunpOuPhDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnNCdG4gPT09ICdidXknXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8QnV5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8U2VsbCAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1eUFuZFNlbGwiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJidXljb2xvciIsInNlbGxjb2xvciIsIkJ1eSIsImJ1eVByaWNlIiwic2V0QnV5UHJpY2UiLCJvblVwIiwicHJpY2UiLCJvbkRvd24iLCJTZWxsIiwiYnV5QW5kU2VsbCIsImJzQnRuIiwic2V0YnNCdG4iLCJidXkiLCJzZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==