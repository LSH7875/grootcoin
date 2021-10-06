"use strict";
self["webpackHotUpdate_N_E"]("pages/join",{

/***/ "./pages/join.jsx":
/*!************************!*\
  !*** ./pages/join.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_19\\1006\\grootcoin\\Front\\pages\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Box = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "join__Box",
  componentId: "sc-eu1z3o-0"
})(["margin:0 auto;width:480px;height:1000px;padding:16px 24px 32px;margin-top:80px;padding-top:40px;text-align:center;ul,li{list-style:none;}a{text-decoration:none;width:100%;}&>h1{margin-bottom:24px;font-size:34px;}&>.bigcheck{display:inline-block;}&>.bigCheck>li{display:inline-block;font-weight:bold;font-size:14px;}&>.bigCheck>.bigCheck1{font-weight:bold;color:rgba(32,201,150);}&>.bigCheck>.bigCheck2{margin-right:5px;margin-left:75px;}&>.a>.margin24{margin:24px 0 5px 0;}&>.a>.inputFont{float:left;font-size:14px;font-weight:bold;color:#484d55;text-align:left;}&>.a>.inputBox{box-sizing:border-box;display:block;padding-left:16px;padding-right:16px;width:100%;height:48px;border-radius:3px;border:1px solid #c9ccd2;background-color:#fff;font-size:14px;color:#18191c;-webkit-appearance:none;margin-top:5px;}&>.a>.passwordBox2{width:100%;height:100%;margin:8px 0 24px;padding:12px 16px;border:1px solid #e4e5e8;margin-left:0;background-color:#f8f8f9;}&>.a>.passwordBox2{display:inline-block;text-align:left;color:#18191c;font-size:12px;font-weight:bold;box-sizing:border-box;font-size:12px;color:#79818f;}&>.a>.passwordBox2>li{line-height:17px;}&>.a>.passwordBox2>.chk{color:rgba(32,201,150);}&>.a>.passwordBox2>.chk:before{content:\"\uD83D\uDDF8\"}&>.a>.passwordBox2>li:before{content:\"*\";}&>.a>.bigBtn{background-color:#c9ccd2;color:#000;opacity:.5;cursor:not-allowed;width:100%;padding:0 16px;height:48px;font-size:16px;display:inline-flex;flex:0 0 auto;justify-content:center;align-items:center;border-radius:3px;line-height:normal;font-weight:bold;font-style:normal;transition:background .25s,border .25s;text-align:center;white-space:nowrap;cursor:pointer;touch-action:manipulation;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}&>.a>.bigBtn:hover{background:rgba(32,201,150);color:#000;font-weight:bold;}&>.a>.bigBtn>a:hover{color:#000;}&>.a>.error{text-align:left;}"]);
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

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPwError(userpw.value !== value); // 1234 === 1234 ture

    setPwChk(value);
  };

  var checkAccountNo = function checkAccountNo(e) {
    if (accountNo.value.length === 11) {
      return true;
    } else {
      return false;
    }
  };

  var check = function check(e) {
    if (userid.value !== '' && userpw.value !== '' && userpw.value === pwChk && pwChk !== '' && username.value !== '' && accountNo.value !== '' && accountNo.value.length === 11) {
      return true;
    } else {
      return false;
    }
  };

  var bigChk = function bigChk() {
    var big = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var check_big = 0;

    for (var i = 0; i < big.length; i++) {
      if (_objectSpread({}, userpw).value.indexOf(big[i]) != -1) {
        check_big = 1;
      }
    }

    if (check_big !== 0) {
      return true;
    }
  };

  var smallChk = function smallChk() {
    var small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var check_small = 0;

    for (var i = 0; i < small.length; i++) {
      if (_objectSpread({}, userpw).value.indexOf(small[i]) != -1) {
        check_small = 1;
      }
    }

    if (check_small !== 0) {
      return true;
    }
  };

  var numChk = function numChk() {
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var check_number = 0;

    for (var i = 0; i < number.length; i++) {
      if (_objectSpread({}, userpw).value.indexOf(number[i]) != -1) {
        check_number = 1;
      }
    }

    if (check_number !== 0) {
      return true;
    }
  };

  var stChk = function stChk() {
    var st = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var check_st = 0;

    for (var i = 0; i < st.length; i++) {
      if (_objectSpread({}, userpw).value.indexOf(st[i]) != -1) {
        check_st = 1;
      }
    }

    if (check_st !== 0) {
      return true;
    }
  };

  var pw10Chk = function pw10Chk() {
    if (_objectSpread({}, userpw).value.length < 10) {
      return true;
    }
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (userpw.value !== pwChk) {
      setPwError(true);
      return;
    } else {
      setPwError(false);
    }

    (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.join_success)({
      userid: userid.value,
      username: username.value,
      userpw: userpw.value,
      account: accountNo.value,
      wallet: "info"
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: "a",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "userid",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "email"
      }, userid), {}, {
        className: "inputBox",
        name: "userid",
        id: "userid",
        placeholder: "\uC544\uC774\uB514\uB85C \uC0AC\uC6A9\uD560 \uC774\uBA54\uC77C \uC785\uB825"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        className: "inputBox",
        name: "userpw",
        id: "userpw",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
        className: "passwordBox2",
        children: [bigChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 33
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 70
        }, _this), smallChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 35
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 72
        }, _this), numChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC22B\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 33
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC22B\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 66
        }, _this), stChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uD2B9\uC218\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 32
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uD2B9\uC218\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 67
        }, _this), pw10Chk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "10\uC790 \uC774\uC0C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 34
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "10\uC790 \uC774\uC0C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 53
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "password",
        value: pwChk,
        id: "pwChk",
        onChange: handlePassword,
        className: "inputBox",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, _this), pwError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 29
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 83
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, username), {}, {
        id: "username",
        name: "username",
        className: "inputBox",
        placeholder: "\uC774\uB984"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "accountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 86
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, accountNo), {}, {
        className: "inputBox",
        name: "accountNo",
        id: "accountNo",
        placeholder: "\uACC4\uC88C\uBC88\uD638 \uC785\uB825",
        maxLength: "11"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, _this), checkAccountNo() ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uACC4\uC88C\uBC88\uD638 11\uC790\uB9AC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 42
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 17
      }, _this), check() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "submit",
        className: "bigBtn",
        value: "\uB2E4\uC74C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 28
      }, _this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 9
  }, _this);
};

_s(join, "XchSzr1F+wGlBUD145DBqYfn4xA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi5mNzRlODg1YzE0MmFmMzZhZjEzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTSxHQUFHLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDQ0REFBVDtLQUFNSzs7QUF3Sk4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQU1DLE1BQU0sR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXZCO0FBQ0EsTUFBTVEsTUFBTSxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNUyxRQUFRLEdBQUdULHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUNBLE1BQU1VLFNBQVMsR0FBR1Ysd0RBQVEsQ0FBQyxFQUFELENBQTFCOztBQUVBLGtCQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCWCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPWSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUlBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3hCLHNDQUF1QkEsQ0FBQyxDQUFDQyxNQUF6QjtBQUFBLFFBQVFDLEtBQVIsYUFBUUEsS0FBUjs7QUFDQUosSUFBQUEsVUFBVSxDQUFDTixNQUFNLENBQUNVLEtBQVAsS0FBaUJBLEtBQWxCLENBQVYsQ0FGd0IsQ0FFVzs7QUFDbkNOLElBQUFBLFFBQVEsQ0FBQ00sS0FBRCxDQUFSO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFILENBQUMsRUFBSTtBQUN4QixRQUFJTixTQUFTLENBQUNRLEtBQVYsQ0FBZ0JFLE1BQWhCLEtBQTJCLEVBQS9C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QSxzREFDQ0E7OztBQWtKdEIsK0RBQWVNLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2pvaW5fc3VjY2Vzc30gZnJvbSAnLi4vYXBpL2FwaSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEJveCA9IFN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjQ4MHB4O1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweCAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICAgIHVsLGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmPmgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ2NoZWNre1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPmxpe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+LmJpZ0NoZWNrMXtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMzIsIDIwMSwgMTUwKTtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzVweDtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+Lm1hcmdpbjI0e1xyXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDVweCAwOyAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uaW5wdXRGb250e1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNDg0ZDU1O1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5pbnB1dEJveHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5Y2NkMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTVlODtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gye1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICBcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3OTgxOGY7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gyPmxpe1xyXG4gICAgICBsaW5lLWhlaWdodDoxN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDI+LmNoa3tcclxuICAgICAgICBjb2xvcjpyZ2JhKDMyLCAyMDEsIDE1MCk7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDI+LmNoazpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDpcIvCfl7hcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDI+bGk6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIqXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LmJpZ0J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljY2QyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzLGJvcmRlciAuMjVzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDMyLCAyMDEsIDE1MCk7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bj5hOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYT4uZXJyb3J7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuY29uc3Qgam9pbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGFjY291bnRObyA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICBjb25zdCBbcHdDaGssIHNldFB3Q2hrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwd0Vycm9yLCBzZXRQd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0geyAuLi5lLnRhcmdldCB9XHJcbiAgICAgICAgc2V0UHdFcnJvcih1c2VycHcudmFsdWUgIT09IHZhbHVlKSAvLyAxMjM0ID09PSAxMjM0IHR1cmVcclxuICAgICAgICBzZXRQd0Noayh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0FjY291bnRObyA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChhY2NvdW50Tm8udmFsdWUubGVuZ3RoID09PSAxMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2sgPSBlID0+IHtcclxuICAgICAgICBpZiAodXNlcmlkLnZhbHVlICE9PSAnJyAmJiB1c2VycHcudmFsdWUgIT09ICcnICYmIHVzZXJwdy52YWx1ZSA9PT0gcHdDaGsgJiYgcHdDaGsgIT09ICcnICYmIHVzZXJuYW1lLnZhbHVlICE9PSAnJyAmJiBhY2NvdW50Tm8udmFsdWUgIT09ICcnICYmIGFjY291bnROby52YWx1ZS5sZW5ndGggPT09IDExKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpZ0NoayA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYmlnID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIXCIsIFwiSVwiLCBcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG4gICAgICAgIGxldCBjaGVja19iaWcgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh7IC4uLnVzZXJwdyB9LnZhbHVlLmluZGV4T2YoYmlnW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tfYmlnID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tfYmlnICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNtYWxsQ2hrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzbWFsbCA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaFwiLCBcImlcIiwgXCJqXCIsXCJrXCIsXCJsXCIsXCJtXCIsXCJuXCIsXCJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFwicVwiLFwiclwiLFwic1wiLFwidFwiLFwidVwiLFwidlwiLFwid1wiLFwieFwiLFwieVwiLFwielwiXTtcclxuICAgICAgICBsZXQgY2hlY2tfc21hbGwgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc21hbGwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHsgLi4udXNlcnB3IH0udmFsdWUuaW5kZXhPZihzbWFsbFtpXSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrX3NtYWxsID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tfc21hbGwgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbnVtQ2hrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xyXG4gICAgICAgIGxldCBjaGVja19udW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh7IC4uLnVzZXJwdyB9LnZhbHVlLmluZGV4T2YobnVtYmVyW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tfbnVtYmVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tfbnVtYmVyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0Q2hrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdCA9IFtcIiFcIiwgXCJAXCIsIFwiI1wiLCBcIiRcIiwgXCIlXCIsIFwiXlwiLCBcIiZcIiwgXCIqXCJdO1xyXG4gICAgICAgIGxldCBjaGVja19zdCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoeyAuLi51c2VycHcgfS52YWx1ZS5pbmRleE9mKHN0W2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tfc3QgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja19zdCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwdzEwQ2hrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh7IC4uLnVzZXJwdyB9LnZhbHVlLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYgKHVzZXJwdy52YWx1ZSAhPT0gcHdDaGspIHtcclxuICAgICAgICAgICAgc2V0UHdFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQd0Vycm9yKGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLnZhbHVlLCB1c2VybmFtZTp1c2VybmFtZS52YWx1ZSwgdXNlcnB3OnVzZXJwdy52YWx1ZSwgYWNjb3VudDphY2NvdW50Tm8udmFsdWUsIHdhbGxldDpcImluZm9cIn0pXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8aDE+7ZqM7JuQ6rCA7J6FPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJpZ0NoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlnQ2hlY2syXCI+4pGgIOyVveq0gOuPmeydmDwvbGk+PGxpPiAtLS0tLS0tLS0tLS0tIDwvbGk+IDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazFcIj7ikaEg7KCV67O07J6F66ClPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBodG1sRm9yPVwidXNlcmlkXCIgPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgey4uLnVzZXJpZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwidXNlcmlkXCIgaWQ9XCJ1c2VyaWRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOuhnCDsgqzsmqntlaAg7J2066mU7J28IOyeheugpVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGh0bWxGb3I9XCJ1c2VycHdcIiA+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VycHdcIiBpZD1cInVzZXJwd1wiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyeheugpVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JpZ0NoaygpID8gPGxpIGNsYXNzTmFtZT1cImNoa1wiPuyYgeusuCDrjIDrrLjsnpAg7Y+s7ZWoPC9saT4gOiA8bGk+7JiB66y4IOuMgOusuOyekCDtj6ztlag8L2xpPn1cclxuICAgICAgICAgICAgICAgICAgICB7c21hbGxDaGsoKSA/IDxsaSBjbGFzc05hbWU9XCJjaGtcIj7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+IDogPGxpPuyYgeusuCDshozrrLjsnpAg7Y+s7ZWoPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAge251bUNoaygpID8gPGxpIGNsYXNzTmFtZT1cImNoa1wiPuyIq+yekCDtj6ztlag8L2xpPiA6IDxsaT7siKvsnpAg7Y+s7ZWoPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAge3N0Q2hrKCkgPyA8bGkgY2xhc3NOYW1lPVwiY2hrXCI+7Yq57IiY66y47J6QIO2PrO2VqDwvbGk+IDogPGxpPu2KueyImOusuOyekCDtj6ztlag8L2xpPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHcxMENoaygpID8gPGxpID4xMOyekCDsnbTsg4E8L2xpPiA6IDxsaSBjbGFzc05hbWU9XCJjaGtcIj4xMOyekCDsnbTsg4E8L2xpPn1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgaHRtbEZvcj1cInB3Q2hrXCIgPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwd0Noa30gaWQ9XCJwd0Noa1wiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiAvPlxyXG4gICAgICAgICAgICAgICAge3B3RXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiID7snbTrpoQ8YnIgLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJuYW1lfSBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGh0bWxGb3I9XCJhY2NvdW50Tm9cIiA+6rOE7KKM67KI7Zi4PGJyIC8+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uYWNjb3VudE5vfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJhY2NvdW50Tm9cIiBpZD1cImFjY291bnROb1wiIHBsYWNlaG9sZGVyPVwi6rOE7KKM67KI7Zi4IOyeheugpVwiIG1heExlbmd0aD1cIjExXCIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGVja0FjY291bnRObygpID8gJycgOiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PuqzhOyijOuyiO2YuCAxMeyekOumrOulvCDsnoXroKXtlbTso7zshLjsmpQuPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y2hlY2soKSA/IDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiaWdCdG5cIiB2YWx1ZSA9IFwi64uk7J2MXCIgLz4gOiAnJ31cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgam9pbiJdLCJuYW1lcyI6WyJMaW5rIiwiU3R5bGVkIiwidXNlSW5wdXQiLCJ1c2VTdGF0ZSIsImpvaW5fc3VjY2VzcyIsIlJvdXRlciIsIkJveCIsImRpdiIsImpvaW4iLCJ1c2VyaWQiLCJ1c2VycHciLCJ1c2VybmFtZSIsImFjY291bnRObyIsInB3Q2hrIiwic2V0UHdDaGsiLCJwd0Vycm9yIiwic2V0UHdFcnJvciIsImhhbmRsZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tBY2NvdW50Tm8iLCJsZW5ndGgiLCJjaGVjayIsImJpZ0NoayIsImJpZyIsImNoZWNrX2JpZyIsImkiLCJpbmRleE9mIiwic21hbGxDaGsiLCJzbWFsbCIsImNoZWNrX3NtYWxsIiwibnVtQ2hrIiwibnVtYmVyIiwiY2hlY2tfbnVtYmVyIiwic3RDaGsiLCJzdCIsImNoZWNrX3N0IiwicHcxMENoayIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudCIsIndhbGxldCIsInB1c2giLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=