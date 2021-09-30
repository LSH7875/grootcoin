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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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

  var handlelogin = function handlelogin(e) {
    e.preventDefault();

    login_success = /*#__PURE__*/function () {
      var _ref = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(body) {
        var options, response, result;
        return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  method: 'GET'
                };
                _context.next = 3;
                return fetch("".concat(user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options);

              case 3:
                response = _context.sent;
                //restful api 
                result = response.json();
                setloginresult(result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function login_success(_x) {
        return _ref.apply(this, arguments);
      };
    }();
  };

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWZhM2YzNWE5MWJiM2UxNjZkYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsa0JBQTRCRCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NILCtDQUFRLENBQUMsR0FBRCxDQUF4QztBQUFBLE1BQU9JLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCTCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBc0NYLCtDQUFRLENBQUMsR0FBRCxDQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDYiwrQ0FBUSxDQUFDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPYyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFzQ2YsK0NBQVEsQ0FBQyxHQUFELENBQTlDO0FBQUEsTUFBT2dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixNQUFaO0FBQ0FILElBQUFBLHNEQUFZLENBQUM7QUFBQ0csTUFBQUEsTUFBTSxFQUFDQSxNQUFS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QztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUk7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixlQUFLLEVBQUc7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVVJO0FBQU0sZ0JBQVEsRUFBSWxCLFdBQWxCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJVTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUcsTUFBZDtBQUFxQixrQkFBUSxFQUFJRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixlQUFLLEVBQUc7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW9CSCxDQTlFRDs7R0FBTW5DOztBQWdGTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7am9pbl9zdWNjZXNzfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBbbG9naW51c2VyaWQsIHNldGxvZ2ludXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJwdywgc2V0bG9naW51c2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBsb2dpbl9zdWNjZXNzID0gYXN5bmMgKGJvZHkpID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXNlcmlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VhY2NvdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdld2FsbGV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJwd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7Y2hhbmdld2FsbGV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLtmozsm5DqsIDsnoVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuuhnOq3uOyduFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImpvaW5fc3VjY2VzcyIsInVzZVN0YXRlIiwiaW5kZXgiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlbG9naW4iLCJsb2dpbl9zdWNjZXNzIiwiYm9keSIsIm9wdGlvbnMiLCJtZXRob2QiLCJmZXRjaCIsInVzZXJfdXJsIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJqc29uIiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2lucHciLCJjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9