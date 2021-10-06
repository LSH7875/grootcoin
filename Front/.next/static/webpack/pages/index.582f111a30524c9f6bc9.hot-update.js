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
      return console.log("websocket data : ".concat(e.data.split(',')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgyZjExMWEzMDUyNGM5ZjZiYzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBSTtBQUFBOztBQUVkLE1BQU1DLEVBQUUsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQWpCO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaSyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsR0FBYSxJQUFJQyxTQUFKLENBQWMscUJBQWQsQ0FBYjs7QUFDQUYsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdFLE1BQVgsR0FBb0I7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsRUFBTjtBQUFBLEtBQXBCOztBQUNBTCxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0ssT0FBWCxHQUFxQjtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0MsR0FBUixFQUFOO0FBQUEsS0FBckI7O0FBRUEsV0FBTyxZQUFNO0FBQ1RMLE1BQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTSxLQUFYO0FBQ0gsS0FGRDtBQUdILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pLLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXTyxTQUFYLEdBQXVCLFVBQUNDLENBQUQ7QUFBQSxhQUFPTCxPQUFPLENBQUNDLEdBQVIsNEJBQWdDSSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsS0FBUCxDQUFhLEdBQWIsQ0FBaEMsRUFBUDtBQUFBLEtBQXZCO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxrQkFBNEJsQiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPbUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDcEIsK0NBQVEsQ0FBQyxHQUFE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LENBQUMsQ0FBQzZCLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFHQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNuQyxDQUFELEVBQU87QUFDekJVLElBQUFBLFVBQVUsQ0FBQ1YsQ0FBQyxDQUFDNkIsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDSCxHQUZEOztBQUdBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNwQyxDQUFELEVBQU87QUFDeEJZLElBQUFBLFNBQVMsQ0FBQ1osQ0FBQyxDQUFDNkIsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFNSCxDQTdFRDs7R0FBTXhDOztBQStFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7am9pbl9zdWNjZXNzfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlcl91cmwgfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwnXHJcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuLy8gaW1wb3J0IHsgdzNjd2Vic29ja2V0IGFzIFczQ1dlYlNvY2tldCB9IGZyb20gXCJ3ZWJzb2NrZXRcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3cy5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTI3LjAuMC4xOjgwODBcIik7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbm9wZW4gPSAoKSA9PiBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgIHdzLmN1cnJlbnQub25jbG9zZSA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbm1lc3NhZ2UgPSAoZSkgPT4gY29uc29sZS5sb2coYHdlYnNvY2tldCBkYXRhIDogJHtlLmRhdGEuc3BsaXQoJywnKX1gKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0YWNjb3VudF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgICAgICBqb2luX3N1Y2Nlc3Moe3VzZXJpZDp1c2VyaWQsIHVzZXJuYW1lOnVzZXJuYW1lLCB1c2VycHc6dXNlcnB3LCBhY2NvdW50OmFjY291bnQsIHdhbGxldDp3YWxsZXR9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlbG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJqb2luX3N1Y2Nlc3MiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZXJfdXJsIiwiTWFpbiIsIkhlYWRlciIsImluZGV4Iiwid3MiLCJjdXJyZW50IiwiV2ViU29ja2V0Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9uY2xvc2UiLCJjbG9zZSIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwic3BsaXQiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZWxvZ2luIiwib3B0aW9ucyIsIm1ldGhvZCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwibG9naW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ2lucHciLCJjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9