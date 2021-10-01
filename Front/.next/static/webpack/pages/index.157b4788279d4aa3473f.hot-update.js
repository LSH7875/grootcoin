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
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/transaction"), options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTU3YjQ3ODgyNzlkNGFhMzQ3M2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsb0JBQXlCTCxpREFBVSxDQUFDSSxtREFBRCxDQUFuQztBQUFBLE1BQU9FLEtBQVAsZUFBT0EsS0FBUDtBQUFBLE1BQWFDLFFBQWIsZUFBYUEsUUFBYixDQUZjLENBS2Q7OztBQUNBLGtCQUE0QkosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdEZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPZSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCWixJQUFBQSxTQUFTLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFNa0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixD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QUFBO0FBQUEsZUFqREosZUFrREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsREosZUFtREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuREosZUFtRGU7QUFBTSxlQUFPLEVBQUltQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5EZixlQW9ESTtBQUFBLGtCQUFNRjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUEwREgsQ0E3TUQ7O0dBQU12RTs7QUErTU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge2pvaW5fc3VjY2VzcywgaW5jb21lX2NoYW5nZSwgb3V0Y29tZV9jaGFuZ2UsIG9yZGVyfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG5cclxuICAgIC8v7ZqM7JuQ6rCA7J6FXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbmNoZWNrcmVzdWx0LCBzZXRsb2dpbmNoZWNrcmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrdXNlcmlkID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9jaGVjaz91c2VyaWQ9JHt1c2VyaWR9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2luY2hlY2tyZXN1bHQocmVzdWx0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/roZzqt7jsnbhcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdC5tc2cpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5ib29sZWFuID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5fYm9vbGVhbl90cnVlJywgcGF5bG9hZDogcmVzdWx0LmJvb2xlYW4sIHVzZXJpZDpyZXN1bHQuY29udGVudFswXS51c2VyaWQsIHVzZXJuYW1lOnJlc3VsdC5jb250ZW50WzBdLnVzZXJuYW1lLCB1c2VycHc6cmVzdWx0LmNvbnRlbnRbMF0udXNlcnB3LCBhY2NvdW50OnJlc3VsdC5jb250ZW50WzBdLmFjY291bnQsIHdhbGxldDpyZXN1bHQuY29udGVudFswXS53YWxsZXR9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvZ2luX2Jvb2xlYW5fZmFsc2UnLCBwYXlsb2FkOiByZXN1bHQuYm9vbGVhbn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+yehey2nOq4iFxyXG4gICAgY29uc3QgW2luY29tZSwgc2V0aW5jb21lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtvdXRjb21lLCBzZXRvdXRjb21lXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVpbmNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGluY29tZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZW91dGNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldG91dGNvbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kaW5jb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpbmNvbWVfY2hhbmdlKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBub3c6c3RhdGUuYWNjb3VudCwgaW5jb21lOmluY29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnaW5jb21lJywgcGF5bG9hZDogTnVtYmVyKHN0YXRlLmFjY291bnQpK051bWJlcihpbmNvbWUpfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRvdXRjb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBvdXRjb21lX2NoYW5nZSh7dXNlcmlkOnN0YXRlLnVzZXJpZCwgbm93OnN0YXRlLmFjY291bnQsIG91dGNvbWU6b3V0Y29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnb3V0Y29tZScsIHBheWxvYWQ6IE51bWJlcihzdGF0ZS5hY2NvdW50KS1OdW1iZXIob3V0Y29tZSl9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v7KO866y4XHJcblxyXG4gICAgY29uc3QgW3NlbGwsIHNldHNlbGxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYnV5LCBzZXRidXldID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYnV5X3VuaXRfc2VuZCwgYnV5X3VuaXRfaGFuZGxlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW29yZGVydHlwZSwgc2V0b3JkZXJ0eXBlXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBidXlfYW1vdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRidXkoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBidXlfdW5pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgYnV5X3VuaXRfaGFuZGxlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsbF9hbW91bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHNlbGwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlcnR5cGVfaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRvcmRlcnR5cGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlclN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIG9yZGVyKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBzZWxsOnNlbGwsIHNlbGxfdW5pdF9zZW5kOidLUlcnLCBidXk6YnV5LCBidXlfdW5pdF9zZW5kOmJ1eV91bml0X3NlbmQsIG9yZGVydHlwZTpvcmRlcnR5cGV9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS90cmFuc2FjdGlvbmAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+yepeu2gFxyXG4gICAgY29uc3QgW29yZGVybGlzdF91cGRhdGUsIHNldG9yZGVybGlzdF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3Qgb3JkZXJsaXN0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vb3JkZXJsaXN0YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0uc2VsbClcclxuICAgICAgICBzZXRvcmRlcmxpc3QoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoUg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJpZFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJidXR0b25cIiB2YWx1ZSA9IFwi7KSR67O17ZmV7J24XCIgb25DbGljayA9IHtjaGVja3VzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2dpbmNoZWNrcmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcm5hbWVcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VybmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VycHdcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcImFjY291bnRcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ3YWxsZXRcIiBvbkNoYW5nZSA9IHtjaGFuZ2V3YWxsZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIu2ajOybkOqwgOyehVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZWxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLroZzqt7jsnbhcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7IHN0YXRlLmxvZ2luX2Jvb2xlYW4gPyBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPu2ajOybkCDsoJXrs7Qg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcmlkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcnB3fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS5hY2NvdW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUud2FsbGV0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUubXNnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+6rOE7KKMIOy2nOq4iC3snoXquIkg6rSA66asPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtzZW5kaW5jb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVpbmNvbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLsnoXquIhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3NlbmRvdXRjb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVvdXRjb21lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7Lac6riIXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj48c2VsZWN0IG9uQ2hhbmdlID0ge29yZGVydHlwZV9oYW5kbGV9PjxvcHRpb24gdmFsdWUgPSBcIlwiPuunpOyImC/rp6Trj4Q8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCIwXCI+66ek7IiYPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiMVwiPuunpOuPhDwvb3B0aW9uPjwvc2VsZWN0PjwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge29yZGVyU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7YnV5X2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz5LUldcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxpbnB1dCBvbkNoYW5nZSA9IHtzZWxsX2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz48c2VsZWN0IG9uQ2hhbmdlID0ge2J1eV91bml0fT48b3B0aW9uPuy9lOyduCDshKDtg508L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJidGNcIj5idGM8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJ3b25cIj53b248L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJncm9vdFwiPmdyb290PC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuqxsOuemFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbG9naW5yZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tirjrnpzsoJ3shZgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz7snqXrtoA8L2gzPjxzcGFuIG9uQ2xpY2sgPSB7b3JkZXJsaXN0fT7sg4jroZzqs6Dsuag8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvcmRlcmxpc3RfdXBkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiam9pbl9zdWNjZXNzIiwiaW5jb21lX2NoYW5nZSIsIm91dGNvbWVfY2hhbmdlIiwib3JkZXIiLCJ1c2VyX3VybCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlIiwiaW5kZXgiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcmlkIiwic2V0VXNlcmlkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJwdyIsInNldFVzZXJwdyIsImFjY291bnQiLCJzZXRhY2NvdW50Iiwid2FsbGV0Iiwic2V0d2FsbGV0IiwibG9naW5jaGVja3Jlc3VsdCIsInNldGxvZ2luY2hlY2tyZXN1bHQiLCJjaGFuZ2VVc2VyaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVXNlcm5hbWUiLCJjaGFuZ2VVc2VycHciLCJjaGFuZ2VhY2NvdW50IiwiY2hhbmdld2FsbGV0IiwiY2hlY2t1c2VyaWQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJtZXRob2QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImxvZ2luIiwibG9naW5wdyIsImhhbmRsZWxvZ2luIiwibXNnIiwidHlwZSIsInBheWxvYWQiLCJjb250ZW50IiwiaW5jb21lIiwic2V0aW5jb21lIiwib3V0Y29tZSIsInNldG91dGNvbWUiLCJoYW5kbGVpbmNvbWUiLCJoYW5kbGVvdXRjb21lIiwic2VuZGluY29tZSIsIm5vdyIsIk51bWJlciIsInNlbmRvdXRjb21lIiwic2VsbCIsInNldHNlbGwiLCJidXkiLCJzZXRidXkiLCJidXlfdW5pdF9zZW5kIiwiYnV5X3VuaXRfaGFuZGxlIiwib3JkZXJ0eXBlIiwic2V0b3JkZXJ0eXBlIiwiYnV5X2Ftb3VudCIsImJ1eV91bml0Iiwic2VsbF9hbW91bnQiLCJvcmRlcnR5cGVfaGFuZGxlIiwib3JkZXJTdWJtaXQiLCJzZWxsX3VuaXRfc2VuZCIsIm9yZGVybGlzdF91cGRhdGUiLCJzZXRvcmRlcmxpc3QiLCJvcmRlcmxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibG9naW5fYm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=