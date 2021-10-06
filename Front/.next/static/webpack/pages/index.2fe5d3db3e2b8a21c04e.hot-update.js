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

  // const ws = useRef(null);
  // useEffect(() => {
  //     ws.current = new WebSocket("ws://127.0.0.1:8080");
  //     ws.current.onopen = () => console.log();
  //     ws.current.onclose = () => console.log();
  //     return () => {
  //         ws.current.close();
  //     };
  // }, []);
  // useEffect(() => {
  //     ws.current.onmessage = (e) => console.log(`websocket data : ${e.data}`)
  // }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmZlNWQzZGIzZTJiOGEyMWMwNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBSTtBQUFBOztBQUVkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLGtCQUE0Qk4sK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT08sTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDUiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPUyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlYsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1csTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCWiwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPYSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QmQsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsbUJBQXNDaEIsK0NBQVEsQ0FBQyxHQUFELENBQTlDO0FBQUEsTUFBT2lCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDbEIsK0NBQVEsQ0FBQyxHQUFELENBQTlDO0FBQUEsTUFBT21CLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQXNDcEIsK0NBQVEsQ0FBQyxHQUFELENBQTlDO0FBQUEsTUFBT3FCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixNQUFaO0FBQ0FSLElBQUFBLHNEQUFZLENBQUM7QUFBQ1EsTUFBQUEsTUFBTSxFQUFDQSxNQUFSO0FBQWdCRSxNQUFBQSxRQUFRLEVBQUNBLFFBQXpCO0FBQW1DRSxNQUFBQSxNQUFNLEVBQUNBLE1BQTFDO0FBQWtERSxNQUFBQSxPQUFPLEVBQUNBLE9BQTFEO0FBQW1FRSxNQUFBQSxNQUFNLEVBQUNBO0FBQTFFLEtBQUQsQ0FBWjtBQUNILEdBSkQ7O0FBS0EsTUFBTWEsV0FBVztBQUFBLHlSQUFHLGlCQUFPSixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRVVJLGNBQUFBLE9BSE0sR0FHSTtBQUNaQyxnQkFBQUEsTUFBTSxFQUFDO0FBREssZUFISjtBQUFBO0FBQUEscUJBT1dDLEtBQUssV0FBSTVCLG1EQUFKLG1DQUFxQ2MsV0FBckMscUJBQTJERSxXQUEzRCxHQUF5RVUsT0FBekUsQ0FQaEI7O0FBQUE7QUFPTkcsY0FBQUEsUUFQTTtBQUFBO0FBQUEscUJBUU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQVJQOztBQUFBO0FBUVJDLGNBQUFBLE1BUlE7QUFTWlosY0FBQUEsY0FBYyxDQUFDWSxNQUFELENBQWQ7O0FBVFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWE4sV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFhQSxNQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDWCxDQUFELEVBQU87QUFDakJOLElBQUFBLGNBQWMsQ0FBQ00sQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2QsQ0FBRCxFQUFPO0FBQ25CSixJQUFBQSxjQUFjLENBQUNJLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDSCxHQUZEOztBQUtBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNmLENBQUQsRUFBTztBQUN4QmhCLElBQUFBLFNBQVMsQ0FBQ2dCLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQVgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixNQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFNaUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDaEIsQ0FBRCxFQUFPO0FBQzFCZCxJQUFBQSxXQUFXLENBQUNjLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUZEOztBQUdBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNqQixDQUFELEVBQU87QUFDeEJaLElBQUFBLFNBQVMsQ0FBQ1ksQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBR0EsTUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDbEIsQ0FBRCxFQUFPO0FBQ3pCVixJQUFBQSxVQUFVLENBQUNVLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDSCxHQUZEOztBQUdBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNuQixDQUFELEVBQU87QUFDeEJSLElBQUFBLFNBQVMsQ0FBQ1EsQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQU1ILENBN0VEOztHQUFNL0I7O0FBK0VOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG4vLyBpbXBvcnQgeyB3M2N3ZWJzb2NrZXQgYXMgVzNDV2ViU29ja2V0IH0gZnJvbSBcIndlYnNvY2tldFwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICAvLyBjb25zdCB3cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjE6ODA4MFwiKTtcclxuICAgIC8vICAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAvLyAgICAgd3MuY3VycmVudC5vbmNsb3NlID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IChlKSA9PiBjb25zb2xlLmxvZyhgd2Vic29ja2V0IGRhdGEgOiAke2UuZGF0YX1gKVxyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0YWNjb3VudF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgICAgICBqb2luX3N1Y2Nlc3Moe3VzZXJpZDp1c2VyaWQsIHVzZXJuYW1lOnVzZXJuYW1lLCB1c2VycHc6dXNlcnB3LCBhY2NvdW50OmFjY291bnQsIHdhbGxldDp3YWxsZXR9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlbG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJqb2luX3N1Y2Nlc3MiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZXJfdXJsIiwiTWFpbiIsIkhlYWRlciIsImluZGV4IiwidXNlcmlkIiwic2V0VXNlcmlkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJwdyIsInNldFVzZXJwdyIsImFjY291bnQiLCJzZXRhY2NvdW50Iiwid2FsbGV0Iiwic2V0d2FsbGV0IiwibG9naW51c2VyaWQiLCJzZXRsb2dpbnVzZXJpZCIsImxvZ2ludXNlcnB3Iiwic2V0bG9naW51c2VycHciLCJsb2dpbnJlc3VsdCIsInNldGxvZ2lucmVzdWx0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZWxvZ2luIiwib3B0aW9ucyIsIm1ldGhvZCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2lucHciLCJjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9