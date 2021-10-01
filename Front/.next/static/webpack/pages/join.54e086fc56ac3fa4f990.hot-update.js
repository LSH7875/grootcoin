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
})(["margin:0 auto;width:480px;height:485px;padding:16px 24px 32px;margin-top:80px;padding-top:40px;text-align:center;ul,li{list-style:none;}a{text-decoration:none;width:100%;}&>h1{margin-bottom:24px;font-size:34px;}&>.bigCheck>li{display:inline-block;font-weight:bold;font-size:14px;}&>.bigCheck>.bigCheck1{font-weight:bold;color:#1772f8;}&>.bigCheck>.bigCheck2{margin-right:5px;}&>.a>.margin24{margin:24px 0 5px 0;}&>.a>.inputFont{float:left;font-size:14px;font-weight:bold;color:#484d55;text-align:left;}&>.a>.inputBox{box-sizing:border-box;display:block;padding-left:16px;padding-right:16px;width:100%;height:48px;border-radius:3px;border:1px solid #c9ccd2;background-color:#fff;font-size:14px;color:#18191c;-webkit-appearance:none;margin-top:5px;}&>.a>.passwordBox1{margin:8px 0 24px;padding:12px 16px;border:1px solid #e4e5e8;margin-left:0;background-color:#f8f8f9;}&>.a>.passwordBox1>.passwordBox2{text-align:left;color:#18191c;font-size:12px;font-weight:bold;box-sizing:border-box;position:relative;padding-left:9px;font-size:12px;color:#79818f;height:50px;}&>.a>.passwordBox1>.passwordBox2>li{line-height:17px;}&>.a>.passwordBox1>.passwordBox2>li:before{content:\"* \";text-indent:10px;}&>.a>.bigBtn{background-color:#c9ccd2;color:#79818f;opacity:.5;cursor:not-allowed;width:100%;padding:0 16px;height:48px;font-size:16px;display:inline-flex;flex:0 0 auto;justify-content:center;align-items:center;border-radius:3px;line-height:normal;font-weight:400;font-style:normal;transition:background .25s,border .25s;text-align:center;white-space:nowrap;cursor:pointer;touch-action:manipulation;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}&>.a>.bigBtn:hover{background:#1772f8;color:#fff;}&>.a>.bigBtn>a:hover{color:#fff;}&>.a>.error{text-align:left;}"]);
_c = Box;

var join = function join() {
  _s();

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var accountNo = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      pwChk = _useState[0],
      setPwChk = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      pwError = _useState2[0],
      setPwError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      accountError = _useState3[0],
      setAccountError = _useState3[1];

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPwError(userpw.value !== value); // 1234 === 1234 ture

    setPwChk(value);
  };

  var handleAccount = function handleAccount(e) {
    var _e$target2 = _objectSpread({}, e.target),
        value = _e$target2.value;

    setAccountError(accountNo.value.length !== 11);
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      term = _useState4[0],
      setTerm = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      termError = _useState5[0],
      setTermError = _useState5[1];

  var handleTerm = function handleTerm(e) {
    setTermError(e.target.checked !== true);
    setTerm(e.target.checked);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (userpw.value !== pwChk) {
      setPwError(true);
      return;
    } else {
      setPwError(false);
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
      lineNumber: 201,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: "a",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userid",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
        lineNumber: 208,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        className: "inputBox",
        name: "userpw",
        id: "userpw",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "passwordBox1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "passwordBox2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC22B\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "10\uC790 \uC774\uC0C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "password",
        value: pwChk,
        id: "pwChk",
        onChange: handlePassword,
        className: "inputBox",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }, _this), pwError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 30
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 79
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, username), {}, {
        id: "username",
        name: "username",
        className: "inputBox",
        placeholder: "\uC774\uB984"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "accountNo",
        onChange: handleAccount,
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 106
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
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
        lineNumber: 228,
        columnNumber: 17
      }, _this), accountError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 35
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
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
            lineNumber: 234,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 9
  }, _this);
};

