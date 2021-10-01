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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

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
      lineNumber: 192,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "bigCheck",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck2",
        children: "\u2460 \uC57D\uAD00\uB3D9\uC758"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: " ------------- "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 54
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: "bigCheck1",
        children: "\u2461 \uC815\uBCF4\uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
        lineNumber: 198,
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
        lineNumber: 199,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "userpw",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
        lineNumber: 202,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "passwordBox1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "passwordBox2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uB300\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC601\uBB38 \uC18C\uBB38\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "\uC22B\uC790 \uD3EC\uD568"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: "10\uC790 \uC774\uC0C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "pwChk",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
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
        lineNumber: 212,
        columnNumber: 17
      }, _this), pwError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 30
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "username",
        children: ["\uC774\uB984", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 79
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
        lineNumber: 216,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        className: "margin24 inputFont",
        label: true,
        "for": "accountNo",
        children: ["\uACC4\uC88C\uBC88\uD638", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 82
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
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
        lineNumber: 219,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
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
            lineNumber: 223,
            columnNumber: 70
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 53
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 9
  }, _this);
};

_s(join, "epMEMHks/RuCZ6wIZAup0WcX2oY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi45OWY0ODZjMzg4OGFhNTY5MGUwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLEdBQUcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsaXZEQUFUO0tBQU1HOztBQXdJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHTCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNTSxNQUFNLEdBQUdOLHdEQUFRLENBQUMsRUFBRCxDQUF2QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Asd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTVEsU0FBUyxHQUFHUix3REFBUSxDQUFDLEVBQUQsQ0FBMUI7O0FBRUEsa0JBQXlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFPUSxLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFDQSxtQkFBNkJULCtDQUFRLENBQUMsS0FBRCxDQUFyQztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFlQyxVQUFmOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3hCLHNDQUFvQkEsQ0FBQyxDQUFDQyxNQUF0QjtBQUFBLFFBQU9DLEtBQVAsYUFBT0EsS0FBUDs7QUFDQUosSUFBQUEsVUFBVSxDQUFDTixNQUFNLENBQUNVLEtBQVAsS0FBaUJBLEtBQWxCLENBQVYsQ0FGd0IsQ0FFVzs7QUFDbkNOLElBQUFBLFFBQVEsQ0FBQ00sS0FBRCxDQUFSO0FBQ0gsR0FKRDs7QUFNQSxtQkFBdUJmLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9nQixJQUFQO0FBQUEsTUFBWUMsT0FBWjs7QUFDQSxtQkFBaUNqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBekM7QUFBQSxNQUFPa0IsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBUCxDQUFDLEVBQUk7QUFDcEJNLElBQUFBLFlBQVksQ0FBQ04sQ0FBQyxDQUFDQyxNQUFGLENBQVNPLE9BQVQsS0FBcUIsSUFBdEIsQ0FBWjtBQUNBSixJQUFBQSxPQUFPLENBQUNKLENBQUMsQ0FBQ0MsTUFBRixDQUFTTyxPQUFWLENBQVA7QUFDSCxHQUhEOztBQUtBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFULENBQUMsRUFBSTtBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDVSxjQUFGOztBQUVBLFFBQUdsQixNQUFNLENBQUNVLEtBQVAsS0FBaUJQLEtBQXBCLEVBQTJCO0FBQ3ZCRyxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E7QUFDSCxLQUhELE1BR087QUFDSEEsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIOztBQUVELFFBQUcsQ0FBQ0ssSUFBSixFQUFVO0FBQ05HLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQTtBQUNIOztBQUVESyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUNSckIsTUFBQUEsTUFBTSxFQUFDQSxNQUFNLENBQUNXLEtBRE47QUFFUlQsTUFBQUEsUUFBUSxFQUFDQSxRQUFRLENBQUNTLEtBRlY7QUFHUlYsTUFBQUEsTUFBTSxFQUFDQSxNQUFNLENBQUNVLEtBSE47QUFJUlIsTUFBQUEsU0FBUyxFQUFDQSxTQUFTLENBQUNRO0FBSlosS0FBWjtBQU1ILEdBckJEOztBQXdCQSxzQkFDSSw4REFBQyxHQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBQ3lDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHpDLG9CQUNrRTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU1JO0FBQU0sY0FBUSxFQUFFTyxZQUFoQjtBQUE4QixlQUFTLEVBQUMsR0FBeEM7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsb0JBQWpCO0FBQXNDLGFBQUssTUFBM0M7QUFBNEMsZUFBSSxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTyxZQUFJLEVBQUM7QUFBWixTQUF3QmxCLE1BQXhCO0FBQWdDLGlCQUFTLEVBQUMsVUFBMUM7QUFBcUQsWUFBSSxFQUFDLFFBQTFEO0FBQW1FLFVBQUUsRUFBQyxRQUF0RTtBQUErRSxtQkFBVyxFQUFDO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUlJO0FBQU8saUJBQVMsRUFBQyxvQkFBakI7QUFBc0MsYUFBSyxNQUEzQztBQUE0QyxlQUFJLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFPLFlBQUksRUFBQztBQUFaLFNBQTJCQyxNQUEzQjtBQUFtQyxpQkFBUyxFQUFDLFVBQTdDO0FBQXdELFlBQUksRUFBQyxRQUE3RDtBQUFzRSxVQUFFLEVBQUMsUUFBekU7QUFBa0YsbUJBQVcsRUFBQztBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBY0k7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFzQyxhQUFLLE1BQTNDO0FBQTRDLGVBQUksT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSixlQWVJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBSyxFQUFFRyxLQUE5QjtBQUFxQyxVQUFFLEVBQUMsT0FBeEM7QUFBZ0QsZ0JBQVEsRUFBRUksY0FBMUQ7QUFBMEUsaUJBQVMsRUFBQyxVQUFwRjtBQUErRixtQkFBVyxFQUFDO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSixFQWdCTUYsT0FBTyxpQkFBSTtBQUFLLGFBQUssRUFBRTtBQUFDZ0IsVUFBQUEsS0FBSyxFQUFDO0FBQVAsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCakIsZUFrQkk7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFzQyxhQUFLLE1BQTNDO0FBQTRDLGVBQUksVUFBaEQ7QUFBQSxnREFBOEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJKLGVBbUJJO0FBQU8sWUFBSSxFQUFDO0FBQVosU0FBdUJwQixRQUF2QjtBQUFpQyxVQUFFLEVBQUMsVUFBcEM7QUFBK0MsWUFBSSxFQUFDLFVBQXBEO0FBQStELGlCQUFTLEVBQUMsVUFBekU7QUFBb0YsbUJBQVcsRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJKLGVBcUJJO0FBQU8saUJBQVMsRUFBQyxvQkFBakI7QUFBc0MsYUFBSyxNQUEzQztBQUE0QyxlQUFJLFdBQWhEO0FBQUEsNERBQWlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSixlQXNCSTtBQUFPLFlBQUksRUFBQztBQUFaLFNBQXVCQyxTQUF2QjtBQUFrQyxpQkFBUyxFQUFDLFVBQTVDO0FBQXVELFlBQUksRUFBQyxXQUE1RDtBQUF3RSxVQUFFLEVBQUMsV0FBM0U7QUFBdUYsbUJBQVcsRUFBQyx1Q0FBbkc7QUFBNkcsaUJBQVMsRUFBQztBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJKLGVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUEwQkk7QUFBRyxZQUFJLEVBQUMsUUFBUjtBQUFpQixpQkFBUyxFQUFDLFFBQTNCO0FBQUEsZ0NBQW9DLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxLQUFWO0FBQUEsaUNBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFDSCxDQXJGRDs7R0FBTUo7VUFFYUosc0RBQ0FBLHNEQUNFQSxzREFDQ0E7OztBQWtGdEIsK0RBQWVJLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQm94ID0gU3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6NDgwcHg7XHJcbiAgICBoZWlnaHQ6NDg1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMzJweDtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbiAgICB1bCxsaXtcclxuICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJj5oMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5iaWdDaGVjaz5saXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBjb2xvcjojMTc3MmY4O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmJpZ0NoZWNrPi5iaWdDaGVjazJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ubWFyZ2luMjR7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgNXB4IDA7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5pbnB1dEZvbnR7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM0ODRkNTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LmlucHV0Qm94e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljY2QyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxOTFjO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY+LmE+LnBhc3N3b3JkQm94MXtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU1ZTg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICY+LmE+LnBhc3N3b3JkQm94MT4ucGFzc3dvcmRCb3gye1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBjb2xvcjogIzE4MTkxYztcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzk4MThmO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmPi5hPi5wYXNzd29yZEJveDE+LnBhc3N3b3JkQm94Mj5saXtcclxuICAgIGxpbmUtaGVpZ2h0OjE3cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJj4uYT4ucGFzc3dvcmRCb3gxPi5wYXNzd29yZEJveDI+bGk6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIqIFwiO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmPi5hPi5iaWdCdG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2NkMjtcclxuICAgICAgICBjb2xvcjogIzc5ODE4ZjtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzLGJvcmRlciAuMjVzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMTc3MmY4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAmPi5hPi5iaWdCdG4+YTpob3ZlcntcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBhY2NvdW50Tm8gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICBjb25zdCBbcHdDaGssc2V0UHdDaGtdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcHdFcnJvcixzZXRQd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IHsuLi5lLnRhcmdldH1cclxuICAgICAgICBzZXRQd0Vycm9yKHVzZXJwdy52YWx1ZSAhPT0gdmFsdWUpIC8vIDEyMzQgPT09IDEyMzQgdHVyZVxyXG4gICAgICAgIHNldFB3Q2hrKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVybUVycm9yLHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUZXJtID0gZSA9PiB7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGUudGFyZ2V0LmNoZWNrZWQgIT09IHRydWUpIFxyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZClcclxuICAgIH0gICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYodXNlcnB3LnZhbHVlICE9PSBwd0Noaykge1xyXG4gICAgICAgICAgICBzZXRQd0Vycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFB3RXJyb3IoZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGVybSkge1xyXG4gICAgICAgICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXJwdzp1c2VycHcudmFsdWUsXHJcbiAgICAgICAgICAgIGFjY291bnRObzphY2NvdW50Tm8udmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxoMT7tmozsm5DqsIDsnoU8L2gxPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlnQ2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaWdDaGVjazJcIj7ikaAg7JW96rSA64+Z7J2YPC9saT48bGk+IC0tLS0tLS0tLS0tLS0gPC9saT4gPGxpIGNsYXNzTmFtZT1cImJpZ0NoZWNrMVwiPuKRoSDsoJXrs7TsnoXroKU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJpZFwiID7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi51c2VyaWR9IGNsYXNzTmFtZT1cImlucHV0Qm94XCIgbmFtZT1cInVzZXJpZFwiIGlkPVwidXNlcmlkXCIgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTroZwg7IKs7Jqp7ZWgIOydtOuplOydvCDsnoXroKVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4yNCBpbnB1dEZvbnRcIiBsYWJlbCBmb3I9XCJ1c2VycHdcIiA+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG5hbWU9XCJ1c2VycHdcIiBpZD1cInVzZXJwd1wiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyeheugpVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkQm94MVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc3dvcmRCb3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg64yA66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7smIHrrLgg7IaM66y47J6QIO2PrO2VqDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7siKvsnpAg7Y+s7ZWoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEw7J6QIOydtOyDgTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInB3Q2hrXCIgPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwd0Noa30gaWQ9XCJwd0Noa1wiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiAvPlxyXG4gICAgICAgICAgICAgICAgeyBwd0Vycm9yICYmIDxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJ319Puu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvZGl2PiB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjI0IGlucHV0Rm9udFwiIGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgPuydtOumhDxiciAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcm5hbWV9IGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMjQgaW5wdXRGb250XCIgbGFiZWwgZm9yPVwiYWNjb3VudE5vXCIgPuqzhOyijOuyiO2YuDxiciAvPiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLmFjY291bnROb30gY2xhc3NOYW1lPVwiaW5wdXRCb3hcIiBuYW1lPVwiYWNjb3VudE5vXCIgaWQ9XCJhY2NvdW50Tm9cIiBwbGFjZWhvbGRlcj1cIuqzhOyijOuyiO2YuCDsnoXroKVcIiBtYXhsZW5ndGg9XCIxMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJpZ0J0blwiPjxMaW5rIGhyZWY9e2AvYH0+PGE+64uk7J2MPC9hPjwvTGluaz4gPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGpvaW4iXSwibmFtZXMiOlsiTGluayIsIlN0eWxlZCIsInVzZUlucHV0IiwidXNlU3RhdGUiLCJCb3giLCJkaXYiLCJqb2luIiwidXNlcmlkIiwidXNlcnB3IiwidXNlcm5hbWUiLCJhY2NvdW50Tm8iLCJwd0NoayIsInNldFB3Q2hrIiwicHdFcnJvciIsInNldFB3RXJyb3IiLCJoYW5kbGVQYXNzd29yZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiaGFuZGxlVGVybSIsImNoZWNrZWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=