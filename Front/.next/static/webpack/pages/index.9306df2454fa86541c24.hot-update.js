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
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var index = function index() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch; //회원가입


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      userid = _useState[0],
      setUserid = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      userpw = _useState3[0],
      setUserpw = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      account = _useState4[0],
      setaccount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      wallet = _useState5[0],
      setwallet = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      logincheckresult = _useState6[0],
      setlogincheckresult = _useState6[1];

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

  var checkuserid = /*#__PURE__*/function () {
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
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/login_check?userid=").concat(userid), options);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              setlogincheckresult(result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkuserid(_x) {
      return _ref.apply(this, arguments);
    };
  }();

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
  }; //로그인


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginuserid = _useState7[0],
      setloginuserid = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginuserpw = _useState8[0],
      setloginuserpw = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginresult = _useState9[0],
      setloginresult = _useState9[1];

  var login = function login(e) {
    setloginuserid(e.target.value);
  };

  var loginpw = function loginpw(e) {
    setloginuserpw(e.target.value);
  };

  var handlelogin = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context2.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              result = _context2.sent;
              setloginresult(result.msg);

              if (result["boolean"] == true) {
                dispatch({
                  type: 'login_boolean_true',
                  payload: result["boolean"],
                  userid: result.content[0].userid,
                  username: result.content[0].username,
                  userpw: result.content[0].userpw,
                  account: result.content[0].account,
                  wallet: result.content[0].wallet
                });
              } else {
                dispatch({
                  type: 'login_boolean_false',
                  payload: result["boolean"]
                });
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlelogin(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); //입출금


  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      income = _useState10[0],
      setincome = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      outcome = _useState11[0],
      setoutcome = _useState11[1];

  var handleincome = function handleincome(e) {
    setincome(e.target.value);
  };

  var handleoutcome = function handleoutcome(e) {
    setoutcome(e.target.value);
  };

  var sendincome = function sendincome(e) {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.income_change)({
      userid: state.userid,
      now: state.account,
      income: income
    });
    dispatch({
      type: 'income',
      payload: Number(state.account) + Number(income)
    });
  };

  var sendoutcome = function sendoutcome(e) {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.outcome_change)({
      userid: state.userid,
      now: state.account,
      outcome: outcome
    });
    dispatch({
      type: 'outcome',
      payload: Number(state.account) - Number(outcome)
    });
  }; //주문


  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      sell = _useState12[0],
      setsell = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      buy = _useState13[0],
      setbuy = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      buy_unit_send = _useState14[0],
      buy_unit_handle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      ordertype = _useState15[0],
      setordertype = _useState15[1];

  var buy_amount = function buy_amount(e) {
    setbuy(e.target.value);
  };

  var buy_unit = function buy_unit(e) {
    buy_unit_handle(e.target.value);
  };

  var sell_amount = function sell_amount(e) {
    setsell(e.target.value);
  };

  var ordertype_handle = function ordertype_handle(e) {
    setordertype(e.target.value);
  };

  var orderSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.order)({
                userid: state.userid,
                sell: sell,
                sell_unit_send: 'KRW',
                buy: buy,
                buy_unit_send: buy_unit_send,
                ordertype: ordertype
              });
              options = {
                method: 'GET'
              };
              _context3.next = 5;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/transaction?sell=").concat(sell, "&ordertype=").concat(ordertype), options);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              result = _context3.sent;
              console.log(result);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function orderSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }(); //장부


  var _useState16 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      orderlist_update = _useState16[0],
      setorderlist = _useState16[1];

  var orderlist = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context4.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/orderlist"), options);

            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.json();

            case 7:
              result = _context4.sent;
              console.log(result[0].sell);
              setorderlist(JSON.stringify(result));

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function orderlist(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "userid",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "button",
          value: "\uC911\uBCF5\uD655\uC778",
          onClick: checkuserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          children: logincheckresult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "username",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "userpw",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "account",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "wallet",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, _this), state.login_boolean ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0 \uC815\uBCF4 \uBCA0\uD0C0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.userid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.userpw
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.wallet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: "\uACC4\uC88C \uCD9C\uAE08-\uC785\uAE09 \uAD00\uB9AC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: sendincome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            onChange: handleincome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uC785\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: sendoutcome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            onChange: handleoutcome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uCD9C\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            onChange: ordertype_handle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "",
              children: "\uB9E4\uC218/\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 63
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "0",
              children: "\uB9E4\uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "1",
              children: "\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 127
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: orderSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            onChange: buy_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 21
          }, _this), "KRW", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            onChange: sell_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            onChange: buy_unit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "\uCF54\uC778 \uC120\uD0DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 103
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "btc",
              children: "btc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 125
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "won",
              children: "won"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 159
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "groot",
              children: "groot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 193
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 73
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uAC70\uB798"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 26
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, _this)]
      }, void 0, true) : loginresult, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uD2B8\uB79C\uC81D\uC158 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
        children: "\uC7A5\uBD80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        onClick: orderlist,
        children: "\uC0C8\uB85C\uACE0\uCE68"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 28
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: orderlist_update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "2OEnshRR4JGc1/HIGmdckDTqC10=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMwNmRmMjQ1NGZhODY1NDFjMjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsb0JBQXlCTCxpREFBVSxDQUFDSSxtREFBRCxDQUFuQztBQUFBLE1BQU9FLEtBQVAsZUFBT0EsS0FBUDtBQUFBLE1BQWFDLFFBQWIsZUFBYUEsUUFBYixDQUZjLENBS2Q7OztBQUNBLGtCQUE0QkosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdEZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPZSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCWixJQUFBQSxTQUFTLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFNa0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixD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LGVBaURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakRKLGVBa0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbERKLGVBbURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkRKLGVBbURlO0FBQU0sZUFBTyxFQUFJbUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRGYsZUFvREk7QUFBQSxrQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBMERILENBN01EOztHQUFNdkU7O0FBK01OLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3MsIGluY29tZV9jaGFuZ2UsIG91dGNvbWVfY2hhbmdlLCBvcmRlcn0gZnJvbSAnLi4vYXBpL2FwaSdcclxuaW1wb3J0IHsgdXNlcl91cmwgfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb250ZXh0J1xyXG5cclxuY29uc3QgaW5kZXggPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IHtzdGF0ZSxkaXNwYXRjaH0gPSB1c2VDb250ZXh0KFN0b3JlKVxyXG5cclxuXHJcbiAgICAvL+2ajOybkOqwgOyehVxyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJwdywgc2V0VXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt3YWxsZXQsIHNldHdhbGxldF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5jaGVja3Jlc3VsdCwgc2V0bG9naW5jaGVja3Jlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXNlcmlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVXNlcnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VhY2NvdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRhY2NvdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdld2FsbGV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXR3YWxsZXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja3VzZXJpZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fY2hlY2s/dXNlcmlkPSR7dXNlcmlkfWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbmNoZWNrcmVzdWx0KHJlc3VsdClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgICAgICBqb2luX3N1Y2Nlc3Moe3VzZXJpZDp1c2VyaWQsIHVzZXJuYW1lOnVzZXJuYW1lLCB1c2VycHc6dXNlcnB3LCBhY2NvdW50OmFjY291bnQsIHdhbGxldDp3YWxsZXR9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v66Gc6re47J24XHJcbiAgICBjb25zdCBbbG9naW51c2VyaWQsIHNldGxvZ2ludXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJwdywgc2V0bG9naW51c2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2lucmVzdWx0LCBzZXRsb2dpbnJlc3VsdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9naW5wdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlbG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX3N1Y2Nlc3M/dXNlcmlkPSR7bG9naW51c2VyaWR9JnVzZXJwdz0ke2xvZ2ludXNlcnB3fWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRsb2dpbnJlc3VsdChyZXN1bHQubXNnKVxyXG4gICAgICAgICAgICBpZihyZXN1bHQuYm9vbGVhbiA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvZ2luX2Jvb2xlYW5fdHJ1ZScsIHBheWxvYWQ6IHJlc3VsdC5ib29sZWFuLCB1c2VyaWQ6cmVzdWx0LmNvbnRlbnRbMF0udXNlcmlkLCB1c2VybmFtZTpyZXN1bHQuY29udGVudFswXS51c2VybmFtZSwgdXNlcnB3OnJlc3VsdC5jb250ZW50WzBdLnVzZXJwdywgYWNjb3VudDpyZXN1bHQuY29udGVudFswXS5hY2NvdW50LCB3YWxsZXQ6cmVzdWx0LmNvbnRlbnRbMF0ud2FsbGV0fSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbl9ib29sZWFuX2ZhbHNlJywgcGF5bG9hZDogcmVzdWx0LmJvb2xlYW59KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/snoXstpzquIhcclxuICAgIGNvbnN0IFtpbmNvbWUsIHNldGluY29tZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbb3V0Y29tZSwgc2V0b3V0Y29tZV0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlaW5jb21lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRpbmNvbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVvdXRjb21lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRvdXRjb21lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VuZGluY29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaW5jb21lX2NoYW5nZSh7dXNlcmlkOnN0YXRlLnVzZXJpZCwgbm93OnN0YXRlLmFjY291bnQsIGluY29tZTppbmNvbWV9KVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2luY29tZScsIHBheWxvYWQ6IE51bWJlcihzdGF0ZS5hY2NvdW50KStOdW1iZXIoaW5jb21lKX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kb3V0Y29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgb3V0Y29tZV9jaGFuZ2Uoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIG5vdzpzdGF0ZS5hY2NvdW50LCBvdXRjb21lOm91dGNvbWV9KVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ291dGNvbWUnLCBwYXlsb2FkOiBOdW1iZXIoc3RhdGUuYWNjb3VudCktTnVtYmVyKG91dGNvbWUpfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+yjvOusuFxyXG5cclxuICAgIGNvbnN0IFtzZWxsLCBzZXRzZWxsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2J1eSwgc2V0YnV5XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2J1eV91bml0X3NlbmQsIGJ1eV91bml0X2hhbmRsZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtvcmRlcnR5cGUsIHNldG9yZGVydHlwZV0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgYnV5X2Ftb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YnV5KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYnV5X3VuaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGJ1eV91bml0X2hhbmRsZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGxfYW1vdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRzZWxsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJ0eXBlX2hhbmRsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0b3JkZXJ0eXBlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBvcmRlcih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgc2VsbDpzZWxsLCBzZWxsX3VuaXRfc2VuZDonS1JXJywgYnV5OmJ1eSwgYnV5X3VuaXRfc2VuZDpidXlfdW5pdF9zZW5kLCBvcmRlcnR5cGU6b3JkZXJ0eXBlfSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCdcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS90cmFuc2FjdGlvbj9zZWxsPSR7c2VsbH0mb3JkZXJ0eXBlPSR7b3JkZXJ0eXBlfWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+yepeu2gFxyXG4gICAgY29uc3QgW29yZGVybGlzdF91cGRhdGUsIHNldG9yZGVybGlzdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3Qgb3JkZXJsaXN0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vb3JkZXJsaXN0YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0uc2VsbClcclxuICAgICAgICBzZXRvcmRlcmxpc3QoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoUg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJpZFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJidXR0b25cIiB2YWx1ZSA9IFwi7KSR67O17ZmV7J24XCIgb25DbGljayA9IHtjaGVja3VzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2dpbmNoZWNrcmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcm5hbWVcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VybmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VycHdcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcImFjY291bnRcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ3YWxsZXRcIiBvbkNoYW5nZSA9IHtjaGFuZ2V3YWxsZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIu2ajOybkOqwgOyehVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZWxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLroZzqt7jsnbhcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7IHN0YXRlLmxvZ2luX2Jvb2xlYW4gPyBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPu2ajOybkCDsoJXrs7Qg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcmlkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcnB3fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS5hY2NvdW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUud2FsbGV0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUubXNnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+6rOE7KKMIOy2nOq4iC3snoXquIkg6rSA66asPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtzZW5kaW5jb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVpbmNvbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLsnoXquIhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3NlbmRvdXRjb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVvdXRjb21lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7Lac6riIXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj48c2VsZWN0IG9uQ2hhbmdlID0ge29yZGVydHlwZV9oYW5kbGV9PjxvcHRpb24gdmFsdWUgPSBcIlwiPuunpOyImC/rp6Trj4Q8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCIwXCI+66ek7IiYPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiMVwiPuunpOuPhDwvb3B0aW9uPjwvc2VsZWN0PjwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge29yZGVyU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7YnV5X2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz5LUldcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxpbnB1dCBvbkNoYW5nZSA9IHtzZWxsX2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz48c2VsZWN0IG9uQ2hhbmdlID0ge2J1eV91bml0fT48b3B0aW9uPuy9lOyduCDshKDtg508L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJidGNcIj5idGM8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJ3b25cIj53b248L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJncm9vdFwiPmdyb290PC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuqxsOuemFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbG9naW5yZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tirjrnpzsoJ3shZgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz7snqXrtoA8L2gzPjxzcGFuIG9uQ2xpY2sgPSB7b3JkZXJsaXN0fT7sg4jroZzqs6Dsuag8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvcmRlcmxpc3RfdXBkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwiaW5jb21lX2NoYW5nZSIsIm91dGNvbWVfY2hhbmdlIiwib3JkZXIiLCJ1c2VyX3VybCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlIiwiaW5kZXgiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcmlkIiwic2V0VXNlcmlkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJwdyIsInNldFVzZXJwdyIsImFjY291bnQiLCJzZXRhY2NvdW50Iiwid2FsbGV0Iiwic2V0d2FsbGV0IiwibG9naW5jaGVja3Jlc3VsdCIsInNldGxvZ2luY2hlY2tyZXN1bHQiLCJjaGFuZ2VVc2VyaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVXNlcm5hbWUiLCJjaGFuZ2VVc2VycHciLCJjaGFuZ2VhY2NvdW50IiwiY2hhbmdld2FsbGV0IiwiY2hlY2t1c2VyaWQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJtZXRob2QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImxvZ2luIiwibG9naW5wdyIsImhhbmRsZWxvZ2luIiwibXNnIiwidHlwZSIsInBheWxvYWQiLCJjb250ZW50IiwiaW5jb21lIiwic2V0aW5jb21lIiwib3V0Y29tZSIsInNldG91dGNvbWUiLCJoYW5kbGVpbmNvbWUiLCJoYW5kbGVvdXRjb21lIiwic2VuZGluY29tZSIsIm5vdyIsIk51bWJlciIsInNlbmRvdXRjb21lIiwic2VsbCIsInNldHNlbGwiLCJidXkiLCJzZXRidXkiLCJidXlfdW5pdF9zZW5kIiwiYnV5X3VuaXRfaGFuZGxlIiwib3JkZXJ0eXBlIiwic2V0b3JkZXJ0eXBlIiwiYnV5X2Ftb3VudCIsImJ1eV91bml0Iiwic2VsbF9hbW91bnQiLCJvcmRlcnR5cGVfaGFuZGxlIiwib3JkZXJTdWJtaXQiLCJzZWxsX3VuaXRfc2VuZCIsIm9yZGVybGlzdF91cGRhdGUiLCJzZXRvcmRlcmxpc3QiLCJvcmRlcmxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibG9naW5fYm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=