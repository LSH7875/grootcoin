"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/contract.jsx":
/*!*********************************!*\
  !*** ./components/contract.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\KGA_19\\1006\\grootcoin\\Front\\components\\contract.jsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var preContractcolor = {
  "borderBottom": "3px solid rgba(32, 201, 150)",
  "color": "#333"
};
var contractedcolor = {
  "borderBottom": "3px solid rgba(32, 201, 150)",
  "color": "#333"
};

var PreContract = function PreContract() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      content = _useState[0],
      setContent = _useState[1];

  var ws = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ws.current = new WebSocket("ws://127.0.0.1:8080");

    ws.current.onopen = function () {
      return console.log();
    };

    ws.current.onclose = function () {
      return console.log();
    };

    return function () {
      ws.current.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ws.current.onmessage = function (e) {
      return setContent("websocket data : ".concat(e.data.replace('[', '').replace(']', '').split(',')));
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(PreContract, "M8pFyFTXZ6by1Qu+8bCztBbYgGA=");

_c = PreContract;

var Contracted = function Contracted() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "zzzz"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_c2 = Contracted;

var contract = function contract() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      contract = _useState2[0],
      setContract = _useState2[1];

  var preContract = function preContract() {
    setContract(false);
  };

  var contracted = function contracted() {
    setContract(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    id: "contractBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: contract === false ? preContractcolor : {},
        onClick: preContract,
        className: "preContract",
        children: "\uBBF8\uCCB4\uACB0 \uC8FC\uBB38"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: contract === true ? contractedcolor : {},
        onClick: contracted,
        className: "contracted",
        children: "\uCCB4\uACB0\uB0B4\uC5ED"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), contract === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PreContract, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Contracted, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s2(contract, "axk5hrQxHu0IA4gWBvz+jgclsmA=");

/* harmony default export */ __webpack_exports__["default"] = (contract);

var _c, _c2;

$RefreshReg$(_c, "PreContract");
$RefreshReg$(_c2, "Contracted");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmZiYjAxNmZhZGM4YjJkYTBkYTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1HLGdCQUFnQixHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXhCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFdEIsa0JBQThCTCwrQ0FBUSxFQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsRUFBRSxHQUFHUCw2Q0FBTSxDQUFDLElBQUQsQ0FBakI7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pNLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLElBQUlDLFNBQUosQ0FBYyxxQkFBZCxDQUFiOztBQUNBRixJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0UsTUFBWCxHQUFvQjtBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBcEI7O0FBQ0FMLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXSyxPQUFYLEdBQXFCO0FBQUEsYUFBTUYsT0FBTyxDQUFDQyxHQUFSLEVBQU47QUFBQSxLQUFyQjs7QUFFQSxXQUFPLFlBQU07QUFDVEwsTUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdNLEtBQVg7QUFDSCxLQUZEO0FBR0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBYixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWk0sSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdPLFNBQVgsR0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9WLFVBQVUsNEJBQXFCVSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsT0FBUCxDQUFlLEdBQWYsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLEdBQS9CLEVBQW1DLEVBQW5DLEVBQXVDQyxLQUF2QyxDQUE2QyxHQUE3QyxDQUFyQixFQUFqQjtBQUFBLEtBQXZCO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJO0FBQUEsY0FDS2Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXpCRDs7R0FBTUQ7O0tBQUFBOztBQTJCTixJQUFNZ0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUVwQixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FQRDs7TUFBTUE7O0FBU04sSUFBTUMsUUFBUSxHQUFHLG9CQUFLO0FBQUE7O0FBQ2xCLG1CQUErQnRCLCtDQUFRLENBQUMsS0FBRCxDQUF2QztBQUFBLE1BQU9zQixRQUFQO0FBQUEsTUFBZ0JDLFdBQWhCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDckJELElBQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDcEJGLElBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxHQUZEOztBQUdBLHNCQUNJO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQVEsYUFBSyxFQUFHRCxRQUFRLEtBQUssS0FBZCxHQUF1Qm5CLGdCQUF2QixHQUEwQyxFQUF6RDtBQUE2RCxlQUFPLEVBQUVxQixXQUF0RTtBQUFtRixpQkFBUyxFQUFDLGFBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFRLGFBQUssRUFBR0YsUUFBUSxLQUFLLElBQWQsR0FBc0JsQixlQUF0QixHQUF3QyxFQUF2RDtBQUEyRCxlQUFPLEVBQUVxQixVQUFwRTtBQUFnRixpQkFBUyxFQUFDLFlBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFNUUgsUUFBUSxLQUFLLEtBQWIsZ0JBQ00sOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE4sZ0JBRU0sOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQXhCRDs7SUFBTUE7O0FBMEJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udHJhY3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgcHJlQ29udHJhY3Rjb2xvciA9IHsgXCJib3JkZXJCb3R0b21cIjogXCIzcHggc29saWQgcmdiYSgzMiwgMjAxLCAxNTApXCIsIFwiY29sb3JcIjogXCIjMzMzXCIgfVxyXG5jb25zdCBjb250cmFjdGVkY29sb3IgPSB7IFwiYm9yZGVyQm90dG9tXCI6IFwiM3B4IHNvbGlkIHJnYmEoMzIsIDIwMSwgMTUwKVwiLCBcImNvbG9yXCI6IFwiIzMzM1wiIH1cclxuXHJcbmNvbnN0IFByZUNvbnRyYWN0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCB3cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjE6ODA4MFwiKTtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbmNsb3NlID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IChlKSA9PiBzZXRDb250ZW50KGB3ZWJzb2NrZXQgZGF0YSA6ICR7ZS5kYXRhLnJlcGxhY2UoJ1snLCcnKS5yZXBsYWNlKCddJywnJykuc3BsaXQoJywnKX1gKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IENvbnRyYWN0ZWQgPSAoKSA9PntcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHp6enpcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udHJhY3QgPSAoKSA9PntcclxuICAgIGNvbnN0IFtjb250cmFjdCxzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBwcmVDb250cmFjdCA9ICgpID0+e1xyXG4gICAgICAgIHNldENvbnRyYWN0KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYWN0ZWQgPSAoKSA9PntcclxuICAgICAgICBzZXRDb250cmFjdCh0cnVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250cmFjdEJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGNvbnRyYWN0ID09PSBmYWxzZSApPyBwcmVDb250cmFjdGNvbG9yIDoge319IG9uQ2xpY2s9e3ByZUNvbnRyYWN0fSBjbGFzc05hbWU9XCJwcmVDb250cmFjdFwiPuuvuOyytOqysCDso7zrrLg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhjb250cmFjdCA9PT0gdHJ1ZSApPyBjb250cmFjdGVkY29sb3IgOiB7fX0gb25DbGljaz17Y29udHJhY3RlZH0gY2xhc3NOYW1lPVwiY29udHJhY3RlZFwiPuyytOqysOuCtOyXrTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3QgPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8UHJlQ29udHJhY3QgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxDb250cmFjdGVkIC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicHJlQ29udHJhY3Rjb2xvciIsImNvbnRyYWN0ZWRjb2xvciIsIlByZUNvbnRyYWN0IiwiY29udGVudCIsInNldENvbnRlbnQiLCJ3cyIsImN1cnJlbnQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImNsb3NlIiwib25tZXNzYWdlIiwiZSIsImRhdGEiLCJyZXBsYWNlIiwic3BsaXQiLCJDb250cmFjdGVkIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInByZUNvbnRyYWN0IiwiY29udHJhY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=