"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/api.jsx":
/*!*********************!*\
  !*** ./api/api.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "join_success": () => (/* binding */ join_success),
/* harmony export */   "income_change": () => (/* binding */ income_change),
/* harmony export */   "outcome_change": () => (/* binding */ outcome_change),
/* harmony export */   "order": () => (/* binding */ order)
/* harmony export */ });
/* harmony import */ var _store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Allurl.jsx */ "./store/Allurl.jsx");

const join_success = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/join_success`, options); //restful api 

  console.log(response);
};
const income_change = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/income_change`, options); //restful api 
};
const outcome_change = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/outcome_change`, options); //restful api 
};
const order = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/order`, options); //restful api 
}; // export const login_success = async (body) => {
//     const options = {
//         method:'GET',
//     }
//     const response = await fetch(`${user_url}/login_success?userid=${userid}&userpw=${userpw}`,options) //restful api 
// }

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx";







const index = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default); //회원가입

  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: userpw,
    1: setUserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: account,
    1: setaccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: wallet,
    1: setwallet
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: logincheckresult,
    1: setlogincheckresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const changeUserid = e => {
    setUserid(e.target.value);
    console.log(userid);
  };

  const changeUsername = e => {
    setUsername(e.target.value);
  };

  const changeUserpw = e => {
    setUserpw(e.target.value);
  };

  const changeaccount = e => {
    setaccount(e.target.value);
  };

  const changewallet = e => {
    setwallet(e.target.value);
  };

  const checkuserid = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/login_check?userid=${userid}`, options); //restful api 

    let result = await response.json();
    setlogincheckresult(result);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userid);
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.join_success)({
      userid: userid,
      username: username,
      userpw: userpw,
      account: account,
      wallet: wallet
    });
  }; //로그인


  const {
    0: loginuserid,
    1: setloginuserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: loginuserpw,
    1: setloginuserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: loginresult,
    1: setloginresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const login = e => {
    setloginuserid(e.target.value);
  };

  const loginpw = e => {
    setloginuserpw(e.target.value);
  };

  const handlelogin = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`, options); //restful api 

    let result = await response.json();
    setloginresult(result.msg);

    if (result.boolean == true) {
      dispatch({
        type: 'login_boolean_true',
        payload: result.boolean,
        userid: result.content[0].userid,
        username: result.content[0].username,
        userpw: result.content[0].userpw,
        account: result.content[0].account,
        wallet: result.content[0].wallet
      });
    } else {
      dispatch({
        type: 'login_boolean_false',
        payload: result.boolean
      });
    }
  }; //입출금


  const {
    0: income,
    1: setincome
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: outcome,
    1: setoutcome
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const handleincome = e => {
    setincome(e.target.value);
  };

  const handleoutcome = e => {
    setoutcome(e.target.value);
  };

  const sendincome = e => {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.income_change)({
      userid: state.userid,
      now: state.account,
      income: income
    });
    dispatch({
      type: 'income',
      payload: Number(state.account) + Number(income)
    });
  };

  const sendoutcome = e => {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.outcome_change)({
      userid: state.userid,
      now: state.account,
      outcome: outcome
    });
    dispatch({
      type: 'outcome',
      payload: Number(state.account) - Number(outcome)
    });
  }; //주문


  const {
    0: sell,
    1: setsell
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: buy,
    1: setbuy
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: buy_unit_send,
    1: buy_unit_handle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: ordertype,
    1: setordertype
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const buy_amount = e => {
    setbuy(e.target.value);
  };

  const buy_unit = e => {
    buy_unit_handle(e.target.value);
  };

  const sell_amount = e => {
    setsell(e.target.value);
  };

  const ordertype_handle = e => {
    setordertype(e.target.value);
  };

  const orderSubmit = async e => {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.order)({
      userid: state.userid,
      sell: sell,
      sell_unit_send: 'KRW',
      buy: buy,
      buy_unit_send: buy_unit_send,
      ordertype: ordertype
    });
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/transaction?sell=${sell}&ordertype=${ordertype}`, options); //restful api 

    let result = await response.json();
    console.log(result);
  }; //장부


  const {
    0: orderlist_update,
    1: setorderlist
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const orderlist = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/orderlist`, options); //restful api 

    let result = await response.json();
    console.log(result[0].sell);
    setorderlist(JSON.stringify(result));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "userid",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "button",
          value: "\uC911\uBCF5\uD655\uC778",
          onClick: checkuserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          children: logincheckresult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "username",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "userpw",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "account",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "wallet",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined), state.login_boolean ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0 \uC815\uBCF4 \uBCA0\uD0C0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.userid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.userpw
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.wallet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: "\uACC4\uC88C \uCD9C\uAE08-\uC785\uAE09 \uAD00\uB9AC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: sendincome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            onChange: handleincome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uC785\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: sendoutcome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            onChange: handleoutcome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uCD9C\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            onChange: ordertype_handle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              children: "\uB9E4\uC218/\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 63
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "0",
              children: "\uB9E4\uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 96
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "1",
              children: "\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 127
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: orderSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            onChange: buy_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 21
          }, undefined), "KRW", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            onChange: sell_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 26
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            onChange: buy_unit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              children: "\uCF54\uC778 \uC120\uD0DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 103
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "btc",
              children: "btc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 125
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "won",
              children: "won"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 159
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "groot",
              children: "groot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 193
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 73
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uAC70\uB798"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 26
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, undefined)]
      }, void 0, true) : loginresult, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uD2B8\uB79C\uC81D\uC158 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: "\uC7A5\uBD80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        onClick: orderlist,
        children: "\uC0C8\uB85C\uACE0\uCE68"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 28
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: orderlist_update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./store/Allurl.jsx":
/*!**************************!*\
  !*** ./store/Allurl.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user_url": () => (/* binding */ user_url)
