"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      userid = _useState[0],
      setUserid = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      userpw = _useState3[0],
      setUserpw = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      account = _useState4[0],
      setaccount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      wallet = _useState5[0],
      setwallet = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      loginuserid = _useState6[0],
      setloginuserid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      loginuserpw = _useState7[0],
      setloginuserpw = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('.'),
      loginresult = _useState8[0],
      setloginresult = _useState8[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(userid);
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.join_success)({
      userid: userid,
      username: username,
      userpw: userpw,
      account: account,
      wallet: wallet
    });
  };

  var handlelogin = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_4__.user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              setloginresult(result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlelogin(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var login = function login(e) {
    setloginuserid(e.target.value);
  };

  var loginpw = function loginpw(e) {
    setloginuserpw(e.target.value);
  };

  var changeUserid = function changeUserid(e) {
    setUserid(e.target.value);
    console.log(userid);
  };

  var changeUsername = function changeUsername(e) {
    setUsername(e.target.value);
  };

  var changeUserpw = function changeUserpw(e) {
    setUserpw(e.target.value);
  };

  var changeaccount = function changeaccount(e) {
    setaccount(e.target.value);
  };

  var changewallet = function changewallet(e) {
    setwallet(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "TEhpTuS4B5dnN83zKaAPaNt2Dzs=");

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2MzMzhiYWQyMjFhZTE0YTMwNmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsa0JBQTRCRiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NKLCtDQUFRLENBQUMsR0FBRCxDQUF4QztBQUFBLE1BQU9LLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBOEJSLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9TLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPVyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBc0NaLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9hLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPZSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2hCLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9pQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcEIsTUFBWjtBQUNBSixJQUFBQSxzREFBWSxDQUFDO0FBQUNJLE1BQUFBLE1BQU0sRUFB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O0FBQU8sY0FBSSxFQUFHLE1BQWQ7QUFBcUIsa0JBQVEsRUFBSUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQU8sY0FBSSxFQUFHLFFBQWQ7QUFBdUIsZUFBSyxFQUFHO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFVSTtBQUFNLGdCQUFRLEVBQUlmLFdBQWxCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJTztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixlQUFLLEVBQUc7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW9CSCxDQTNFRDs7R0FBTWhDOztBQTZFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7am9pbl9zdWNjZXNzfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlcl91cmwgfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJwdywgc2V0VXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt3YWxsZXQsIHNldHdhbGxldF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW51c2VycHcsIHNldGxvZ2ludXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnJlc3VsdCwgc2V0bG9naW5yZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9naW5wdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJwdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlYWNjb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YWNjb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZXdhbGxldCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0d2FsbGV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VyaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VycHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZWFjY291bnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZXdhbGxldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7ZqM7JuQ6rCA7J6FXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZWxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLroZzqt7jsnbhcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJqb2luX3N1Y2Nlc3MiLCJ1c2VTdGF0ZSIsInVzZXJfdXJsIiwiaW5kZXgiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlbG9naW4iLCJvcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJsb2dpbiIsInRhcmdldCIsInZhbHVlIiwibG9naW5wdyIsImNoYW5nZVVzZXJpZCIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=