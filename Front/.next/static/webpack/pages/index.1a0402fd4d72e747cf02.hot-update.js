"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ "./pages/main.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_19\\1006\\grootcoin\\Front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






 // import { w3cwebsocket as W3CWebSocket } from "websocket";




var index = function index() {
  _s();

  var ws = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    ws.current = new WebSocket("ws://127.0.0.1:8080");

    ws.current.onopen = function () {
      return console.log();
    };

    ws.current.onclose = function () {
      return console.log();
    };

    return function () {
      ws.current.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    ws.current.onmessage = function (e) {
      return console.log("websocket data : ".concat(e.data.split()));
    };
  }, []);

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
    var _ref = (0,C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var options, response, result;
      return C_Users_KGA_19_1006_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_main__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(index, "QCwCZr4ZmGiEL5MWo7IHMWFsG+Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWEwNDAyZmQ0ZDcyZTc0N2NmMDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBSTtBQUFBOztBQUVkLE1BQU1DLEVBQUUsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQWpCO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaSyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsR0FBYSxJQUFJQyxTQUFKLENBQWMscUJBQWQsQ0FBYjs7QUFDQUYsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdFLE1BQVgsR0FBb0I7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsRUFBTjtBQUFBLEtBQXBCOztBQUNBTCxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0ssT0FBWCxHQUFxQjtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBckI7O0FBRUEsV0FBTyxZQUFNO0FBQ1RMLE1BQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTSxLQUFYO0FBQ0gsS0FGRDtBQUdILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pLLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTyxTQUFYLEdBQXVCLFVBQUNDLENBQUQ7QUFBQSxhQUFPTCxPQUFPLENBQUNDLEdBQVIsNEJBQWdDSSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsS0FBUCxFQUFoQyxFQUFQO0FBQUEsS0FBdkI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLGtCQUE0QmxCLCtDQUFRLENBQUMsR0FBRCxDQUFwQztBQUFBLE1BQU9tQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NwQiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFB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NkIsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDSCxHQUZEOztBQUdBLE1BQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ25DLENBQUQsRUFBTztBQUN6QlUsSUFBQUEsVUFBVSxDQUFDVixDQUFDLENBQUM2QixNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUNILEdBRkQ7O0FBR0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3BDLENBQUQsRUFBTztBQUN4QlksSUFBQUEsU0FBUyxDQUFDWixDQUFDLENBQUM2QixNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQU1ILENBN0VEOztHQUFNeEM7O0FBK0VOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG4vLyBpbXBvcnQgeyB3M2N3ZWJzb2NrZXQgYXMgVzNDV2ViU29ja2V0IH0gZnJvbSBcIndlYnNvY2tldFwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCB3cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjE6ODA4MFwiKTtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbmNsb3NlID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IChlKSA9PiBjb25zb2xlLmxvZyhgd2Vic29ja2V0IGRhdGEgOiAke2UuZGF0YS5zcGxpdCgpfWApXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJwdywgc2V0VXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt3YWxsZXQsIHNldHdhbGxldF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW51c2VycHcsIHNldGxvZ2ludXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnJlc3VsdCwgc2V0bG9naW5yZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9naW5wdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJwdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlYWNjb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YWNjb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZXdhbGxldCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0d2FsbGV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImpvaW5fc3VjY2VzcyIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlcl91cmwiLCJNYWluIiwiSGVhZGVyIiwiaW5kZXgiLCJ3cyIsImN1cnJlbnQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImNsb3NlIiwib25tZXNzYWdlIiwiZSIsImRhdGEiLCJzcGxpdCIsInVzZXJpZCIsInNldFVzZXJpZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VycHciLCJzZXRVc2VycHciLCJhY2NvdW50Iiwic2V0YWNjb3VudCIsIndhbGxldCIsInNldHdhbGxldCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlbG9naW4iLCJvcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJsb2dpbiIsInRhcmdldCIsInZhbHVlIiwibG9naW5wdyIsImNoYW5nZVVzZXJpZCIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=