/* harmony export */ });
const user_url = 'http://localhost:3003/api/user';

/***/ }),

/***/ "./store/context.js":
/*!**************************!*\
  !*** ./store/context.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  login_boolean: false,
  userid: '',
  userpw: '',
  username: '',
  account: 0,
  wallet: 0,
  msg: ''
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxtQkFuRGYsZUFvREk7QUFBQSxrQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTBESCxDQTdNRDs7QUErTUEsaUVBQWVsRSxLQUFmOzs7Ozs7Ozs7Ozs7OztBQ3JOTyxNQUFNckIsUUFBUSxHQUFHLGdDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUVPLE1BQU00RixZQUFZLEdBQUM7QUFDdEJGLEVBQUFBLGFBQWEsRUFBQyxLQURRO0FBRXRCbEUsRUFBQUEsTUFBTSxFQUFDLEVBRmU7QUFHdEJJLEVBQUFBLE1BQU0sRUFBQyxFQUhlO0FBSXRCRixFQUFBQSxRQUFRLEVBQUMsRUFKYTtBQUt0QkksRUFBQUEsT0FBTyxFQUFDLENBTGM7QUFNdEJFLEVBQUFBLE1BQU0sRUFBQyxDQU5lO0FBT3RCMEIsRUFBQUEsR0FBRyxFQUFDO0FBUGtCLENBQW5CO0FBVVAsTUFBTXRDLEtBQUssZ0JBQUd1RSxvREFBYSxDQUFDQyxZQUFELENBQTNCO0FBRUEsaUVBQWV4RSxLQUFmOzs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vYXBpL2FwaS5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9BbGx1cmwuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZXJfdXJsfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwuanN4J1xyXG5cclxuZXhwb3J0IGNvbnN0IGpvaW5fc3VjY2VzcyA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vam9pbl9zdWNjZXNzYCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5jb21lX2NoYW5nZSA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vaW5jb21lX2NoYW5nZWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IG91dGNvbWVfY2hhbmdlID0gYXN5bmMgKGJvZHkpID0+IHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcl91cmwpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9vdXRjb21lX2NoYW5nZWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcmRlciA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vb3JkZXJgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbl9zdWNjZXNzID0gYXN5bmMgKGJvZHkpID0+IHtcclxuICAgIFxyXG4vLyAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHt1c2VyaWR9JnVzZXJwdz0ke3VzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG4vLyB9XHJcbiIsIlxyXG5pbXBvcnQge2pvaW5fc3VjY2VzcywgaW5jb21lX2NoYW5nZSwgb3V0Y29tZV9jaGFuZ2UsIG9yZGVyfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG5cclxuICAgIC8v7ZqM7JuQ6rCA7J6FXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbmNoZWNrcmVzdWx0LCBzZXRsb2dpbmNoZWNrcmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrdXNlcmlkID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9jaGVjaz91c2VyaWQ9JHt1c2VyaWR9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2luY2hlY2tyZXN1bHQocmVzdWx0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/roZzqt7jsnbhcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdC5tc2cpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5ib29sZWFuID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5fYm9vbGVhbl90cnVlJywgcGF5bG9hZDogcmVzdWx0LmJvb2xlYW4sIHVzZXJpZDpyZXN1bHQuY29udGVudFswXS51c2VyaWQsIHVzZXJuYW1lOnJlc3VsdC5jb250ZW50WzBdLnVzZXJuYW1lLCB1c2VycHc6cmVzdWx0LmNvbnRlbnRbMF0udXNlcnB3LCBhY2NvdW50OnJlc3VsdC5jb250ZW50WzBdLmFjY291bnQsIHdhbGxldDpyZXN1bHQuY29udGVudFswXS53YWxsZXR9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvZ2luX2Jvb2xlYW5fZmFsc2UnLCBwYXlsb2FkOiByZXN1bHQuYm9vbGVhbn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+yehey2nOq4iFxyXG4gICAgY29uc3QgW2luY29tZSwgc2V0aW5jb21lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtvdXRjb21lLCBzZXRvdXRjb21lXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVpbmNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGluY29tZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZW91dGNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldG91dGNvbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kaW5jb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpbmNvbWVfY2hhbmdlKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBub3c6c3RhdGUuYWNjb3VudCwgaW5jb21lOmluY29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnaW5jb21lJywgcGF5bG9hZDogTnVtYmVyKHN0YXRlLmFjY291bnQpK051bWJlcihpbmNvbWUpfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRvdXRjb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBvdXRjb21lX2NoYW5nZSh7dXNlcmlkOnN0YXRlLnVzZXJpZCwgbm93OnN0YXRlLmFjY291bnQsIG91dGNvbWU6b3V0Y29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnb3V0Y29tZScsIHBheWxvYWQ6IE51bWJlcihzdGF0ZS5hY2NvdW50KS1OdW1iZXIob3V0Y29tZSl9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v7KO866y4XHJcblxyXG4gICAgY29uc3QgW3NlbGwsIHNldHNlbGxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYnV5LCBzZXRidXldID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYnV5X3VuaXRfc2VuZCwgYnV5X3VuaXRfaGFuZGxlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW29yZGVydHlwZSwgc2V0b3JkZXJ0eXBlXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBidXlfYW1vdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRidXkoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBidXlfdW5pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgYnV5X3VuaXRfaGFuZGxlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsbF9hbW91bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHNlbGwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlcnR5cGVfaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRvcmRlcnR5cGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlclN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIG9yZGVyKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBzZWxsOnNlbGwsIHNlbGxfdW5pdF9zZW5kOidLUlcnLCBidXk6YnV5LCBidXlfdW5pdF9zZW5kOmJ1eV91bml0X3NlbmQsIG9yZGVydHlwZTpvcmRlcnR5cGV9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJ1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L3RyYW5zYWN0aW9uP3NlbGw9JHtzZWxsfSZvcmRlcnR5cGU9JHtvcmRlcnR5cGV9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v7J6l67aAXHJcbiAgICBjb25zdCBbb3JkZXJsaXN0X3VwZGF0ZSwgc2V0b3JkZXJsaXN0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBvcmRlcmxpc3QgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9vcmRlcmxpc3RgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXS5zZWxsKVxyXG4gICAgICAgIHNldG9yZGVybGlzdChKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPu2ajOybkOqwgOyehSDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcmlkXCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImJ1dHRvblwiIHZhbHVlID0gXCLspJHrs7XtmZXsnbhcIiBvbkNsaWNrID0ge2NoZWNrdXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xvZ2luY2hlY2tyZXN1bHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VybmFtZVwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJwd1wiICBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VycHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwiYWNjb3VudFwiICBvbkNoYW5nZSA9IHtjaGFuZ2VhY2NvdW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcIndhbGxldFwiIG9uQ2hhbmdlID0ge2NoYW5nZXdhbGxldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7ZqM7JuQ6rCA7J6FXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj4tLS0tLS0tLTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPuuhnOq3uOyduCDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuuhnOq3uOyduFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHsgc3RhdGUubG9naW5fYm9vbGVhbiA/IFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+7ZqM7JuQIOygleuztCDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VyaWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VycHd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VybmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLmFjY291bnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS53YWxsZXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS5tc2d9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7qs4Tsoowg7Lac6riILeyeheq4iSDqtIDrpqw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3NlbmRpbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2hhbmRsZWluY29tZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuyeheq4iFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7c2VuZG91dGNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2hhbmRsZW91dGNvbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLstpzquIhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxzZWxlY3Qgb25DaGFuZ2UgPSB7b3JkZXJ0eXBlX2hhbmRsZX0+PG9wdGlvbiB2YWx1ZSA9IFwiXCI+66ek7IiYL+unpOuPhDwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcIjBcIj7rp6TsiJg8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCIxXCI+66ek64+EPC9vcHRpb24+PC9zZWxlY3Q+PC9oMj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7b3JkZXJTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZSA9IHtidXlfYW1vdW50fSB0eXBlID0gXCJ0ZXh0XCIvPktSV1xyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PGlucHV0IG9uQ2hhbmdlID0ge3NlbGxfYW1vdW50fSB0eXBlID0gXCJ0ZXh0XCIvPjxzZWxlY3Qgb25DaGFuZ2UgPSB7YnV5X3VuaXR9PjxvcHRpb24+7L2U7J24IOyEoO2DnTwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcImJ0Y1wiPmJ0Yzwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcIndvblwiPndvbjwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcImdyb290XCI+Z3Jvb3Q8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi6rGw656YXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBsb2dpbnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj4tLS0tLS0tLTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPu2KuOuenOygneyFmCDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPuyepeu2gDwvaDM+PHNwYW4gb25DbGljayA9IHtvcmRlcmxpc3R9PuyDiOuhnOqzoOy5qDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e29yZGVybGlzdF91cGRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsImV4cG9ydCBjb25zdCB1c2VyX3VybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDMvYXBpL3VzZXInIiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbG9naW5fYm9vbGVhbjpmYWxzZSxcclxuICAgIHVzZXJpZDonJyxcclxuICAgIHVzZXJwdzonJyxcclxuICAgIHVzZXJuYW1lOicnLFxyXG4gICAgYWNjb3VudDowLFxyXG4gICAgd2FsbGV0OjAsXHJcbiAgICBtc2c6JycsXHJcbn07XHJcblxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VyX3VybCIsImpvaW5fc3VjY2VzcyIsImJvZHkiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImluY29tZV9jaGFuZ2UiLCJvdXRjb21lX2NoYW5nZSIsIm9yZGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmUiLCJpbmRleCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbmNoZWNrcmVzdWx0Iiwic2V0bG9naW5jaGVja3Jlc3VsdCIsImNoYW5nZVVzZXJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCIsImNoZWNrdXNlcmlkIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJqc29uIiwiaGFuZGxlU3VibWl0IiwibG9naW51c2VyaWQiLCJzZXRsb2dpbnVzZXJpZCIsImxvZ2ludXNlcnB3Iiwic2V0bG9naW51c2VycHciLCJsb2dpbnJlc3VsdCIsInNldGxvZ2lucmVzdWx0IiwibG9naW4iLCJsb2dpbnB3IiwiaGFuZGxlbG9naW4iLCJtc2ciLCJib29sZWFuIiwidHlwZSIsInBheWxvYWQiLCJjb250ZW50IiwiaW5jb21lIiwic2V0aW5jb21lIiwib3V0Y29tZSIsInNldG91dGNvbWUiLCJoYW5kbGVpbmNvbWUiLCJoYW5kbGVvdXRjb21lIiwic2VuZGluY29tZSIsIm5vdyIsIk51bWJlciIsInNlbmRvdXRjb21lIiwic2VsbCIsInNldHNlbGwiLCJidXkiLCJzZXRidXkiLCJidXlfdW5pdF9zZW5kIiwiYnV5X3VuaXRfaGFuZGxlIiwib3JkZXJ0eXBlIiwic2V0b3JkZXJ0eXBlIiwiYnV5X2Ftb3VudCIsImJ1eV91bml0Iiwic2VsbF9hbW91bnQiLCJvcmRlcnR5cGVfaGFuZGxlIiwib3JkZXJTdWJtaXQiLCJzZWxsX3VuaXRfc2VuZCIsIm9yZGVybGlzdF91cGRhdGUiLCJzZXRvcmRlcmxpc3QiLCJvcmRlcmxpc3QiLCJsb2dpbl9ib29sZWFuIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=