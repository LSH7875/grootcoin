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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      varA = _useState2[0],
      setVarA = _useState2[1];

  var ws = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ws.current = new WebSocket("ws://127.0.0.1:8080");

    ws.current.onopen = function () {
      return console.log();
    };

    ws.current.onclose = function () {
      return console.log();
    }; // ws.current.onmessage = (e) => setContent(e.data.replace('[','').replace(']','').split(','))


    return function () {
      ws.current.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timeout0 = setTimeout(function () {
      return ws.current = new WebSocket("ws://127.0.0.1:8080");
    }, ws.current.onopen = function () {
      return console.log();
    }, ws.current.onclose = function () {
      return console.log();
    }, setContent(ws.current.onmessage.data.replace('[', '').replace(']', '').split(',')), 1000);
    return function () {
      return clearTimeout(timeout0);
    };
  }, [content]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setVarA(varA + 1);
    }, 1000);
    return function () {
      return clearTimeout(timeout);
    };
  }, [varA]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: ["content: ", content]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: ["Var A: ", varA]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(PreContract, "26WjpEu1FLeOM2O9VSpSg2b8RsI=");

_c = PreContract;

var Contracted = function Contracted() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "zzzz"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_c2 = Contracted;

var contract = function contract() {
  _s2();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      contract = _useState3[0],
      setContract = _useState3[1];

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
        lineNumber: 76,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: contract === true ? contractedcolor : {},
        onClick: contracted,
        className: "contracted",
        children: "\uCCB4\uACB0\uB0B4\uC5ED"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this), contract === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PreContract, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Contracted, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjgzZmRlYTNjZjg2NzliMzhiNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1HLGdCQUFnQixHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXhCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFdEIsa0JBQThCTCwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPTSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3QlAsK0NBQVEsQ0FBQyxDQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHVCw2Q0FBTSxDQUFDLElBQUQsQ0FBakI7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pRLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLElBQUlDLFNBQUosQ0FBYyxxQkFBZCxDQUFiOztBQUNBRixJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0UsTUFBWCxHQUFvQjtBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBcEI7O0FBQ0FMLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXSyxPQUFYLEdBQXFCO0FBQUEsYUFBTUYsT0FBTyxDQUFDQyxHQUFSLEVBQU47QUFBQSxLQUFyQixDQUhZLENBSVo7OztBQUNBLFdBQU8sWUFBTTtBQUNUTCxNQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV00sS0FBWDtBQUNILEtBRkQ7QUFHSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1nQixRQUFRLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGFBQzVCVCxFQUFFLENBQUNDLE9BQUgsR0FBYSxJQUFJQyxTQUFKLENBQWMscUJBQWQsQ0FEZTtBQUFBLEtBQUQsRUFFM0JGLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXRSxNQUFYLEdBQW9CO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxHQUFSLEVBQU47QUFBQSxLQUZPLEVBRzNCTCxFQUFFLENBQUNDLE9BQUgsQ0FBV0ssT0FBWCxHQUFxQjtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FITSxFQUkzQlIsVUFBVSxDQUFDRyxFQUFFLENBQUNDLE9BQUgsQ0FBV1MsU0FBWCxDQUFxQkMsSUFBckIsQ0FBMEJDLE9BQTFCLENBQWtDLEdBQWxDLEVBQXNDLEVBQXRDLEVBQTBDQSxPQUExQyxDQUFrRCxHQUFsRCxFQUFzRCxFQUF0RCxFQUEwREMsS0FBMUQsQ0FBZ0UsR0FBaEUsQ0FBRCxDQUppQixFQUl1RCxJQUp2RCxDQUEzQjtBQUtBLFdBQU87QUFBQSxhQUFNQyxZQUFZLENBQUNOLFFBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBRUQsR0FUTSxFQVNKLENBQUNaLE9BQUQsQ0FUSSxDQUFUO0FBV0FKLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU11QixPQUFPLEdBQUdOLFVBQVUsQ0FBQztBQUFBLGFBQU1WLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEtBQUQsRUFBMEIsSUFBMUIsQ0FBMUI7QUFDQSxXQUFPO0FBQUEsYUFBTWdCLFlBQVksQ0FBQ0MsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQUhNLEVBR0osQ0FBQ2pCLElBQUQsQ0FISSxDQUFUO0FBS0Esc0JBQ0k7QUFBQSw0QkFFSTtBQUFBLDhCQUlhRixPQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBQSw0QkFDV0UsSUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBOUNEOztHQUFNSDs7S0FBQUE7O0FBZ0ROLElBQU1xQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBRXBCLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQVBEOztNQUFNQTs7QUFTTixJQUFNQyxRQUFRLEdBQUcsb0JBQUs7QUFBQTs7QUFDbEIsbUJBQStCM0IsK0NBQVEsQ0FBQyxLQUFELENBQXZDO0FBQUEsTUFBTzJCLFFBQVA7QUFBQSxNQUFnQkMsV0FBaEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUNyQkQsSUFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUNwQkYsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBR0Esc0JBQ0k7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBUSxhQUFLLEVBQUdELFFBQVEsS0FBSyxLQUFkLEdBQXVCeEIsZ0JBQXZCLEdBQTBDLEVBQXpEO0FBQTZELGVBQU8sRUFBRTBCLFdBQXRFO0FBQW1GLGlCQUFTLEVBQUMsYUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsYUFBSyxFQUFHRixRQUFRLEtBQUssSUFBZCxHQUFzQnZCLGVBQXRCLEdBQXdDLEVBQXZEO0FBQTJELGVBQU8sRUFBRTBCLFVBQXBFO0FBQWdGLGlCQUFTLEVBQUMsWUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQU1RSCxRQUFRLEtBQUssS0FBYixnQkFDTSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETixnQkFFTSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBeEJEOztJQUFNQTs7QUEwQk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250cmFjdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBwcmVDb250cmFjdGNvbG9yID0geyBcImJvcmRlckJvdHRvbVwiOiBcIjNweCBzb2xpZCByZ2JhKDMyLCAyMDEsIDE1MClcIiwgXCJjb2xvclwiOiBcIiMzMzNcIiB9XHJcbmNvbnN0IGNvbnRyYWN0ZWRjb2xvciA9IHsgXCJib3JkZXJCb3R0b21cIjogXCIzcHggc29saWQgcmdiYSgzMiwgMjAxLCAxNTApXCIsIFwiY29sb3JcIjogXCIjMzMzXCIgfVxyXG5cclxuY29uc3QgUHJlQ29udHJhY3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt2YXJBLCBzZXRWYXJBXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3cy5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTI3LjAuMC4xOjgwODBcIik7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbm9wZW4gPSAoKSA9PiBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgIHdzLmN1cnJlbnQub25jbG9zZSA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgLy8gd3MuY3VycmVudC5vbm1lc3NhZ2UgPSAoZSkgPT4gc2V0Q29udGVudChlLmRhdGEucmVwbGFjZSgnWycsJycpLnJlcGxhY2UoJ10nLCcnKS5zcGxpdCgnLCcpKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQwID0gc2V0VGltZW91dCgoKSA9PiBcclxuICAgICAgICB3cy5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTI3LjAuMC4xOjgwODBcIiksXHJcbiAgICAgICAgd3MuY3VycmVudC5vbm9wZW4gPSAoKSA9PiBjb25zb2xlLmxvZygpLFxyXG4gICAgICAgIHdzLmN1cnJlbnQub25jbG9zZSA9ICgpID0+IGNvbnNvbGUubG9nKCksXHJcbiAgICAgICAgc2V0Q29udGVudCh3cy5jdXJyZW50Lm9ubWVzc2FnZS5kYXRhLnJlcGxhY2UoJ1snLCcnKS5yZXBsYWNlKCddJywnJykuc3BsaXQoJywnKSksIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dDApO1xyXG5cclxuICAgICAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFZhckEodmFyQSArIDEpLCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICB9LCBbdmFyQV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2NvbnRlbnQubWFwKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+e2VsZW1lbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX0gKi99XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgVmFyIEE6IHt2YXJBfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQ29udHJhY3RlZCA9ICgpID0+e1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgenp6elxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjb250cmFjdCA9ICgpID0+e1xyXG4gICAgY29uc3QgW2NvbnRyYWN0LHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHByZUNvbnRyYWN0ID0gKCkgPT57XHJcbiAgICAgICAgc2V0Q29udHJhY3QoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udHJhY3RlZCA9ICgpID0+e1xyXG4gICAgICAgIHNldENvbnRyYWN0KHRydWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRyYWN0Qm94XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsoY29udHJhY3QgPT09IGZhbHNlICk/IHByZUNvbnRyYWN0Y29sb3IgOiB7fX0gb25DbGljaz17cHJlQ29udHJhY3R9IGNsYXNzTmFtZT1cInByZUNvbnRyYWN0XCI+66+47LK06rKwIOyjvOusuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGNvbnRyYWN0ID09PSB0cnVlICk/IGNvbnRyYWN0ZWRjb2xvciA6IHt9fSBvbkNsaWNrPXtjb250cmFjdGVkfSBjbGFzc05hbWU9XCJjb250cmFjdGVkXCI+7LK06rKw64K07JetPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdCA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA/IDxQcmVDb250cmFjdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPENvbnRyYWN0ZWQgLz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwcmVDb250cmFjdGNvbG9yIiwiY29udHJhY3RlZGNvbG9yIiwiUHJlQ29udHJhY3QiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInZhckEiLCJzZXRWYXJBIiwid3MiLCJjdXJyZW50IiwiV2ViU29ja2V0Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9uY2xvc2UiLCJjbG9zZSIsInRpbWVvdXQwIiwic2V0VGltZW91dCIsIm9ubWVzc2FnZSIsImRhdGEiLCJyZXBsYWNlIiwic3BsaXQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiQ29udHJhY3RlZCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJwcmVDb250cmFjdCIsImNvbnRyYWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9