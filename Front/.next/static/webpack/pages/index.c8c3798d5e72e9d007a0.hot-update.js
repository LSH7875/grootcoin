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
      return console.log("websocket data : ".concat(e.data.replace('[', '').replace(']', '')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhjMzc5OGQ1ZTcyZTlkMDA3YTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBSTtBQUFBOztBQUVkLE1BQU1DLEVBQUUsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQWpCO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaSyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsR0FBYSxJQUFJQyxTQUFKLENBQWMscUJBQWQsQ0FBYjs7QUFDQUYsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdFLE1BQVgsR0FBb0I7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsRUFBTjtBQUFBLEtBQXBCOztBQUNBTCxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0ssT0FBWCxHQUFxQjtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBckI7O0FBRUEsV0FBTyxZQUFNO0FBQ1RMLE1BQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTSxLQUFYO0FBQ0gsS0FGRDtBQUdILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pLLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTyxTQUFYLEdBQXVCLFVBQUNDLENBQUQ7QUFBQSxhQUFPTCxPQUFPLENBQUNDLEdBQVIsNEJBQWdDSSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsT0FBUCxDQUFlLEdBQWYsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLEdBQS9CLEVBQW1DLEVBQW5DLENBQWhDLEVBQVA7QUFBQSxLQUF2QjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsa0JBQTRCbEIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT21CLE1B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QWZBLFlBQWUsQ0FBQ2xDLENBQUQsRUFBTztBQUN4QlEsSUFBQUEsU0FBUyxDQUFDUixDQUFDLENBQUM2QixNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBR0EsTUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDbkMsQ0FBRCxFQUFPO0FBQ3pCVSxJQUFBQSxVQUFVLENBQUNWLENBQUMsQ0FBQzZCLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0gsR0FGRDs7QUFHQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDcEMsQ0FBRCxFQUFPO0FBQ3hCWSxJQUFBQSxTQUFTLENBQUNaLENBQUMsQ0FBQzZCLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURKO0FBTUgsQ0E3RUQ7O0dBQU14Qzs7QUErRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge2pvaW5fc3VjY2Vzc30gZnJvbSAnLi4vYXBpL2FwaSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZXJfdXJsIH0gZnJvbSAnLi4vc3RvcmUvQWxsdXJsJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbi8vIGltcG9ydCB7IHczY3dlYnNvY2tldCBhcyBXM0NXZWJTb2NrZXQgfSBmcm9tIFwid2Vic29ja2V0XCI7XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IHdzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd3MuY3VycmVudCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovLzEyNy4wLjAuMTo4MDgwXCIpO1xyXG4gICAgICAgIHdzLmN1cnJlbnQub25vcGVuID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuICAgICAgICB3cy5jdXJyZW50Lm9uY2xvc2UgPSAoKSA9PiBjb25zb2xlLmxvZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3cy5jdXJyZW50LmNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdzLmN1cnJlbnQub25tZXNzYWdlID0gKGUpID0+IGNvbnNvbGUubG9nKGB3ZWJzb2NrZXQgZGF0YSA6ICR7ZS5kYXRhLnJlcGxhY2UoJ1snLCcnKS5yZXBsYWNlKCddJywnJyl9YClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBbbG9naW51c2VyaWQsIHNldGxvZ2ludXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJwdywgc2V0bG9naW51c2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9zdWNjZXNzP3VzZXJpZD0ke2xvZ2ludXNlcmlkfSZ1c2VycHc9JHtsb2dpbnVzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5yZXN1bHQocmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXNlcmlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VhY2NvdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdld2FsbGV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VyX3VybCIsIk1haW4iLCJIZWFkZXIiLCJpbmRleCIsIndzIiwiY3VycmVudCIsIldlYlNvY2tldCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiY2xvc2UiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsInJlcGxhY2UiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZWxvZ2luIiwib3B0aW9ucyIsIm1ldGhvZCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2lucHciLCJjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9