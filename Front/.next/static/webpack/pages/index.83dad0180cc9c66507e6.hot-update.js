"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/main.jsx":
/*!************************!*\
  !*** ./pages/main.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/history */ "./components/history.jsx");
/* harmony import */ var _components_orderBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/orderBook */ "./components/orderBook.jsx");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chart */ "./components/chart.jsx");
/* harmony import */ var _components_buyAndSell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buyAndSell */ "./components/buyAndSell.jsx");
/* harmony import */ var _components_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contract */ "./components/contract.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\groot\\grootcoin\\Front\\pages\\main.jsx",
    _this = undefined;








var main = function main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    id: "mainContainer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "mainCon1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_chart__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "mainCon2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_history__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_orderBook__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_buyAndSell__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_contract__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODNkYWQwMTgwY2M5YzY2NTA3ZTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFJO0FBQ2Isc0JBQ0k7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw2QkFDSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLDhCQUNJO0FBQUEsK0JBQUksOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsK0JBQUksOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsK0JBQUksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQVNJO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBaEJEOztBQWtCQSwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2hpc3RvcnknXHJcbmltcG9ydCBPcmRlckJvb2sgZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlckJvb2snXHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NoYXJ0J1xyXG5pbXBvcnQgQnV5QW5kU2VsbCBmcm9tICcuLi9jb21wb25lbnRzL2J1eUFuZFNlbGwnIFxyXG5pbXBvcnQgQ29udHJhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250cmFjdCcgXHJcblxyXG5jb25zdCBtYWluID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Db24xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hhcnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluQ29uMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxIaXN0b3J5IC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48T3JkZXJCb29rIC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48QnV5QW5kU2VsbCAvPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udHJhY3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW4iXSwibmFtZXMiOlsiSGlzdG9yeSIsIk9yZGVyQm9vayIsIkNoYXJ0IiwiQnV5QW5kU2VsbCIsIkNvbnRyYWN0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=