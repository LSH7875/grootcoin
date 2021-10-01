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
  var accountNo = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPasswordError(userpw.value !== value); // 1234 === 1234 ture

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

    if (userpw.value !== passwordCheck) {
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
      userpw: userpw.value,
      accountNo: userphone.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
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
        lineNumber: 196,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "email",
        className: "inputBox",
        name: "userid",
        id: "userid",
        placeholder: "\uC544\uC774\uB514\uB85C \uC0AC\uC6A9\uD560 \uC774\uBA54\uC77C \uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "password",
        className: "inputBox",
        name: "userpw",
        id: "userpw",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "passwordBox1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "passwordBox2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC22B\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "10\uC790 \uC774\uC0C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "password",
        id: "pwChk",
        className: "inputBox",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 79
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        id: "username",
        name: "username",
        className: "inputBox",
        placeholder: "\uC774\uB984"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "AccountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 82
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
        lineNumber: 216,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
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
            lineNumber: 220,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 9
  }, _this);
};

_s(join, "mOVTAyLkNFa7owSTogbI8btxLSg=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi4wY2JjMzE3ODRmNmE2ZmZlMWQyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXZEQUFUO0tBQU1HOztBQXdJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBR0EsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDeEIsc0NBQW9CQSxDQUFDLENBQUNDLE1BQXRCO0FBQUEsUUFBT0MsS0FBUCxhQUFPQSxLQUFQOztBQUNBQyxJQUFBQSxnQkFBZ0IsQ0FBQ1AsTUFBTSxDQUFDTSxLQUFQLEtBQWlCQSxLQUFsQixDQUFoQixDQUZ3QixDQUVpQjs7QUFDekNFLElBQUFBLGdCQUFnQixDQUFDRixLQUFELENBQWhCO0FBQ0gsR0FKRDs7QUFNQSxrQkFBdUJYLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUFpQ2YsK0NBQVEsQ0FBQyxLQUFELENBQXpDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVQsQ0FBQyxFQUFJO0FBQ3BCUSxJQUFBQSxZQUFZLENBQUNSLENBQUMsQ0FBQ0MsTUFBRixDQUFTUyxPQUFULEtBQXFCLElB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YUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DSCxDQWxGRDs7R0FBTVI7VUFFYUosc0RBQ0FBLHNEQUNFQSxzREFDQ0E7OztBQStFdEIsK0RBQWVJLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQm94ID0gU3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6NDgwcHg7XHJcbiAgICBoZWlnaHQ6NDg1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMzJweDtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbiAgICB1bCxsaXtcclxuICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJj5oMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz5saXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBjb2xvcjojMTc3MmY4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ubWFyZ2luMjR7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgNXB4IDA7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5pbnB1dEZvbnR7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM0ODRkNTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LmlucHV0Qm94e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljY2QyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MXtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU1ZTg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gye1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzk4MThmO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94Mj5saXtcclxuICAgIGxpbmUtaGVpZ2h0OjE3cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDI+bGk6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIqIFwiO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5iaWdCdG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2NkMjtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzLGJvcmRlciAuMjVzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMTc3MmY4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG4+YTpob3ZlcntcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBhY2NvdW50Tm8gPSB1c2VJbnB1dCgnJylcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IodXNlcnB3LnZhbHVlICE9PSB2YWx1ZSkgLy8gMTIzNCA9PT0gMTIzNCB0dXJlXHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbdGVybSxzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Rlcm1FcnJvcixzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGVybSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihlLnRhcmdldC5jaGVja2VkICE9PSB0cnVlKSBcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmKHVzZXJwdy52YWx1ZSAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGVybSkge1xyXG4gICAgICAgICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdzp1c2VycHcudmFsdWUsXHJcbiAgICAgICAgICAgIGFjY291bnRObzp1c2VycGhvbmUudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxoMT7tmozsm5DqsIDsnoU8L2gxPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlnQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazJcIj7ikaAg7JW96rSA64+Z7J2YPC9saT48bGk+IC0tLS0tLS0tLS0tLS0gPC9saT4gPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMVwiPuKRoSDsoJXrs7TsnoXroKU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJpZFwiID7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiICBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VyaWRcIiBpZD1cInVzZXJpZFwiIHBsYWNlaG9sZGVyPVwi7JWE7J2065SU66GcIOyCrOyaqe2VoCDsnbTrqZTsnbwg7J6F66ClXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcnB3XCIgPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJwd1wiIGlkPVwidXNlcnB3XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7J6F66ClXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gxXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXNzd29yZEJveDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDrjIDrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDshozrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyIq+yekCDtj6ztlag8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTDsnpAg7J207IOBPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwicHdDaGtcIiA+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwd0Noa1wiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ZmV7J24XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcm5hbWVcIiA+7J2066aEPGJyIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cIkFjY291bnROb1wiID7qs4TsoozrsojtmLg8YnIgLz4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cIkFjY291bnROb1wiIGlkPVwiQWNjb3VudE5vXCIgcGxhY2Vob2xkZXI9XCLqs4TsoozrsojtmLgg7J6F66ClXCIgbWF4bGVuZ3RoPVwiMTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiaWdCdG5cIj48TGluayBocmVmPXtgL2B9PjxhPuuLpOydjDwvYT48L0xpbms+IDwvcD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBqb2luIl0sIm5hbWVzIjpbIkxpbmsiLCJTdHlsZWQiLCJ1c2VJbnB1dCIsInVzZVN0YXRlIiwiQm94IiwiZGl2Iiwiam9pbiIsInVzZXJpZCIsInVzZXJwdyIsInVzZXJuYW1lIiwiYWNjb3VudE5vIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRQYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiaGFuZGxlVGVybSIsImNoZWNrZWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkQ2hlY2siLCJjb25zb2xlIiwibG9nIiwidXNlcnBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==