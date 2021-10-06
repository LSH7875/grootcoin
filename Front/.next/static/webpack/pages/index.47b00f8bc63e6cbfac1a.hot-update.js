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
    var roopws = setTimeout(function () {
      console.log(setContent(content));
    }, 1000);
    return function () {
      return clearTimeout(roopws);
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
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: ["Var A: ", varA]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
    lineNumber: 55,
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
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        style: contract === true ? contractedcolor : {},
        onClick: contracted,
        className: "contracted",
        children: "\uCCB4\uACB0\uB0B4\uC5ED"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this), contract === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PreContract, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Contracted, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdiMDBmOGJjNjNlNmNiZmFjMWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1HLGdCQUFnQixHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHO0FBQUUsa0JBQWdCLDhCQUFsQjtBQUFrRCxXQUFTO0FBQTNELENBQXhCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFdEIsa0JBQThCTCwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPTSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3QlAsK0NBQVEsQ0FBQyxDQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHVCw2Q0FBTSxDQUFDLElBQUQsQ0FBakI7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pRLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLElBQUlDLFNBQUosQ0FBYyxxQkFBZCxDQUFiOztBQUNBRixJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0UsTUFBWCxHQUFvQjtBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBcEI7O0FBQ0FMLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXSyxPQUFYLEdBQXFCO0FBQUEsYUFBTUYsT0FBTyxDQUFDQyxHQUFSLEVBQU47QUFBQSxLQUFyQixDQUhZLENBSVo7OztBQUNBLFdBQU8sWUFBTTtBQUNUTCxNQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV00sS0FBWDtBQUNILEtBRkQ7QUFHSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1nQixNQUFNLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzVCTCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsVUFBVSxDQUFDRCxPQUFELENBQXRCO0FBQ0gsS0FGd0IsRUFFdEIsSUFGc0IsQ0FBekI7QUFJQSxXQUFPO0FBQUEsYUFBTWMsWUFBWSxDQUFDRixNQUFELENBQWxCO0FBQUEsS0FBUDtBQUNELEdBUE0sRUFPSixDQUFDWixPQUFELENBUEksQ0FBVDtBQVNBSixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNbUIsT0FBTyxHQUFHRixVQUFVLENBQUM7QUFBQSxhQUFNVixPQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQWI7QUFBQSxLQUFELEVBQTBCLElBQTFCLENBQTFCO0FBQ0EsV0FBTztBQUFBLGFBQU1ZLFlBQVksQ0FBQ0MsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQUhNLEVBR0osQ0FBQ2IsSUFBRCxDQUhJLENBQVQ7QUFLQSxzQkFDSTtBQUFBLDRCQUVJO0FBQUEsOEJBSWFGLE9BSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFRSTtBQUFBLDRCQUNXRSxJQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0E1Q0Q7O0dBQU1IOztLQUFBQTs7QUE4Q04sSUFBTWlCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFFcEIsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBUEQ7O01BQU1BOztBQVNOLElBQU1DLFFBQVEsR0FBRyxvQkFBSztBQUFBOztBQUNsQixtQkFBK0J2QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdkM7QUFBQSxNQUFPdUIsUUFBUDtBQUFBLE1BQWdCQyxXQUFoQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCRCxJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQ3BCRixJQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFLLE1BQUUsRUFBQyxhQUFSO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFRLGFBQUssRUFBR0QsUUFBUSxLQUFLLEtBQWQsR0FBdUJwQixnQkFBdkIsR0FBMEMsRUFBekQ7QUFBNkQsZUFBTyxFQUFFc0IsV0FBdEU7QUFBbUYsaUJBQVMsRUFBQyxhQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxhQUFLLEVBQUdGLFFBQVEsS0FBSyxJQUFkLEdBQXNCbkIsZUFBdEIsR0FBd0MsRUFBdkQ7QUFBMkQsZUFBTyxFQUFFc0IsVUFBcEU7QUFBZ0YsaUJBQVMsRUFBQyxZQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBTVFILFFBQVEsS0FBSyxLQUFiLGdCQUNNLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUROLGdCQUVNLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0F4QkQ7O0lBQU1BOztBQTBCTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRyYWN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHByZUNvbnRyYWN0Y29sb3IgPSB7IFwiYm9yZGVyQm90dG9tXCI6IFwiM3B4IHNvbGlkIHJnYmEoMzIsIDIwMSwgMTUwKVwiLCBcImNvbG9yXCI6IFwiIzMzM1wiIH1cclxuY29uc3QgY29udHJhY3RlZGNvbG9yID0geyBcImJvcmRlckJvdHRvbVwiOiBcIjNweCBzb2xpZCByZ2JhKDMyLCAyMDEsIDE1MClcIiwgXCJjb2xvclwiOiBcIiMzMzNcIiB9XHJcblxyXG5jb25zdCBQcmVDb250cmFjdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3ZhckEsIHNldFZhckFdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB3cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjE6ODA4MFwiKTtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbmNsb3NlID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuICAgICAgICAvLyB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IChlKSA9PiBzZXRDb250ZW50KGUuZGF0YS5yZXBsYWNlKCdbJywnJykucmVwbGFjZSgnXScsJycpLnNwbGl0KCcsJykpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9vcHdzID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldENvbnRlbnQoY29udGVudCkpXHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChyb29wd3MpO1xyXG4gICAgICB9LCBbY29udGVudF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VmFyQSh2YXJBICsgMSksIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIH0sIFt2YXJBXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiB7Y29udGVudC5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57ZWxlbWVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pfSAqL31cclxuICAgICAgICAgICAgICAgY29udGVudDoge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICBWYXIgQToge3ZhckF9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDb250cmFjdGVkID0gKCkgPT57XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB6enp6XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRyYWN0ID0gKCkgPT57XHJcbiAgICBjb25zdCBbY29udHJhY3Qsc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgcHJlQ29udHJhY3QgPSAoKSA9PntcclxuICAgICAgICBzZXRDb250cmFjdChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cmFjdGVkID0gKCkgPT57XHJcbiAgICAgICAgc2V0Q29udHJhY3QodHJ1ZSlcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwiY29udHJhY3RCb3hcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhjb250cmFjdCA9PT0gZmFsc2UgKT8gcHJlQ29udHJhY3Rjb2xvciA6IHt9fSBvbkNsaWNrPXtwcmVDb250cmFjdH0gY2xhc3NOYW1lPVwicHJlQ29udHJhY3RcIj7rr7jssrTqsrAg7KO866y4PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsoY29udHJhY3QgPT09IHRydWUgKT8gY29udHJhY3RlZGNvbG9yIDoge319IG9uQ2xpY2s9e2NvbnRyYWN0ZWR9IGNsYXNzTmFtZT1cImNvbnRyYWN0ZWRcIj7ssrTqsrDrgrTsl608L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0ID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgID8gPFByZUNvbnRyYWN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8Q29udHJhY3RlZCAvPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cmFjdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByZUNvbnRyYWN0Y29sb3IiLCJjb250cmFjdGVkY29sb3IiLCJQcmVDb250cmFjdCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidmFyQSIsInNldFZhckEiLCJ3cyIsImN1cnJlbnQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImNsb3NlIiwicm9vcHdzIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJDb250cmFjdGVkIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInByZUNvbnRyYWN0IiwiY29udHJhY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=