_s(join, "7wNdikAOJwclxC/CEY05Vibvbd8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi41NGUwODZmYzU2YWMzZmE0Zjk5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsOHdEQUFUO0tBQU1HOztBQTRJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBRUEsa0JBQXlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFPUSxLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFDQSxtQkFBNkJULCtDQUFRLENBQUMsS0FBRCxDQUFyQztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFlQyxVQUFmOztBQUNBLG1CQUF1Q1gsK0NBQVEsQ0FBQyxLQUFELENBQS9DO0FBQUEsTUFBT1ksWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUN4QixzQ0FBb0JBLENBQUMsQ0FBQ0MsTUFBdEI7QUFBQSxRQUFPQyxLQUFQLGFBQU9BLEtBQVA7O0FBQ0FOLElBQUFBLFVBQVUsQ0FBQ04sTUFBTSxDQUFDWSxLQUFQLEtBQWlCQSxLQUFsQixDQUFWLENBRndCLENBRVc7O0FBQ25DUixJQUFBQSxRQUFRLENBQUNRLEtBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBSCxDQUFDLEVB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d2VicGFjazovL19OX0UvLi9wYWdlcy9qb2luLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCb3ggPSBTdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDo0ODBweDtcclxuICAgIGhlaWdodDo0ODVweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweCAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICAgIHVsLGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmPmgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPmxpe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+LmJpZ0NoZWNrMXtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGNvbG9yOiMxNzcyZjg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+LmJpZ0NoZWNrMntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5tYXJnaW4yNHtcclxuICAgICAgICBtYXJnaW46IDI0cHggMCA1cHggMDsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LmlucHV0Rm9udHtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzQ4NGQ1NTtcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4uaW5wdXRCb3h7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWNjZDI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMxODE5MWM7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxe1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTVlODtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3OTgxOGY7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gyPmxpe1xyXG4gICAgbGluZS1oZWlnaHQ6MTdweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94Mj5saTpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDpcIiogXCI7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LmJpZ0J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljY2QyO1xyXG4gICAgICAgIGNvbG9yOiAjNzk4MThmO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMsYm9yZGVyIC4yNXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMxNzcyZjg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bj5hOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4uZXJyb3J7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBhY2NvdW50Tm8gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICBjb25zdCBbcHdDaGssc2V0UHdDaGtdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcHdFcnJvcixzZXRQd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2FjY291bnRFcnJvcixzZXRBY2NvdW50RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFB3RXJyb3IodXNlcnB3LnZhbHVlICE9PSB2YWx1ZSkgLy8gMTIzNCA9PT0gMTIzNCB0dXJlXHJcbiAgICAgICAgc2V0UHdDaGsodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjb3VudCA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0QWNjb3VudEVycm9yKGFjY291bnROby52YWx1ZS5sZW5ndGggIT09IDExKVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3Rlcm0sc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt0ZXJtRXJyb3Isc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRlcm0gPSBlID0+IHtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZS50YXJnZXQuY2hlY2tlZCAhPT0gdHJ1ZSkgXHJcbiAgICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZih1c2VycHcudmFsdWUgIT09IHB3Q2hrKSB7XHJcbiAgICAgICAgICAgIHNldFB3RXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UHdFcnJvcihmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgIHNldFRlcm1FcnJvcih0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICB1c2VyaWQ6dXNlcmlkLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcnB3OnVzZXJwdy52YWx1ZSxcclxuICAgICAgICAgICAgYWNjb3VudE5vOmFjY291bnROby52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPGgxPu2ajOybkOqwgOyehTwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaWdDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMlwiPuKRoCDslb3qtIDrj5nsnZg8L2xpPjxsaT4gLS0tLS0tLS0tLS0tLSA8L2xpPiA8bGkgY2xhc3NOYW1lPVwiYmlnQ2hlY2sxXCI+4pGhIOygleuztOyeheugpTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcmlkXCIgPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgey4uLnVzZXJpZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwidXNlcmlkXCIgaWQ9XCJ1c2VyaWRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOuhnCDsgqzsmqntlaAg7J2066mU7J28IOyeheugpVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJwd1wiID7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJwd1wiIGlkPVwidXNlcnB3XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7J6F66ClXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gxXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXNzd29yZEJveDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDrjIDrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyYgeusuCDshozrrLjsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuyIq+yekCDtj6ztlag8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTDsnpAg7J207IOBPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwicHdDaGtcIiA+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3B3Q2hrfSBpZD1cInB3Q2hrXCIgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiIC8+XHJcbiAgICAgICAgICAgICAgICB7IHB3RXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj4gfVxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJ1c2VybmFtZVwiID7snbTrpoQ8YnIgLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJuYW1lfSBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cImFjY291bnROb1wiIG9uQ2hhbmdlPXtoYW5kbGVBY2NvdW50fT7qs4TsoozrsojtmLg8YnIgLz4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5hY2NvdW50Tm99IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cImFjY291bnROb1wiIGlkPVwiYWNjb3VudE5vXCIgcGxhY2Vob2xkZXI9XCLqs4TsoozrsojtmLgg7J6F66ClXCIgbWF4bGVuZ3RoPVwiMTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgeyBhY2NvdW50RXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj4gfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJpZ0J0blwiPjxMaW5rIGhyZWY9e2AvYH0+PGE+64uk7J2MPC9hPjwvTGluaz4gPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGpvaW4iXSwibmFtZXMiOlsiTGluayIsIlN0eWxlZCIsInVzZUlucHV0IiwidXNlU3RhdGUiLCJCb3giLCJkaXYiLCJqb2luIiwidXNlcmlkIiwidXNlcnB3IiwidXNlcm5hbWUiLCJhY2NvdW50Tm8iLCJwd0NoayIsInNldFB3Q2hrIiwicHdFcnJvciIsInNldFB3RXJyb3IiLCJhY2NvdW50RXJyb3IiLCJzZXRBY2NvdW50RXJyb3IiLCJoYW5kbGVQYXNzd29yZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFjY291bnQiLCJsZW5ndGgiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsImhhbmRsZVRlcm0iLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9