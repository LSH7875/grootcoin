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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, accountNo), {}, {
        className: "inputBox",
        name: "accountNo",
        id: "accountNo",
        placeholder: "\uACC4\uC88C\uBC88\uD638 \uC785\uB825",
        maxlength: "11"
      }), void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi44N2EwMDI3YTFjMDM5M2ZmYTI5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXZEQUFUO0tBQU1HOztBQXdJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBRUEsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDeEIsc0NBQW9CQSxDQUFDLENBQUNDLE1BQXRCO0FBQUEsUUFBT0MsS0FBUCxhQUFPQSxLQUFQOztBQUNBQyxJQUFBQSxnQkFBZ0IsQ0FBQ1AsTUFBTSxDQUFDTSxLQUFQLEtBQWlCQSxLQUFsQixDQUFoQixDQUZ3QixDQUVpQjs7QUFDekNFLElBQUFBLGdCQUFnQixDQUFDRixLQUFELENBQWhCO0FBQ0gsR0FKRDs7QUFNQSxrQkFBdUJYLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUFpQ2YsK0NBQVEsQ0FBQyxLQUFELENBQXpDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVQsQ0FBQyxFQUFJO0FBQ3BCUSxJQUFBQSxZQUFZLENBQUNSLENBQUMsQ0FBQ0MsTUFBRixDQUFTUyxPQUFULEtBQXFCLElB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LGlCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0FqRkQ7O0dBQU1KO1VBRWFKLHNEQUNBQSxzREFDRUEsc0RBQ0NBOzs7QUE4RXRCLCtEQUFlSSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pvaW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJveCA9IFN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjQ4MHB4O1xyXG4gICAgaGVpZ2h0OjQ4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gICAgdWwsbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICY+aDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+bGl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgY29sb3I6IzE3NzJmODtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+Lm1hcmdpbjI0e1xyXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDVweCAwOyAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uaW5wdXRGb250e1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNDg0ZDU1O1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5pbnB1dEJveHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5Y2NkMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDF7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNWU4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94MntcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgY29sb3I6ICMxODE5MWM7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDI+bGl7XHJcbiAgICBsaW5lLWhlaWdodDoxN3B4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gyPmxpOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OlwiKiBcIjtcclxuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uYmlnQnRue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNjZDI7XHJcbiAgICAgICAgY29sb3I6ICM3OTgxOGY7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyxib3JkZXIgLjI1cztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gICAgJj4uYT4uYmlnQnRuOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzE3NzJmODtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgJj4uYT4uYmlnQnRuPmE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuXHJcbmBcclxuXHJcbmNvbnN0IGpvaW4gPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgYWNjb3VudE5vID0gdXNlSW5wdXQoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IodXNlcnB3LnZhbHVlICE9PSB2YWx1ZSkgLy8gMTIzNCA9PT0gMTIzNCB0dXJlXHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbdGVybSxzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Rlcm1FcnJvcixzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGVybSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihlLnRhcmdldC5jaGVja2VkICE9PSB0cnVlKSBcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmKHVzZXJwdy52YWx1ZSAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGVybSkge1xyXG4gICAgICAgICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdzp1c2VycHcudmFsdWUsXHJcbiAgICAgICAgICAgIGFjY291bnRObzphY2NvdW50Tm8udmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxoMT7tmozsm5DqsIDsnoU8L2gxPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlnQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazJcIj7ikaAg7JW96rSA64+Z7J2YPC9saT48bGk+IC0tLS0tLS0tLS0tLS0gPC9saT4gPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMVwiPuKRoSDsoJXrs7TsnoXroKU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJpZFwiID7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi51c2VyaWR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJpZFwiIGlkPVwidXNlcmlkXCIgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTroZwg7IKs7Jqp7ZWgIOydtOuplOydvCDsnoXroKVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJ1c2VycHdcIiA+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcmlkfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VycHdcIiBpZD1cInVzZXJwd1wiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyeheugpVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkQm94MVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg64yA66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7siKvsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEw7J6QIOydtOyDgTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInB3Q2hrXCIgPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VyaWR9IGlkPVwicHdDaGtcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgPuydtOumhDxiciAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcmlkfSBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cImFjY291bnROb1wiID7qs4TsoozrsojtmLg8YnIgLz4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5hY2NvdW50Tm99IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cImFjY291bnROb1wiIGlkPVwiYWNjb3VudE5vXCIgcGxhY2Vob2xkZXI9XCLqs4TsoozrsojtmLgg7J6F66ClXCIgbWF4bGVuZ3RoPVwiMTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiaWdCdG5cIj48TGluayBocmVmPXtgL2B9PjxhPuuLpOydjDwvYT48L0xpbms+IDwvcD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBqb2luIl0sIm5hbWVzIjpbIkxpbmsiLCJTdHlsZWQiLCJ1c2VJbnB1dCIsInVzZVN0YXRlIiwiQm94IiwiZGl2Iiwiam9pbiIsInVzZXJpZCIsInVzZXJwdyIsInVzZXJuYW1lIiwiYWNjb3VudE5vIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRQYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiaGFuZGxlVGVybSIsImNoZWNrZWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkQ2hlY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==