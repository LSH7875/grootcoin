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
      accountNo: accountNo.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
        lineNumber: 195,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "email"
      }, userid), {}, {
        className: "inputBox",
        name: "userid",
        id: "userid",
        placeholder: "\uC544\uC774\uB514\uB85C \uC0AC\uC6A9\uD560 \uC774\uBA54\uC77C \uC785\uB825"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userid), {}, {
        className: "inputBox",
        name: "userpw",
        id: "userpw",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "passwordBox1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "passwordBox2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC22B\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "10\uC790 \uC774\uC0C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userid), {}, {
        id: "pwChk",
        className: "inputBox",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 79
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        id: "username",
        name: "username",
        className: "inputBox",
        placeholder: "\uC774\uB984"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "accountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 82
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        className: "inputBox",
        name: "accountNo",
        id: "accountNo",
        placeholder: "\uACC4\uC88C\uBC88\uD638 \uC785\uB825",
        maxlength: "11"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
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
            lineNumber: 219,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi5mNmJjOGQwZmFjYjQ3ZTE5ODEzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXZEQUFUO0tBQU1HOztBQXdJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBRUEsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDeEIsc0NBQW9CQSxDQUFDLENBQUNDLE1BQXRCO0FBQUEsUUFBT0MsS0FBUCxhQUFPQSxLQUFQOztBQUNBQyxJQUFBQSxnQkFBZ0IsQ0FBQ1AsTUFBTSxDQUFDTSxLQUFQLEtBQWlCQSxLQUFsQixDQUFoQixDQUZ3QixDQUVpQjs7QUFDekNFLElBQUFBLGdCQUFnQixDQUFDRixLQUFELENBQWhCO0FBQ0gsR0FKRDs7QUFNQSxrQkFBdUJYLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUFpQ2YsK0NBQVEsQ0FBQyxLQUFELENBQXpDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVQsQ0FBQyxFQUFJO0FBQ3BCUSxJQUFBQSxZQUFZLENBQUNSLENBQUMsQ0FBQ0MsTUFBRixDQUFTUyxPQUFULEtBQXFCLElB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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DSCxDQWpGRDs7R0FBTUQ7VUFFYUosc0RBQ0FBLHNEQUNFQSxzREFDQ0E7OztBQThFdEIsK0RBQWVJLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQm94ID0gU3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6NDgwcHg7XHJcbiAgICBoZWlnaHQ6NDg1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMzJweDtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbiAgICB1bCxsaXtcclxuICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJj5oMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz5saXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBjb2xvcjojMTc3MmY4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ubWFyZ2luMjR7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgNXB4IDA7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5pbnB1dEZvbnR7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM0ODRkNTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LmlucHV0Qm94e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljY2QyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MXtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU1ZTg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gye1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzk4MThmO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94Mj5saXtcclxuICAgIGxpbmUtaGVpZ2h0OjE3cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDI+bGk6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIqIFwiO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5iaWdCdG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2NkMjtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzLGJvcmRlciAuMjVzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMTc3MmY4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG4+YTpob3ZlcntcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBhY2NvdW50Tm8gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcih1c2VycHcudmFsdWUgIT09IHZhbHVlKSAvLyAxMjM0ID09PSAxMjM0IHR1cmVcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVybUVycm9yLHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUZXJtID0gZSA9PiB7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGUudGFyZ2V0LmNoZWNrZWQgIT09IHRydWUpIFxyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZClcclxuICAgIH0gICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYodXNlcnB3LnZhbHVlICE9PSBwYXNzd29yZENoZWNrKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgIHNldFRlcm1FcnJvcih0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICB1c2VyaWQ6dXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcnB3OnVzZXJwdy52YWx1ZSxcclxuICAgICAgICAgICAgYWNjb3VudE5vOmFjY291bnROby52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPGgxPu2ajOybkOqwgOyehTwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaWdDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMlwiPuKRoCDslb3qtIDrj5nsnZg8L2xpPjxsaT4gLS0tLS0tLS0tLS0tLSA8L2xpPiA8bGkgY2xhc3NOYW1lPVwiYmlnQ2hlY2sxXCI+4pGhIOygleuztOyeheugpTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcmlkXCIgPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgey4uLnVzZXJpZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwidXNlcmlkXCIgaWQ9XCJ1c2VyaWRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOuhnCDsgqzsmqntlaAg7J2066mU7J28IOyeheugpVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJwd1wiID7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VyaWR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJwd1wiIGlkPVwidXNlcnB3XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7J6F66ClXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gxXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXNzd29yZEJveDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDrjIDrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDshozrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyIq+yekCDtj6ztlag8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTDsnpAg7J207IOBPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwicHdDaGtcIiA+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgey4uLnVzZXJpZH0gaWQ9XCJwd0Noa1wiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ZmV7J24XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcm5hbWVcIiA+7J2066aEPGJyIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyaWR9IGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwiYWNjb3VudE5vXCIgPuqzhOyijOuyiO2YuDxiciAvPiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwiYWNjb3VudE5vXCIgaWQ9XCJhY2NvdW50Tm9cIiBwbGFjZWhvbGRlcj1cIuqzhOyijOuyiO2YuCDsnoXroKVcIiBtYXhsZW5ndGg9XCIxMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJpZ0J0blwiPjxMaW5rIGhyZWY9e2AvYH0+PGE+64uk7J2MPC9hPjwvTGluaz4gPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGpvaW4iXSwibmFtZXMiOlsiTGluayIsIlN0eWxlZCIsInVzZUlucHV0IiwidXNlU3RhdGUiLCJCb3giLCJkaXYiLCJqb2luIiwidXNlcmlkIiwidXNlcnB3IiwidXNlcm5hbWUiLCJhY2NvdW50Tm8iLCJoYW5kbGVQYXNzd29yZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZENoZWNrIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJoYW5kbGVUZXJtIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmRDaGVjayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9