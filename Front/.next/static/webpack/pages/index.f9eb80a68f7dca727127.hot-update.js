"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./pages/main.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\grootcoin\\grootcoin\\Front\\pages\\index.jsx",
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
    var _ref = (0,C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var options, response, result;
      return C_Users_user_OneDrive_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      id: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
          className: "logo",
          src: "/grootcoin.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: "\uCF54\uC778\uC815\uBCF4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: "\uC790\uC0B0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: "\u24D8grootcoin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "/joinAgree",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 39
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "/login",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 35
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_main__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjllYjgwYTY4ZjdkY2E3MjcxMjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBSTtBQUFBOztBQUVkLGtCQUE0QkosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsbUJBQXNDZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPZSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2hCLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9pQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2xCLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9tQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcEIsTUFBWjtBQUNBTixJQUFBQSxzREFBWSxDQUFDO0FBQUNN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QTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkosZUFpQ0ksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLGNBQVY7QUFBQSw2QkFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSixlQW1DSSw4REFBQyxrREFBRDtBQUFNLFVBQUksVUFBVjtBQUFBLDZCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNKLGVBb0NJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0o7QUFBQSxrQkFESjtBQXdDSCxDQS9GRDs7R0FBTS9COztBQWlHTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2pvaW5fc3VjY2Vzc30gZnJvbSAnLi4vYXBpL2FwaSdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlcl91cmwgfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nXG5cblxuY29uc3QgaW5kZXggPSAoKT0+e1xuXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxuXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxuICAgICAgICBqb2luX3N1Y2Nlc3Moe3VzZXJpZDp1c2VyaWQsIHVzZXJuYW1lOnVzZXJuYW1lLCB1c2VycHc6dXNlcnB3LCBhY2NvdW50OmFjY291bnQsIHdhbGxldDp3YWxsZXR9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcmlkfS8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VycHd9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VhY2NvdW50fS8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdld2FsbGV0fS8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7ZqM7JuQ6rCA7J6FXCIvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZWxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbn0vPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLroZzqt7jsnbhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2xvZ2lucmVzdWx0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2dyb290Y29pbi5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuy9lOyduOygleuztDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+7J6Q7IKwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7ik5hncm9vdGNvaW48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9qb2luQWdyZWVgfT48YT7tmozsm5DqsIDsnoU8L2E+PC9MaW5rPlxuICAgICAgIFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9sb2dpbmB9PjxhPuuhnOq3uOyduDwvYT48L0xpbms+XG4gICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwidXNlU3RhdGUiLCJ1c2VyX3VybCIsIkxpbmsiLCJNYWluIiwiaW5kZXgiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlbG9naW4iLCJvcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJsb2dpbiIsInRhcmdldCIsInZhbHVlIiwibG9naW5wdyIsImNoYW5nZVVzZXJpZCIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=