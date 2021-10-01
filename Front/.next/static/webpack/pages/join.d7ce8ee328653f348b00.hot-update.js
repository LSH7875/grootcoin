"use strict";
self["webpackHotUpdate_N_E"]("pages/join",{

/***/ "./pages/join.jsx":
/*!************************!*\
  !*** ./pages/join.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_09_Desktop_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\grootcoin\\grootcoin\\Front\\pages\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_09_Desktop_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Box = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "join__Box",
  componentId: "sc-eu1z3o-0"
})(["margin:0 auto;width:480px;height:485px;padding:16px 24px 32px;margin-top:80px;padding-top:40px;text-align:center;ul,li{list-style:none;}a{text-decoration:none;width:100%;}&>h1{margin-bottom:24px;font-size:34px;}&>.bigCheck>li{display:inline-block;font-weight:bold;font-size:14px;}&>.bigCheck>.bigCheck1{font-weight:bold;color:#1772f8;}&>.bigCheck>.bigCheck2{margin-right:5px;}&>.a>.margin24{margin:24px 0 5px 0;}&>.a>.inputFont{float:left;font-size:14px;font-weight:bold;color:#484d55;text-align:left;}&>.a>.inputBox{box-sizing:border-box;display:block;padding-left:16px;padding-right:16px;width:100%;height:48px;border-radius:3px;border:1px solid #c9ccd2;background-color:#fff;font-size:14px;color:#18191c;-webkit-appearance:none;margin-top:5px;}&>.a>.passwordBox1{margin:8px 0 24px;padding:12px 16px;border:1px solid #e4e5e8;margin-left:0;background-color:#f8f8f9;}&>.a>.passwordBox1>.passwordBox2{text-align:left;color:#18191c;font-size:12px;font-weight:bold;box-sizing:border-box;position:relative;padding-left:9px;font-size:12px;color:#79818f;height:50px;}&>.a>.passwordBox1>.passwordBox2>li{line-height:17px;}&>.a>.passwordBox1>.passwordBox2>li:before{content:\"* \";text-indent:10px;}&>.a>.bigBtn{background-color:#c9ccd2;color:#79818f;opacity:.5;cursor:not-allowed;width:100%;padding:0 16px;height:48px;font-size:16px;display:inline-flex;flex:0 0 auto;justify-content:center;align-items:center;border-radius:3px;line-height:normal;font-weight:400;font-style:normal;transition:background .25s,border .25s;text-align:center;white-space:nowrap;cursor:pointer;touch-action:manipulation;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}&>.a>.bigBtn:hover{background:#1772f8;color:#fff;}&>.a>.bigBtn>a:hover{color:#fff;}"]);
_c = Box;

var join = function join() {
  _s();

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var userphone = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var userpassword = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPasswordError(userpassword.value !== value); // 1234 === 1234 ture

    setPasswordCheck(value);
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      term = _useState[0],
      setTerm = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      termError = _useState2[0],
      setTermError = _useState2[1];

  var handleTerm = function handleTerm(e) {
    setTermError(e.target.checked !== true);
    setTerm(e.target.checked);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (userpassword.value !== passwordCheck) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!term) {
      setTermError(true);
      return;
    }

    console.log({
      userid: userid.value,
      username: username.value,
      userpw: userpassword.value,
      userphone: userphone.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      className: "a",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userid",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "email",
        className: "inputBox",
        name: "userid",
        id: "userid",
        placeholder: "\uC544\uC774\uB514\uB85C \uC0AC\uC6A9\uD560 \uC774\uBA54\uC77C \uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "password",
        className: "inputBox",
        name: "userpw",
        id: "userpw",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "passwordBox1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "passwordBox2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC22B\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "10\uC790 \uC774\uC0C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "password",
        id: "pwChk",
        className: "inputBox",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 79
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        id: "username",
        name: "username",
        className: "inputBox",
        placeholder: "\uC774\uB984"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "AccountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 82
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        className: "inputBox",
        name: "AccountNo",
        id: "AccountNo",
        placeholder: "\uACC4\uC88C\uBC88\uD638 \uC785\uB825",
        maxlength: "11"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        type: "submit",
        className: "bigBtn",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            children: "\uB2E4\uC74C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 9
  }, _this);
};

_s(join, "RT3atT72fB4mbXyp99DZFJ6p79Q=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default];
});

/* harmony default export */ __webpack_exports__["default"] = (join);

var _c;

$RefreshReg$(_c, "Box");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi5kN2NlOGVlMzI4NjUzZjM0OGIwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXZEQUFUO0tBQU1HOztBQXdJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxNQUFNUyxZQUFZLEdBQUdULHdEQUFRLENBQUMsRUFBRCxDQUE3Qjs7QUFHQSxNQUFNVSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUN4QixzQ0FBb0JBLENBQUMsQ0FBQ0MsTUFBdEI7QUFBQSxRQUFPQyxLQUFQLGFBQU9BLEtBQVA7O0FBQ0FDLElBQUFBLGdCQUFnQixDQUFDTCxZQUFZLENBQUNJLEtBQWIsS0FBdUJBLEtBQXhCLENBQWhCLENBRndCLENBRXVCOztBQUMvQ0UsSUFBQUEsZ0JBQWdCLENBQUNGLEtBQUQsQ0FBaEI7QUFDSCxHQUpEOztBQU1BLGtCQUF1QlosK0NBQVEsQ0FBQyxLQUFELENBQS9CO0FBQUEsTUFBT2UsSUFBUDtBQUFBLE1BQVlDLE9BQVo7O0FBQ0EsbUJBQWlDaEIsK0NBQVEsQ0FBQyxLQUFELENBQXpDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVQsQ0FBQyxFQUFJO0FBQ3BCUSxJQUFBQSxZ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QTtBQUFBO0FBQUEsZUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0FuRkQ7O0dBQU1UO1VBRWFKLHNEQUNBQSxzREFDRUEsc0RBQ0NBLHNEQUNHQTs7O0FBK0V6QiwrREFBZUksSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9qb2luLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCb3ggPSBTdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDo0ODBweDtcclxuICAgIGhlaWdodDo0ODVweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweCAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICAgIHVsLGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmPmgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPmxpe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+LmJpZ0NoZWNrMXtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGNvbG9yOiMxNzcyZjg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+LmJpZ0NoZWNrMntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5tYXJnaW4yNHtcclxuICAgICAgICBtYXJnaW46IDI0cHggMCA1cHggMDsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LmlucHV0Rm9udHtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzQ4NGQ1NTtcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4uaW5wdXRCb3h7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWNjZDI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMxODE5MWM7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxe1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTVlODtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3OTgxOGY7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gyPmxpe1xyXG4gICAgbGluZS1oZWlnaHQ6MTdweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94Mj5saTpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDpcIiogXCI7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LmJpZ0J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljY2QyO1xyXG4gICAgICAgIGNvbG9yOiAjNzk4MThmO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMsYm9yZGVyIC4yNXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMxNzcyZjg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bj5hOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5jb25zdCBqb2luID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJwaG9uZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcnBhc3N3b3JkID0gdXNlSW5wdXQoJycpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IHsuLi5lLnRhcmdldH1cclxuICAgICAgICBzZXRQYXNzd29yZEVycm9yKHVzZXJwYXNzd29yZC52YWx1ZSAhPT0gdmFsdWUpIC8vIDEyMzQgPT09IDEyMzQgdHVyZVxyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2sodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Rlcm0sc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt0ZXJtRXJyb3Isc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRlcm0gPSBlID0+IHtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZS50YXJnZXQuY2hlY2tlZCAhPT0gdHJ1ZSkgXHJcbiAgICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZih1c2VycGFzc3dvcmQudmFsdWUgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRlcm0pIHtcclxuICAgICAgICAgICAgc2V0VGVybUVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgICAgIHVzZXJpZDp1c2VyaWQudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VycHc6dXNlcnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VycGhvbmU6dXNlcnBob25lLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8aDE+7ZqM7JuQ6rCA7J6FPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJpZ0NoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlnQ2hlY2syXCI+4pGgIOyVveq0gOuPmeydmDwvbGk+PGxpPiAtLS0tLS0tLS0tLS0tIDwvbGk+IDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazFcIj7ikaEg7KCV67O07J6F66ClPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJ1c2VyaWRcIiA+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiAgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwidXNlcmlkXCIgaWQ9XCJ1c2VyaWRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOuhnCDsgqzsmqntlaAg7J2066mU7J28IOyeheugpVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJwd1wiID7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiICBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VycHdcIiBpZD1cInVzZXJwd1wiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyeheugpVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkQm94MVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg64yA66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7siKvsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEw7J6QIOydtOyDgTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInB3Q2hrXCIgPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicHdDaGtcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgPuydtOumhDxiciAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJBY2NvdW50Tm9cIiA+6rOE7KKM67KI7Zi4PGJyIC8+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJBY2NvdW50Tm9cIiBpZD1cIkFjY291bnROb1wiIHBsYWNlaG9sZGVyPVwi6rOE7KKM67KI7Zi4IOyeheugpVwiIG1heGxlbmd0aD1cIjExXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmlnQnRuXCI+PExpbmsgaHJlZj17YC9gfT48YT7ri6TsnYw8L2E+PC9MaW5rPiA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgam9pbiJdLCJuYW1lcyI6WyJMaW5rIiwiU3R5bGVkIiwidXNlSW5wdXQiLCJ1c2VTdGF0ZSIsIkJveCIsImRpdiIsImpvaW4iLCJ1c2VyaWQiLCJ1c2VycHciLCJ1c2VybmFtZSIsInVzZXJwaG9uZSIsInVzZXJwYXNzd29yZCIsImhhbmRsZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0UGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkQ2hlY2siLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsImhhbmRsZVRlcm0iLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwYXNzd29yZENoZWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=