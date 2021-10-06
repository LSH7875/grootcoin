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
    } // if (accountNo.value.length !== 11) {
    //     setAccountError(true)
    //     return
    // } else {
    //     setAccountError(false)
    // }
    // if(!term) {
    //     setTermError(true)
    //     return; 
    // }
    // console.log({
    //     userid:userid.value,
    //     username:username.value,
    //     userpw:userpw.value,
    //     accountNo:accountNo.value
    // })


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
      lineNumber: 291,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 292,
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
        lineNumber: 297,
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
        lineNumber: 298,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
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
        lineNumber: 301,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
        className: "passwordBox2",
        children: [bigChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 33
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 70
        }, _this), smallChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 35
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 72
        }, _this), numChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uC22B\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 33
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uC22B\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 66
        }, _this), stChk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "\uD2B9\uC218\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 32
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "\uD2B9\uC218\uBB38\uC790 \uD3EC\uD568"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 67
        }, _this), pw10Chk() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          children: "10\uC790 \uC774\uC0C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 34
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          className: "chk",
          children: "10\uC790 \uC774\uC0C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 53
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
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
        lineNumber: 310,
        columnNumber: 17
      }, _this), pwError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 29
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 83
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 313,
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
        lineNumber: 314,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        htmlFor: "accountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 86
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
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
        lineNumber: 317,
        columnNumber: 17
      }, _this), checkAccountNo() ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "error",
        style: {
          color: 'red'
        },
        children: "\uACC4\uC88C\uBC88\uD638 11\uC790\uB9AC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 42
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, _this), check() ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "submit",
        className: "bigBtn",
        value: "\uB2E4\uC74C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 28
      }, _this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 290,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi4wODZlNGUwNzVmODgwNGE1YWM2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTSxHQUFHLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDQ0REFBVDtLQUFNSzs7QUF3Sk4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQU1DLE1BQU0sR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXZCO0FBQ0EsTUFBTVEsTUFBTSxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNUyxRQUFRLEdBQUdULHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUNBLE1BQU1VLFNBQVMsR0FBR1Ysd0RBQVEsQ0FBQyxFQUFELENBQTFCOztBQUVBLGtCQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCWCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPWSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUlBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3hCLHNDQUF1QkEsQ0FBQyxDQUFDQyxNQUF6QjtBQUFBLFFBQVFDLEtBQVIsYUFBUUEsS0FBUjs7QUFDQUosSUFBQUEsVUFBVSxDQUFDTixNQUFNLENBQUNVLEtBQVAsS0FBaUJBLEtBQWxCLENBQVYsQ0FGd0IsQ0FFVzs7QUFDbkNOLElBQUFBLFFBQVEsQ0FBQ00sS0FBRCxDQUFSO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFILENBQUMsRUFBSTtBQUN4QixRQUFJTixTQUFTLENBQUNRLEtBQVYsQ0FBZ0JFLE1BQWhCLEtBQTJCLEVBQS9CLEVBQW1DO0FBQy9CLGFBQU8sSUFBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sS0FBUDtBQUNIO0FBRUosR0FQRDs7QUFTQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBTCxDQUFDLEVBQUk7QUFDZixRQUFJVCxNQUFNLENBQUNXLEtBQVAsS0FBaUIsRUFBakIsSUFBdUJWLE1BQU0sQ0FBQ1UsS0FBUCxLQUFpQixFQUF4QyxJQUE4Q1YsTUFBTSxDQUFDVSxLQUFQLEtBQWlCUCxLQUEvRCxJQUF3RUEsS0FBSyxLQUFLLEVBQWxGLElBQXdGRixRQUFRLENBQUNTLEtBQVQsS0FBbUIsRUFBM0csSUFBaUhSLFNBQVMsQ0FBQ1EsS0FBVixLQUFvQixFQUFySSxJQUEySVIsU0FBUyxDQUFDUSxLQUFWLENBQWdCRSxNQUFoQixLQUEyQixFQUExSyxFQUE4SztBQUMxSyxhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsTUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixRQUFJQyxHQUFHLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFDTSxHQUROLEVBQ1csR0FEWCxFQUNnQixHQURoQixFQUNvQixHQURwQixFQUN3QixHQUR4QixFQUM0QixHQUQ1QixFQUNnQyxHQURoQyxFQUNvQyxHQURwQyxFQUVNLEdBRk4sRUFFVSxHQUZWLEVBRWMsR0FGZCxFQUVrQixHQUZsQixFQUVzQixHQUZ0QixFQUUwQixHQUYxQixFQUU4QixHQUY5QixFQUVrQyxHQUZsQyxFQUVzQyxHQUZ0QyxFQUUwQyxHQUYxQyxFQUU4QyxHQUY5QyxDQUFWO0FBR0EsUUFBSUMsU0FBUyxHQUFHLENBQWhCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsR0FBRyxDQUFDSCxNQUF4QixFQUFnQ0ssQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxVQUFJLGtCQUFLakIsTUFBTCxFQUFjVSxLQUFkLENBQW9CUSxPQUFwQixDQUE0QkgsR0FBRyxDQUFDRSxDQUFELENBQS9CLEtBQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDM0NELFFBQUFBLFNBQVMsR0FBRyxDQUFaO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDakIsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQWJEOztBQWNBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSUMsS0FBSyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQ0ksR0FESixFQUNTLEdBRFQsRUFDYyxHQURkLEVBQ2tCLEdBRGxCLEVBQ3NCLEdBRHRCLEVBQzBCLEdBRDFCLEVBQzhCLEdBRDlCLEVBQ2tDLEdBRGxDLEVBRUksR0FGSixFQUVRLEdBRlIsRUFFWSxHQUZaLEVBRWdCLEdBRmhCLEVBRW9CLEdBRnBCLEVBRXdCLEdBRnhCLEVBRTRCLEdBRjVCLEVBRWdDLEdBRmhDLEVBRW9DLEdBRnBDLEVBRXdDLEdBRnhDLEVBRTRDLEdBRjVDLENBQVo7QUFHQSxRQUFJQyxXQUFXLEdBQUcsQ0FBbEI7O0FBQ0EsU0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRyxLQUFLLENBQUNSLE1BQTFCLEVBQWtDSyxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQUksa0JBQUtqQixNQUFMLEVBQWNVLEtBQWQsQ0FBb0JRLE9BQXBCLENBQTRCRSxLQUFLLENBQUNILENBQUQsQ0FBakMsS0FBeUMsQ0FBQyxDQUE5QyxFQUFpRDtBQUM3Q0ksUUFBQUEsV0FBVyxHQUFHLENBQWQ7QUFDSDtBQUNKOztBQUNELFFBQUlBLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQixhQUFPLElBQVA7QUFDSDtBQUNKLEdBYkQ7O0FBY0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixRQUFJQyxNQUFNLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBYjtBQUNBLFFBQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFDQSxTQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLE1BQU0sQ0FBQ1gsTUFBM0IsRUFBbUNLLENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsVUFBSSxrQkFBS2pCLE1BQUwsRUFBY1UsS0FBZCxDQUFvQlEsT0FBcEIsQ0FBNEJLLE1BQU0sQ0FBQ04sQ0FBRCxDQUFsQyxLQUEwQyxDQUFDLENBQS9DLEVBQWtEO0FBQzlDTyxRQUFBQSxZQUFZLEdBQUcsQ0FBZjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3BCLGFBQU8sSUFBUDtBQUNIO0FBQ0osR0FYRDs7QUFZQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLFFBQUlDLEVBQUUsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQUFUO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQWY7O0FBQ0EsU0FBSyxJQUFJVixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUyxFQUFFLENBQUNkLE1BQXZCLEVBQStCSyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2hDLFVBQUksa0JBQUtqQixNQUFMLEVBQWNVLEtBQWQsQ0FBb0JRLE9BQXBCLENBQTRCUSxFQUFFLENBQUNULENBQUQsQ0FBOUIsS0FBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUMxQ1UsUUFBQUEsUUFBUSxHQUFHLENBQVg7QUFDSDtBQUNKOztBQUNELFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNoQixhQUFPLElBQVA7QUFDSDtBQUNKLEdBWEQ7O0FBWUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixRQUFJLGtCQUFLNUIsTUFBTCxFQUFjVSxLQUFkLENBQW9CRSxNQUFwQixHQUE2QixFQUFqQyxFQUFxQztBQUNqQyxhQUFPLElBQVA7QUFDSDtBQUNKLEdBSkQ7O0FBT0EsTUFBTWlCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFyQixDQUFDLEVBQUk7QUFDdEJBLElBQUFBLENBQUMsQ0FBQ3NCLGNBQUY7O0FBRUEsUUFBSTlCLE1BQU0sQ0FBQ1UsS0FBUCxLQUFpQlAsS0FBckIsRUFBNEI7QUFDeEJHLE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQTtBQUNILEtBSEQsTUFHTztBQUNIQSxNQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsS0FScUIsQ0FVdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBWixJQUFBQSxzREFBWSxDQUFDO0FBQUNLLE1BQUFBLE1BQU0sRUFBQ0EsTUFBTSxDQUFDVyxLQUFmO0FBQXNCVCxNQUFBQSxRQUFRLEVBQUNBLFFBQVEsQ0FBQ1MsS0FBeEM7QUFBK0NWLE1BQUFBLE1BQU0sRUFBQ0EsTUFBTSxDQUFDVSxLQUE3RDtBQUFvRXFCLE1BQUFBLE9BQU8sRUFBQzdCLFNBQVMsQ0FBQ1EsS0FBdEY7QUFBNkZzQixNQUFBQSxNQUFNLEVBQUM7QUFBcEcsS0FBRCxDQUFaO0FBQ0FyQyxJQUFBQSx1REFBQSxDQUFZLEdBQVo7QUFDSCxHQS9CRDs7QUFtQ0Esc0JBQ0ksOERBQUMsR0FBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUN5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR6QyxvQkFDa0U7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFNSTtBQUFNLGNBQVEsRUFBRWtDLFlBQWhCO0FBQThCLGVBQVMsRUFBQyxHQUF4QztBQUFBLDhCQUNJO0FBQU8saUJBQVMsRUFBQyxvQkFBakI7QUFBc0MsYUFBSyxNQUEzQztBQUE0QyxlQUFPLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDO0FBQVosU0FBd0I5QixNQUF4QjtBQUFnQyxpQkFBUyxFQUFDLFVBQTFDO0FBQXFELFlBQUksRUFBQyxRQUExRDtBQUFtRSxVQUFFLEVBQUMsUUFBdEU7QUFBK0UsbUJBQVcsRUFBQztBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFJSTtBQUFPLGlCQUFTLEVBQUMsb0JBQWpCO0FBQXNDLGFBQUssTUFBM0M7QUFBNEMsZUFBTyxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFPLFlBQUksRUFBQztBQUFaLFNBQTJCQyxNQUEzQjtBQUFtQyxpQkFBUyxFQUFDLFVBQTdDO0FBQXdELFlBQUksRUFBQyxRQUE3RDtBQUFzRSxVQUFFLEVBQUMsUUFBekU7QUFBa0YsbUJBQVcsRUFBQztBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSTtBQUFJLGlCQUFTLEVBQUMsY0FBZDtBQUFBLG1CQUNLYyxNQUFNLGtCQUFLO0FBQUksbUJBQVMsRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMLGdCQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEckQsRUFFS0ssUUFBUSxrQkFBSztBQUFJLG1CQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTCxnQkFBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnZELEVBR0tHLE1BQU0sa0JBQUs7QUFBSSxtQkFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUwsZ0JBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhqRCxFQUlLRyxLQUFLLGtCQUFLO0FBQUksbUJBQVMsRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMLGdCQUF3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKbEQsRUFLS0csT0FBTyxrQkFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTCxnQkFBd0I7QUFBSSxtQkFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBYUk7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFzQyxhQUFLLE1BQTNDO0FBQTRDLGVBQU8sRUFBQyxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLGVBY0k7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFLLEVBQUV6QixLQUE5QjtBQUFxQyxVQUFFLEVBQUMsT0FBeEM7QUFBZ0QsZ0JBQVEsRUFBRUksY0FBMUQ7QUFBMEUsaUJBQVMsRUFBQyxVQUFwRjtBQUErRixtQkFBVyxFQUFDO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSixFQWVLRixPQUFPLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQXVCLGFBQUssRUFBRTtBQUFFNkIsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmaEIsZUFpQkk7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFzQyxhQUFLLE1BQTNDO0FBQTRDLGVBQU8sRUFBQyxVQUFwRDtBQUFBLGdEQUFrRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkosZUFrQkk7QUFBTyxZQUFJLEVBQUM7QUFBWixTQUF1QmpDLFFBQXZCO0FBQWlDLFVBQUUsRUFBQyxVQUFwQztBQUErQyxZQUFJLEVBQUMsVUFBcEQ7QUFBK0QsaUJBQVMsRUFBQyxVQUF6RTtBQUFvRixtQkFBVyxFQUFDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkosZUFvQkk7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFzQyxhQUFLLE1BQTNDO0FBQTRDLGVBQU8sRUFBQyxXQUFwRDtBQUFBLDREQUFxRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkosZUFxQkk7QUFBTyxZQUFJLEVBQUM7QUFBWixTQUF1QkMsU0FBdkI7QUFBa0MsaUJBQVMsRUFBQyxVQUE1QztBQUF1RCxZQUFJLEVBQUMsV0FBNUQ7QUFBd0UsVUFBRSxFQUFDLFdBQTNFO0FBQXVGLG1CQUFXLEVBQUMsdUNBQW5HO0FBQTZHLGlCQUFTLEVBQUM7QUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSixFQXNCS1MsY0FBYyxLQUFLLEVBQUwsZ0JBQVU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFO0FBQUV1QixVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCN0IsZUF3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCSixFQTJCS3JCLEtBQUssa0JBQUs7QUFBTyxZQUFJLEVBQUcsUUFBZDtBQUF1QixpQkFBUyxFQUFDLFFBQWpDO0FBQTBDLGFBQUssRUFBRztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUwsR0FBaUUsRUEzQjNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUNILENBeEtEOztHQUFNZjtVQUVhTixzREFDQUEsc0RBQ0VBLHNEQUNDQTs7O0FBcUt0QiwrREFBZU0sSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9qb2luLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7am9pbl9zdWNjZXNzfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgQm94ID0gU3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6NDgwcHg7XHJcbiAgICBoZWlnaHQ6MTAwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gICAgdWwsbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICY+aDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnY2hlY2t7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJj4uYmlnQ2hlY2s+bGl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz4uYmlnQ2hlY2sxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgY29sb3I6cmdiYSgzMiwgMjAxLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo3NXB4O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ubWFyZ2luMjR7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgNXB4IDA7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5pbnB1dEZvbnR7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM0ODRkNTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LmlucHV0Qm94e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljY2QyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNWU4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDJ7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDI+bGl7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94Mj4uY2hre1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMzIsIDIwMSwgMTUwKTtcclxuICAgIH1cclxuICAgICY+LmE+LnBhc3N3b3JkQm94Mj4uY2hrOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50Olwi8J+XuFwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94Mj5saTpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDpcIipcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4uYmlnQnRue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNjZDI7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMsYm9yZGVyIC4yNXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIH1cclxuICAgICY+LmE+LmJpZ0J0bjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMzIsIDIwMSwgMTUwKTtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgJj4uYT4uYmlnQnRuPmE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5lcnJvcntcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5jb25zdCBqb2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgYWNjb3VudE5vID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwd0Noaywgc2V0UHdDaGtdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3B3RXJyb3IsIHNldFB3RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB7IC4uLmUudGFyZ2V0IH1cclxuICAgICAgICBzZXRQd0Vycm9yKHVzZXJwdy52YWx1ZSAhPT0gdmFsdWUpIC8vIDEyMzQgPT09IDEyMzQgdHVyZVxyXG4gICAgICAgIHNldFB3Q2hrKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQWNjb3VudE5vID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKGFjY291bnROby52YWx1ZS5sZW5ndGggPT09IDExKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGUgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyaWQudmFsdWUgIT09ICcnICYmIHVzZXJwdy52YWx1ZSAhPT0gJycgJiYgdXNlcnB3LnZhbHVlID09PSBwd0NoayAmJiBwd0NoayAhPT0gJycgJiYgdXNlcm5hbWUudmFsdWUgIT09ICcnICYmIGFjY291bnROby52YWx1ZSAhPT0gJycgJiYgYWNjb3VudE5vLnZhbHVlLmxlbmd0aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmlnQ2hrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBiaWcgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhcIiwgXCJJXCIsIFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbiAgICAgICAgbGV0IGNoZWNrX2JpZyA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHsgLi4udXNlcnB3IH0udmFsdWUuaW5kZXhPZihiaWdbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja19iaWcgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja19iaWcgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc21hbGxDaGsgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNtYWxsID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoXCIsIFwiaVwiLCBcImpcIixcImtcIixcImxcIixcIm1cIixcIm5cIixcIm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXCJxXCIsXCJyXCIsXCJzXCIsXCJ0XCIsXCJ1XCIsXCJ2XCIsXCJ3XCIsXCJ4XCIsXCJ5XCIsXCJ6XCJdO1xyXG4gICAgICAgIGxldCBjaGVja19zbWFsbCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbWFsbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoeyAuLi51c2VycHcgfS52YWx1ZS5pbmRleE9mKHNtYWxsW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tfc21hbGwgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja19zbWFsbCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBudW1DaGsgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl07XHJcbiAgICAgICAgbGV0IGNoZWNrX251bWJlciA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHsgLi4udXNlcnB3IH0udmFsdWUuaW5kZXhPZihudW1iZXJbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja19udW1iZXIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja19udW1iZXIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RDaGsgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ID0gW1wiIVwiLCBcIkBcIiwgXCIjXCIsIFwiJFwiLCBcIiVcIiwgXCJeXCIsIFwiJlwiLCBcIipcIl07XHJcbiAgICAgICAgbGV0IGNoZWNrX3N0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh7IC4uLnVzZXJwdyB9LnZhbHVlLmluZGV4T2Yoc3RbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja19zdCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrX3N0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHB3MTBDaGsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHsgLi4udXNlcnB3IH0udmFsdWUubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZiAodXNlcnB3LnZhbHVlICE9PSBwd0Noaykge1xyXG4gICAgICAgICAgICBzZXRQd0Vycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFB3RXJyb3IoZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoYWNjb3VudE5vLnZhbHVlLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgICAgICAvLyAgICAgc2V0QWNjb3VudEVycm9yKHRydWUpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHNldEFjY291bnRFcnJvcihmYWxzZSlcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZighdGVybSkge1xyXG4gICAgICAgIC8vICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgICAvLyAgICAgcmV0dXJuOyBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAvLyAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAvLyAgICAgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgLy8gICAgIHVzZXJwdzp1c2VycHcudmFsdWUsXHJcbiAgICAgICAgLy8gICAgIGFjY291bnRObzphY2NvdW50Tm8udmFsdWVcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZC52YWx1ZSwgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsIHVzZXJwdzp1c2VycHcudmFsdWUsIGFjY291bnQ6YWNjb3VudE5vLnZhbHVlLCB3YWxsZXQ6XCJpbmZvXCJ9KVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPGgxPu2ajOybkOqwgOyehTwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaWdDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMlwiPuKRoCDslb3qtIDrj5nsnZg8L2xpPjxsaT4gLS0tLS0tLS0tLS0tLSA8L2xpPiA8bGkgY2xhc3NOYW1lPVwiYmlnQ2hlY2sxXCI+4pGhIOygleuztOyeheugpTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgaHRtbEZvcj1cInVzZXJpZFwiID7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi51c2VyaWR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJpZFwiIGlkPVwidXNlcmlkXCIgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTroZwg7IKs7Jqp7ZWgIOydtOuplOydvCDsnoXroKVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBodG1sRm9yPVwidXNlcnB3XCIgPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgey4uLnVzZXJwd30gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwidXNlcnB3XCIgaWQ9XCJ1c2VycHdcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDsnoXroKVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhc3N3b3JkQm94MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtiaWdDaGsoKSA/IDxsaSBjbGFzc05hbWU9XCJjaGtcIj7smIHrrLgg64yA66y47J6QIO2PrO2VqDwvbGk+IDogPGxpPuyYgeusuCDrjIDrrLjsnpAg7Y+s7ZWoPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAge3NtYWxsQ2hrKCkgPyA8bGkgY2xhc3NOYW1lPVwiY2hrXCI+7JiB66y4IOyGjOusuOyekCDtj6ztlag8L2xpPiA6IDxsaT7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtudW1DaGsoKSA/IDxsaSBjbGFzc05hbWU9XCJjaGtcIj7siKvsnpAg7Y+s7ZWoPC9saT4gOiA8bGk+7Iir7J6QIO2PrO2VqDwvbGk+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdENoaygpID8gPGxpIGNsYXNzTmFtZT1cImNoa1wiPu2KueyImOusuOyekCDtj6ztlag8L2xpPiA6IDxsaT7tirnsiJjrrLjsnpAg7Y+s7ZWoPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAge3B3MTBDaGsoKSA/IDxsaSA+MTDsnpAg7J207IOBPC9saT4gOiA8bGkgY2xhc3NOYW1lPVwiY2hrXCI+MTDsnpAg7J207IOBPC9saT59XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGh0bWxGb3I9XCJwd0Noa1wiID7ruYTrsIDrsojtmLgg7ZmV7J24PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cHdDaGt9IGlkPVwicHdDaGtcIiBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ZmV7J24XCIgLz5cclxuICAgICAgICAgICAgICAgIHtwd0Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiA+7J2066aEPGJyIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VybmFtZX0gaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBodG1sRm9yPVwiYWNjb3VudE5vXCIgPuqzhOyijOuyiO2YuDxiciAvPiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLmFjY291bnROb30gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwiYWNjb3VudE5vXCIgaWQ9XCJhY2NvdW50Tm9cIiBwbGFjZWhvbGRlcj1cIuqzhOyijOuyiO2YuCDsnoXroKVcIiBtYXhMZW5ndGg9XCIxMVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7Y2hlY2tBY2NvdW50Tm8oKSA/ICcnIDogPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT7qs4TsoozrsojtmLggMTHsnpDrpqzrpbwg7J6F66Cl7ZW07KO87IS47JqULjwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAge2NoZWNrKCkgPyA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmlnQnRuXCIgdmFsdWUgPSBcIuuLpOydjFwiIC8+IDogJyd9XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGpvaW4iXSwibmFtZXMiOlsiTGluayIsIlN0eWxlZCIsInVzZUlucHV0IiwidXNlU3RhdGUiLCJqb2luX3N1Y2Nlc3MiLCJSb3V0ZXIiLCJCb3giLCJkaXYiLCJqb2luIiwidXNlcmlkIiwidXNlcnB3IiwidXNlcm5hbWUiLCJhY2NvdW50Tm8iLCJwd0NoayIsInNldFB3Q2hrIiwicHdFcnJvciIsInNldFB3RXJyb3IiLCJoYW5kbGVQYXNzd29yZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoZWNrQWNjb3VudE5vIiwibGVuZ3RoIiwiY2hlY2siLCJiaWdDaGsiLCJiaWciLCJjaGVja19iaWciLCJpIiwiaW5kZXhPZiIsInNtYWxsQ2hrIiwic21hbGwiLCJjaGVja19zbWFsbCIsIm51bUNoayIsIm51bWJlciIsImNoZWNrX251bWJlciIsInN0Q2hrIiwic3QiLCJjaGVja19zdCIsInB3MTBDaGsiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFjY291bnQiLCJ3YWxsZXQiLCJwdXNoIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9