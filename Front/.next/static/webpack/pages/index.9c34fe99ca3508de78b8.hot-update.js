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
              e.preventDefault(); // order({userid:state.userid, sell:sell, sell_unit_send:'KRW', buy:buy, buy_unit_send:buy_unit_send, ordertype:ordertype})

              options = {
                method: 'GET'
              };
              _context3.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/transaction"), options);

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              result = _context3.sent;
              console.log(result);

            case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWMzNGZlOTljYTM1MDhkZTc4YjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsb0JBQXlCTCxpREFBVSxDQUFDSSxtREFBRCxDQUFuQztBQUFBLE1BQU9FLEtBQVAsZUFBT0EsS0FBUDtBQUFBLE1BQWFDLFFBQWIsZUFBYUEsUUFBYixDQUZjLENBS2Q7OztBQUNBLGtCQUE0QkosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdEZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPZSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCWixJQUFBQSxTQUFTLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFNa0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTBESCxDQTdNRDs7R0FBTXRFOztBQStNTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7am9pbl9zdWNjZXNzLCBpbmNvbWVfY2hhbmdlLCBvdXRjb21lX2NoYW5nZSwgb3JkZXJ9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7IHVzZXJfdXJsIH0gZnJvbSAnLi4vc3RvcmUvQWxsdXJsJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCB7c3RhdGUsZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChTdG9yZSlcclxuXHJcblxyXG4gICAgLy/tmozsm5DqsIDsnoVcclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0YWNjb3VudF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2luY2hlY2tyZXN1bHQsIHNldGxvZ2luY2hlY2tyZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJwdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlYWNjb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YWNjb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZXdhbGxldCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0d2FsbGV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hlY2t1c2VyaWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX2NoZWNrP3VzZXJpZD0ke3VzZXJpZH1gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5jaGVja3Jlc3VsdChyZXN1bHQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuXHJcbiAgICAvL+uhnOq3uOyduFxyXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW51c2VycHcsIHNldGxvZ2ludXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnJlc3VsdCwgc2V0bG9naW5yZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9zdWNjZXNzP3VzZXJpZD0ke2xvZ2ludXNlcmlkfSZ1c2VycHc9JHtsb2dpbnVzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5yZXN1bHQocmVzdWx0Lm1zZylcclxuICAgICAgICAgICAgaWYocmVzdWx0LmJvb2xlYW4gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbl9ib29sZWFuX3RydWUnLCBwYXlsb2FkOiByZXN1bHQuYm9vbGVhbiwgdXNlcmlkOnJlc3VsdC5jb250ZW50WzBdLnVzZXJpZCwgdXNlcm5hbWU6cmVzdWx0LmNvbnRlbnRbMF0udXNlcm5hbWUsIHVzZXJwdzpyZXN1bHQuY29udGVudFswXS51c2VycHcsIGFjY291bnQ6cmVzdWx0LmNvbnRlbnRbMF0uYWNjb3VudCwgd2FsbGV0OnJlc3VsdC5jb250ZW50WzBdLndhbGxldH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5fYm9vbGVhbl9mYWxzZScsIHBheWxvYWQ6IHJlc3VsdC5ib29sZWFufSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v7J6F7Lac6riIXHJcbiAgICBjb25zdCBbaW5jb21lLCBzZXRpbmNvbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW291dGNvbWUsIHNldG91dGNvbWVdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZWluY29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0aW5jb21lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlb3V0Y29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0b3V0Y29tZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRpbmNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGluY29tZV9jaGFuZ2Uoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIG5vdzpzdGF0ZS5hY2NvdW50LCBpbmNvbWU6aW5jb21lfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdpbmNvbWUnLCBwYXlsb2FkOiBOdW1iZXIoc3RhdGUuYWNjb3VudCkrTnVtYmVyKGluY29tZSl9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VuZG91dGNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIG91dGNvbWVfY2hhbmdlKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBub3c6c3RhdGUuYWNjb3VudCwgb3V0Y29tZTpvdXRjb21lfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdvdXRjb21lJywgcGF5bG9hZDogTnVtYmVyKHN0YXRlLmFjY291bnQpLU51bWJlcihvdXRjb21lKX0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/so7zrrLhcclxuXHJcbiAgICBjb25zdCBbc2VsbCwgc2V0c2VsbF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtidXksIHNldGJ1eV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtidXlfdW5pdF9zZW5kLCBidXlfdW5pdF9oYW5kbGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbb3JkZXJ0eXBlLCBzZXRvcmRlcnR5cGVdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGJ1eV9hbW91bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGJ1eShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1eV91bml0ID0gKGUpID0+IHtcclxuICAgICAgICBidXlfdW5pdF9oYW5kbGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxsX2Ftb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0c2VsbChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVydHlwZV9oYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldG9yZGVydHlwZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVyU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgLy8gb3JkZXIoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIHNlbGw6c2VsbCwgc2VsbF91bml0X3NlbmQ6J0tSVycsIGJ1eTpidXksIGJ1eV91bml0X3NlbmQ6YnV5X3VuaXRfc2VuZCwgb3JkZXJ0eXBlOm9yZGVydHlwZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vdHJhbnNhY3Rpb25gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/snqXrtoBcclxuICAgIGNvbnN0IFtvcmRlcmxpc3RfdXBkYXRlLCBzZXRvcmRlcmxpc3RdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IG9yZGVybGlzdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L29yZGVybGlzdGAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLnNlbGwpXHJcbiAgICAgICAgc2V0b3JkZXJsaXN0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+7ZqM7JuQ6rCA7J6FIOuyoO2DgDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VyaWRcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VyaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgdmFsdWUgPSBcIuykkeuzte2ZleyduFwiIG9uQ2xpY2sgPSB7Y2hlY2t1c2VyaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bG9naW5jaGVja3Jlc3VsdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJuYW1lXCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcnB3XCIgIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJwd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJhY2NvdW50XCIgIG9uQ2hhbmdlID0ge2NoYW5nZWFjY291bnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwid2FsbGV0XCIgb25DaGFuZ2UgPSB7Y2hhbmdld2FsbGV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLtmozsm5DqsIDsnoVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pi0tLS0tLS0tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+66Gc6re47J24IOuyoO2DgDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtoYW5kbGVsb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW5wd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi66Gc6re47J24XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgeyBzdGF0ZS5sb2dpbl9ib29sZWFuID8gXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7tmozsm5Ag7KCV67O0IOuyoO2DgDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLnVzZXJpZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLnVzZXJwd308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLnVzZXJuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUuYWNjb3VudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLndhbGxldH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLm1zZ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPuqzhOyijCDstpzquIgt7J6F6riJIOq0gOumrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7c2VuZGluY29tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7aGFuZGxlaW5jb21lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7J6F6riIXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtzZW5kb3V0Y29tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7aGFuZGxlb3V0Y29tZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuy2nOq4iFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgICAgICAgICA8aDI+PHNlbGVjdCBvbkNoYW5nZSA9IHtvcmRlcnR5cGVfaGFuZGxlfT48b3B0aW9uIHZhbHVlID0gXCJcIj7rp6TsiJgv66ek64+EPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiMFwiPuunpOyImDwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcIjFcIj7rp6Trj4Q8L29wdGlvbj48L3NlbGVjdD48L2gyPiBcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtvcmRlclN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlID0ge2J1eV9hbW91bnR9IHR5cGUgPSBcInRleHRcIi8+S1JXXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48aW5wdXQgb25DaGFuZ2UgPSB7c2VsbF9hbW91bnR9IHR5cGUgPSBcInRleHRcIi8+PHNlbGVjdCBvbkNoYW5nZSA9IHtidXlfdW5pdH0+PG9wdGlvbj7svZTsnbgg7ISg7YOdPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiYnRjXCI+YnRjPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwid29uXCI+d29uPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiZ3Jvb3RcIj5ncm9vdDwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLqsbDrnphcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2lucmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pi0tLS0tLS0tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+7Yq4656c7KCd7IWYIOuyoO2DgDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+7J6l67aAPC9oMz48c3BhbiBvbkNsaWNrID0ge29yZGVybGlzdH0+7IOI66Gc6rOg7LmoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57b3JkZXJsaXN0X3VwZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImpvaW5fc3VjY2VzcyIsImluY29tZV9jaGFuZ2UiLCJvdXRjb21lX2NoYW5nZSIsIm9yZGVyIiwidXNlcl91cmwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yZSIsImluZGV4Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJpZCIsInNldFVzZXJpZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VycHciLCJzZXRVc2VycHciLCJhY2NvdW50Iiwic2V0YWNjb3VudCIsIndhbGxldCIsInNldHdhbGxldCIsImxvZ2luY2hlY2tyZXN1bHQiLCJzZXRsb2dpbmNoZWNrcmVzdWx0IiwiY2hhbmdlVXNlcmlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCIsImNoZWNrdXNlcmlkIiwicHJldmVudERlZmF1bHQiLCJvcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJsb2dpbiIsImxvZ2lucHciLCJoYW5kbGVsb2dpbiIsIm1zZyIsInR5cGUiLCJwYXlsb2FkIiwiY29udGVudCIsImluY29tZSIsInNldGluY29tZSIsIm91dGNvbWUiLCJzZXRvdXRjb21lIiwiaGFuZGxlaW5jb21lIiwiaGFuZGxlb3V0Y29tZSIsInNlbmRpbmNvbWUiLCJub3ciLCJOdW1iZXIiLCJzZW5kb3V0Y29tZSIsInNlbGwiLCJzZXRzZWxsIiwiYnV5Iiwic2V0YnV5IiwiYnV5X3VuaXRfc2VuZCIsImJ1eV91bml0X2hhbmRsZSIsIm9yZGVydHlwZSIsInNldG9yZGVydHlwZSIsImJ1eV9hbW91bnQiLCJidXlfdW5pdCIsInNlbGxfYW1vdW50Iiwib3JkZXJ0eXBlX2hhbmRsZSIsIm9yZGVyU3VibWl0Iiwib3JkZXJsaXN0X3VwZGF0ZSIsInNldG9yZGVybGlzdCIsIm9yZGVybGlzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dpbl9ib29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==