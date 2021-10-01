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

    setAccountError(account);
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
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 82
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
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
            lineNumber: 232,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi5kYTQ4YzBmZDI2OTJmOTJkM2ViMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsOHdEQUFUO0tBQU1HOztBQTRJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBRUEsa0JBQXlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFPUSxLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFDQSxtQkFBNkJULCtDQUFRLENBQUMsS0FBRCxDQUFyQztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFlQyxVQUFmOztBQUNBLG1CQUF1Q1gsK0NBQVEsQ0FBQyxLQUFELENBQS9DO0FBQUEsTUFBT1ksWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUN4QixzQ0FBb0JBLENBQUMsQ0FBQ0MsTUFBdEI7QUFBQSxRQUFPQyxLQUFQLGFBQU9BLEtBQVA7O0FBQ0FOLElBQUFBLFVBQVUsQ0FBQ04sTUFBTSxDQUFDWSxLQUFQLEtBQWlCQSxLQUFsQixDQUFWLENBRndCLENBRVc7O0FBQ25DUixJQUFBQSxRQUFRLENBQUNRLEtBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBSCxDQUFDLEVB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QUM7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CSixlQXFCSTtBQUFPLGlCQUFTLEVBQUMsb0JBQWpCO0FBQXNDLGFBQUssTUFBM0M7QUFBNEMsZUFBSSxXQUFoRDtBQUFBLDREQUFpRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosZUFzQkk7QUFBTyxZQUFJLEVBQUM7QUFBWixTQUF1QkMsU0FBdkI7QUFBa0MsaUJBQVMsRUFBQyxVQUE1QztBQUF1RCxZQUFJLEVBQUMsV0FBNUQ7QUFBd0UsVUFBRSxFQUFDLFdBQTNFO0FBQXVGLG1CQUFXLEVBQUMsdUNBQW5HO0FBQTZHLGlCQUFTLEVBQUM7QUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCSixlQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKLGVBMEJJO0FBQUcsWUFBSSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyxRQUEzQjtBQUFBLGdDQUFvQyw4REFBQyxrREFBRDtBQUFNLGNBQUksS0FBVjtBQUFBLGlDQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0ExRkQ7O0dBQU1KO1VBRWFKLHNEQUNBQSxzREFDRUEsc0RBQ0NBOzs7QUF1RnRCLCtEQUFlSSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pvaW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJveCA9IFN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjQ4MHB4O1xyXG4gICAgaGVpZ2h0OjQ4NXB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gICAgdWwsbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICY+aDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+bGl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgY29sb3I6IzE3NzJmODtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+Lm1hcmdpbjI0e1xyXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDVweCAwOyAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uaW5wdXRGb250e1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNDg0ZDU1O1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5pbnB1dEJveHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5Y2NkMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDF7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNWU4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94MntcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgY29sb3I6ICMxODE5MWM7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDI+bGl7XHJcbiAgICBsaW5lLWhlaWdodDoxN3B4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gyPmxpOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OlwiKiBcIjtcclxuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uYmlnQnRue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNjZDI7XHJcbiAgICAgICAgY29sb3I6ICM3OTgxOGY7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyxib3JkZXIgLjI1cztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gICAgJj4uYT4uYmlnQnRuOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzE3NzJmODtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgJj4uYT4uYmlnQnRuPmE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5lcnJvcntcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5jb25zdCBqb2luID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IGFjY291bnRObyA9IHVzZUlucHV0KCcnKVxyXG5cclxuICAgIGNvbnN0IFtwd0NoayxzZXRQd0Noa10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwd0Vycm9yLHNldFB3RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWNjb3VudEVycm9yLHNldEFjY291bnRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0UHdFcnJvcih1c2VycHcudmFsdWUgIT09IHZhbHVlKSAvLyAxMjM0ID09PSAxMjM0IHR1cmVcclxuICAgICAgICBzZXRQd0Noayh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NvdW50ID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IHsuLi5lLnRhcmdldH1cclxuICAgICAgICBzZXRBY2NvdW50RXJyb3IoYWNjb3VudClcclxuICAgIH1cclxuICAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVybUVycm9yLHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUZXJtID0gZSA9PiB7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGUudGFyZ2V0LmNoZWNrZWQgIT09IHRydWUpIFxyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZClcclxuICAgIH0gICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYodXNlcnB3LnZhbHVlICE9PSBwd0Noaykge1xyXG4gICAgICAgICAgICBzZXRQd0Vycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFB3RXJyb3IoZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGVybSkge1xyXG4gICAgICAgICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdzp1c2VycHcudmFsdWUsXHJcbiAgICAgICAgICAgIGFjY291bnRObzphY2NvdW50Tm8udmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxoMT7tmozsm5DqsIDsnoU8L2gxPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlnQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazJcIj7ikaAg7JW96rSA64+Z7J2YPC9saT48bGk+IC0tLS0tLS0tLS0tLS0gPC9saT4gPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMVwiPuKRoSDsoJXrs7TsnoXroKU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJpZFwiID7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi51c2VyaWR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJpZFwiIGlkPVwidXNlcmlkXCIgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTroZwg7IKs7Jqp7ZWgIOydtOuplOydvCDsnoXroKVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJ1c2VycHdcIiA+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VycHdcIiBpZD1cInVzZXJwd1wiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyeheugpVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkQm94MVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg64yA66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7siKvsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEw7J6QIOydtOyDgTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInB3Q2hrXCIgPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwd0Noa30gaWQ9XCJwd0Noa1wiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiAvPlxyXG4gICAgICAgICAgICAgICAgeyBwd0Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIiBzdHlsZT17e2NvbG9yOidyZWQnfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+IH1cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwidXNlcm5hbWVcIiA+7J2066aEPGJyIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VybmFtZX0gaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJhY2NvdW50Tm9cIiA+6rOE7KKM67KI7Zi4PGJyIC8+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uYWNjb3VudE5vfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJhY2NvdW50Tm9cIiBpZD1cImFjY291bnROb1wiIHBsYWNlaG9sZGVyPVwi6rOE7KKM67KI7Zi4IOyeheugpVwiIG1heGxlbmd0aD1cIjExXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmlnQnRuXCI+PExpbmsgaHJlZj17YC9gfT48YT7ri6TsnYw8L2E+PC9MaW5rPiA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgam9pbiJdLCJuYW1lcyI6WyJMaW5rIiwiU3R5bGVkIiwidXNlSW5wdXQiLCJ1c2VTdGF0ZSIsIkJveCIsImRpdiIsImpvaW4iLCJ1c2VyaWQiLCJ1c2VycHciLCJ1c2VybmFtZSIsImFjY291bnRObyIsInB3Q2hrIiwic2V0UHdDaGsiLCJwd0Vycm9yIiwic2V0UHdFcnJvciIsImFjY291bnRFcnJvciIsInNldEFjY291bnRFcnJvciIsImhhbmRsZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWNjb3VudCIsImFjY291bnQiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsImhhbmRsZVRlcm0iLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9