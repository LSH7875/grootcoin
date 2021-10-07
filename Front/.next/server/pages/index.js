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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "join_success": () => (/* binding */ join_success)
/* harmony export */ });
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");

const join_success = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_0__.user_url}/join_success`, options); //restful api 

  console.log(response);
};

/***/ }),

/***/ "./components/buyAndSell.jsx":
/*!***********************************!*\
  !*** ./components/buyAndSell.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\buyAndSell.jsx";





const buycolor = {
  "background": "rgba(225,35,67)",
  "color": "#fff"
};
const sellcolor = {
  "background": "rgba(23,99,182)",
  "color": "#fff"
};

const Buy = () => {
  const {
    0: buyPrice,
    1: setBuyPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: volume,
    1: setVolume
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  console.log(state.login_boolean == false);

  const buyApi = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:3003/api/coin/buy_order", {
      userid: "da",
      price: buyPrice,
      qty: volume,
      ordertype: 0,
      rest: volume,
      coin_id: 1
    }, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => console.log(response)).catch(error => {
      console.log('실패났음', error);
    });
  };

  const priceUp = () => {
    setBuyPrice(price => price + 1);
  };

  const priceDown = () => {
    setBuyPrice(price => price > 0 ? price - 1 : 0);
  };

  const volumeUp = () => {
    setVolume(volume => volume + 1);
  };

  const volumeDown = () => {
    setVolume(volume => volume > 0 ? volume - 1 : 0);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uBCF4\uC720"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uB9E4\uC218 \uAC00\uB2A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "priceBox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
        children: "\uAC00\uACA9(KRW)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        className: "coinPrice",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: buyPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "plusMinus",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: priceDown,
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: priceUp,
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "priceBox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
        children: "\uC218\uB7C9(GRT)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        className: "coinPrice",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: volume
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "plusMinus",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: volumeDown,
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: volumeUp,
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uC8FC\uBB38 \uAE08\uC561"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uB9E4\uC218 \uC218\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 GRT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined), state.login_boolean === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/login`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "buy Btn2",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: buyApi,
      className: "buy Btn2",
      children: "\uB9E4\uC218"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, undefined);
};

const Sell = () => {
  const {
    0: sellPrice,
    1: setSellPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: volume,
    1: setVolume
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  console.log(state.login_boolean == false);

  const sellApi = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:3003/api/coin/buy_order", {
      userid: "da",
      price: sellPrice,
      qty: volume,
      ordertype: 1,
      rest: volume,
      coin_id: 1
    }, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => console.log(response)).catch(error => {
      console.log('실패났음', error);
    });
  };

  const onUp = () => {
    setSellPrice(price => price + 1);
  };

  const onDown = () => {
    setSellPrice(price => price > 0 ? price - 1 : 0);
  };

  const volumeUp = () => {
    setVolume(volume => volume + 1);
  };

  const volumeDown = () => {
    setVolume(volume => volume > 0 ? volume - 1 : 0);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uBCF4\uC720"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 GRT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uB9E4\uB3C4 \uAC00\uB2A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 GRT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "priceBox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
        children: "\uAC00\uACA9(KRW)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        className: "coinPrice",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: sellPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "plusMinus",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: onDown,
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: onUp,
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "priceBox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
        children: "\uC218\uB7C9(GRT)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        className: "coinPrice",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: volume
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "plusMinus",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: volumeDown,
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: volumeUp,
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uC8FC\uBB38 \uAE08\uC561"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "\uB9E4\uB3C4 \uAE08\uC561"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: "0 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, undefined), state.login_boolean === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/login`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "sell Btn2",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: sellApi,
      className: "sell Btn2",
      children: "\uB9E4\uB3C4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 9
  }, undefined);
};

const buyAndSell = () => {
  const {
    0: bsBtn,
    1: setbsBtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('buy');

  const buy = () => {
    setbsBtn('buy');
  };

  const sell = () => {
    setbsBtn('sell');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    id: "buyAndSellBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        style: bsBtn === 'buy' ? buycolor : {},
        onClick: buy,
        className: "buyBtn",
        children: "\uB9E4\uC218"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        style: bsBtn === 'sell' ? sellcolor : {},
        onClick: sell,
        className: "sellBtn",
        children: "\uB9E4\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }, undefined), bsBtn === 'buy' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Buy, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Sell, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 23
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buyAndSell);

/***/ }),

/***/ "./components/chart.jsx":
/*!******************************!*\
  !*** ./components/chart.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\chart.jsx";



const ReactApexChart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ "react-apexcharts", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ["..\\components\\chart.jsx -> " + 'react-apexcharts']
  }
});



const timestamp = () => {
  let localDate = new Date().toLocaleDateString();
  let unixStartTime = new Date(localDate).getTime();
};

const chart = () => {
  const bel = () => {
    console.log('111');
  };

  const {
    0: ddata,
    1: setddata
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let price = [];
  let times = [];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    const response = await fetch("http://localhost:3003/api/coin/graph");
    const data = await response.json();
    const ick = data.data;
    ick.forEach(v => {
      let max = Object.entries(v)[0][1]['half_max'];
      let min = Object.entries(v)[0][1]['half_min'];
      let start = Object.entries(v)[0][1]['half_start'];
      let last = Object.entries(v)[0][1]['half_last'];
      let time = Object.entries(v)[0][1]['time']; // console.log("000000000",max,min,start,last,time);
      // gyun.push(max,min,start,last, time);

      let newarr = [max, min, start, last];
      price.push({
        newarr
      });
      times.push(time);
    });
    console.log("ddddd", price);
    console.log('cccc', times); // setddata(ickgyun);
    // console.log(ddata);
    //     ick.map((v,k)=>{
    // console.log(  v.halfhour,"+++++++++++++++++++++++++++++");
    // return;
    //     })
  }, []);
  const series = [{
    name: 'candle',
    data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    }, {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    }, {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    }, {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    }, {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    }, {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    }, {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    }, {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    }, {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    }, {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    }, {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    }, {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    }, {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    }, {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    }, {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    }, {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    }, {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    }, {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    }, {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    }, {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    }, {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    }, {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    }, {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    }, {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    }, {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    }, {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    }, {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    }, {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    }, {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    }, {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    }, {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    }, {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    }, {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    }, {
      x: new Date(1538838000000),
      y: [6588.92, 6594, 6577.55, 6589.22]
    }, {
      x: new Date(1538839800000),
      y: [6589.3, 6598.89, 6589.1, 6596.08]
    }, {
      x: new Date(1538841600000),
      y: [6597.5, 6600, 6588.39, 6596.25]
    }, {
      x: new Date(1538843400000),
      y: [6598.03, 6600, 6588.73, 6595.97]
    }, {
      x: new Date(1538845200000),
      y: [6595.97, 6602.01, 6588.17, 6602]
    }, {
      x: new Date(1538847000000),
      y: [6602, 6607, 6596.51, 6599.95]
    }, {
      x: new Date(1538848800000),
      y: [6600.63, 6601.21, 6590.39, 6591.02]
    }, {
      x: new Date(1538850600000),
      y: [6591.02, 6603.08, 6591, 6591]
    }, {
      x: new Date(1538852400000),
      y: [6591, 6601.32, 6585, 6592]
    }, {
      x: new Date(1538854200000),
      y: [6593.13, 6596.01, 6590, 6593.34]
    }, {
      x: new Date(1538856000000),
      y: [6593.34, 6604.76, 6582.63, 6593.86]
    }, {
      x: new Date(1538857800000),
      y: [6593.86, 6604.28, 6586.57, 6600.01]
    }, {
      x: new Date(1538859600000),
      y: [6601.81, 6603.21, 6592.78, 6596.25]
    }, {
      x: new Date(1538861400000),
      y: [6596.25, 6604.2, 6590, 6602.99]
    }, {
      x: new Date(1538863200000),
      y: [6602.99, 6606, 6584.99, 6587.81]
    }, {
      x: new Date(1538865000000),
      y: [6587.81, 6595, 6583.27, 6591.96]
    }, {
      x: new Date(1538866800000),
      y: [6591.97, 6596.07, 6585, 6588.39]
    }, {
      x: new Date(1538868600000),
      y: [6587.6, 6598.21, 6587.6, 6594.27]
    }, {
      x: new Date(1538870400000),
      y: [6596.44, 6601, 6590, 6596.55]
    }, {
      x: new Date(1538872200000),
      y: [6598.91, 6605, 6596.61, 6600.02]
    }, {
      x: new Date(1538874000000),
      y: [6600.55, 6605, 6589.14, 6593.01]
    }, {
      x: new Date(1538875800000),
      y: [6593.15, 6605, 6592, 6603.06]
    }, {
      x: new Date(1538877600000),
      y: [6603.07, 6604.5, 6599.09, 6603.89]
    }, {
      x: new Date(1538879400000),
      y: [6604.44, 6604.44, 6600, 6603.5]
    }, {
      x: new Date(1538881200000),
      y: [6603.5, 6603.99, 6597.5, 6603.86]
    }, {
      x: new Date(1538883000000),
      y: [6603.85, 6605, 6600, 6604.07]
    }, {
      x: new Date(1538884800000),
      y: [6604.98, 6606, 6604.07, 6006]
    }]
  }];
  const options = {
    title: {
      text: 'grootcoin_Chart',
      align: 'left'
    },
    annotations: {
      xaxis: [{
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#fff',
            background: '#00E396'
          },
          orientation: 'horizontal',
          offsetY: 7,
          text: 'Annotation Test'
        }
      }]
    },
    tooltip: {
      enabled: true
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs__WEBPACK_IMPORTED_MODULE_3___default()(val).format('MMM DD HH:mm');
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    id: "chartBox",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      id: "chart",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ReactApexChart, {
        options: options,
        series: series,
        type: "candlestick",
        height: 600
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 340,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chart);

/***/ }),

/***/ "./components/contract.jsx":
/*!*********************************!*\
  !*** ./components/contract.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\contract.jsx";




const preContractcolor = {
  "borderBottom": "3px solid rgba(32, 201, 150)",
  "color": "#333"
};
const contractedcolor = {
  "borderBottom": "3px solid rgba(32, 201, 150)",
  "color": "#333"
};

const PreContract = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    id: "PreContractBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      id: "PreContractType",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "\uB9E4\uC218 \uC8FC\uBB38"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "3800 KRW"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      id: "PreContractQty",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "\uC8FC\uBB38\uC218\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "\uC8FC\uBB38\uC794\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "\uC8FC\uBB38\uC77C\uC2DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      id: "PreContractQty2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "10 GRT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "10 GRT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: "2021.10.06 11:40"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

const Contracted = () => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    const response = await fetch("http://localhost:3003/api/coin/search_deal", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        userid: "da",
        id: "1"
      })
    });
    const data = await response.json();
    setData(data.deal);
    console.log(data.deal);
  }, []);
  const contractedData = data.map((v, k) => {
    const timestamp = 1633419798;
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear().toString().slice(-4);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate() + 1)).slice(-2);
    const hour = ("0" + (date.getHours() + 1)).slice(-2);
    const minute = ("0" + (date.getMinutes() + 1)).slice(-2);
    console.log(year, month, day, hour, minute);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "ContractedBox",
      children: [v.ordertype == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "ContractedPrice contractedb",
        children: ["Buy ", v.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "ContractedPrice contracteds",
        children: ["Sell ", v.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 22
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
        id: "ContractedQty",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: "\uCCB4\uACB0 \uC218\uB7C9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: "\uCCB4\uACB0 \uC77C\uC2DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
        id: "ContractedQty2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [v.qty, " GRT"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [year, ".", month, ".", day, " ", hour, ":", minute]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, k, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: contractedData
  }, void 0, false);
};

const contract = () => {
  const {
    0: contract,
    1: setContract
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const preContract = () => {
    setContract(false);
  };

  const contracted = () => {
    setContract(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    id: "contractBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        style: contract === false ? preContractcolor : {},
        onClick: preContract,
        className: "preContract",
        children: "\uBBF8\uCCB4\uACB0 \uC8FC\uBB38"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        style: contract === true ? contractedcolor : {},
        onClick: contracted,
        className: "contracted",
        children: "\uCCB4\uACB0\uB0B4\uC5ED"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, undefined), contract === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PreContract, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Contracted, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contract);

/***/ }),

/***/ "./components/footer.jsx":
/*!*******************************!*\
  !*** ./components/footer.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\footer.jsx";


const footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "footer",
    children: "footer"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\header.jsx";






const header = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_2__.default);
  console.log(state.login_boolean == false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    id: "header",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: `/`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            className: "logo",
            src: "/grootcoin.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 37
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 34
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        id: "nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: `/`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 42
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: `/coin/coinNews`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              children: "\uCF54\uC778\uB274\uC2A4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 55
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: `/coin/assets`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              children: "\uC790\uC0B0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 53
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: `/coin/coinInfo`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              children: "\u24D8grootcoin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 55
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), state.login_boolean === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: `/login`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "login Btn",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 43
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: `/joinAgree`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "join Btn",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: `/logout`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "logout Btn",
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 40
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./components/history.jsx":
/*!********************************!*\
  !*** ./components/history.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\history.jsx";


const history = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "historyBox",
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        className: "fixedHeader",
        children: "\uCCB4\uACB0\uC2DC\uAC04"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        className: "fixedHeader",
        children: "\uAC00\uACA9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        className: "fixedHeader",
        children: "\uC218\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-1",
          children: "12:12:11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-2",
          children: "53,168,000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "col-3",
          children: "0.0307"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./components/orderBook.jsx":
/*!**********************************!*\
  !*** ./components/orderBook.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\components\\orderBook.jsx";


const orderBook = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "orderBookBox",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          className: "fixedHeader",
          children: "\uAC00\uACA9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          className: "fixedHeader",
          children: "\uC218\uB7C9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          className: "fixedHeader",
          children: "\uB204\uC801\uC218\uB7C9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-1",
            children: "53,168,000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-2",
            children: "0.003"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "order-3",
            children: "0.0307"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "\uB9E4\uB3C4 \uC794\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "1.2345"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "\uB9E4\uC218 \uC794\uB7C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "1.2345"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderBook);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./pages/main.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\pages\\index.jsx";




 // import { w3cwebsocket as W3CWebSocket } from "websocket";




const index = () => {
  const ws = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    ws.current = new WebSocket("ws://127.0.0.1:8080");

    ws.current.onopen = () => console.log();

    ws.current.onclose = () => console.log();

    return () => {
      ws.current.close();
    };
  }, []);
  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: userpw,
    1: setUserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: account,
    1: setaccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: wallet,
    1: setwallet
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginuserid,
    1: setloginuserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginuserpw,
    1: setloginuserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');
  const {
    0: loginresult,
    1: setloginresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('.');

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
  };

  const handlelogin = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_2__.user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`, options); //restful api 

    let result = await response.json();
    setloginresult(result);
  };

  const login = e => {
    setloginuserid(e.target.value);
  };

  const loginpw = e => {
    setloginuserpw(e.target.value);
  };

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./pages/main.jsx":
/*!************************!*\
  !*** ./pages/main.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/history */ "./components/history.jsx");
/* harmony import */ var _components_orderBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/orderBook */ "./components/orderBook.jsx");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chart */ "./components/chart.jsx");
/* harmony import */ var _components_buyAndSell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buyAndSell */ "./components/buyAndSell.jsx");
/* harmony import */ var _components_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contract */ "./components/contract.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\KGA_09\\Desktop\\clone\\grootcoin\\Front\\pages\\main.jsx";








const main = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    id: "mainContainer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "mainCon1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_chart__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "mainCon2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_history__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_orderBook__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_buyAndSell__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
        className: "mainCon3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_contract__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 42
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "lastCon",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./store/Allurl.jsx":
/*!**************************!*\
  !*** ./store/Allurl.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  login_boolean: 0,
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

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-apexcharts");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBY0gsQ0FmRDs7QUFpQkEsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTyxNQUFNMXNCLFFBQVEsR0FBRyxnQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBRU8sTUFBTTRzQixZQUFZLEdBQUM7QUFDdEJqckIsRUFBQUEsYUFBYSxFQUFDLENBRFE7QUFFdEJHLEVBQUFBLE1BQU0sRUFBQyxFQUZlO0FBR3RCaXBCLEVBQUFBLE1BQU0sRUFBQyxFQUhlO0FBSXRCRixFQUFBQSxRQUFRLEVBQUMsRUFKYTtBQUt0QkksRUFBQUEsT0FBTyxFQUFDLENBTGM7QUFNdEJFLEVBQUFBLE1BQU0sRUFBQyxDQU5lO0FBT3RCMEIsRUFBQUEsR0FBRyxFQUFDO0FBUGtCLENBQW5CO0FBV1AsTUFBTTVyQixLQUFLLGdCQUFHMHJCLG9EQUFhLENBQUNDLFlBQUQsQ0FBM0I7QUFFQSxpRUFBZTNyQixLQUFmOzs7Ozs7Ozs7O0FDZkEsdUhBQXFEOzs7Ozs7Ozs7OztBQ0FyRCx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9hcGkvYXBpLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvYnV5QW5kU2VsbC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL2NoYXJ0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvY29udHJhY3QuanN4Iiwid2VicGFjazovL2Zyb250Ly4vY29tcG9uZW50cy9mb290ZXIuanN4Iiwid2VicGFjazovL2Zyb250Ly4vY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovL2Zyb250Ly4vY29tcG9uZW50cy9oaXN0b3J5LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvb3JkZXJCb29rLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9BbGx1cmwuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtYXBleGNoYXJ0c1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2lnbm9yZWR8QzpcXFVzZXJzXFxLR0FfMDlcXERlc2t0b3BcXGNsb25lXFxncm9vdGNvaW5cXEZyb250XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlcl91cmx9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuXHJcbmV4cG9ydCBjb25zdCBqb2luX3N1Y2Nlc3MgPSBhc3luYyAoYm9keSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX3VybClcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2pvaW5fc3VjY2Vzc2Asb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuXHJcbmNvbnN0IGJ1eWNvbG9yID0geyBcImJhY2tncm91bmRcIjogXCJyZ2JhKDIyNSwzNSw2NylcIiwgXCJjb2xvclwiOiBcIiNmZmZcIiB9XHJcbmNvbnN0IHNlbGxjb2xvciA9IHsgXCJiYWNrZ3JvdW5kXCI6IFwicmdiYSgyMyw5OSwxODIpXCIsIFwiY29sb3JcIjogXCIjZmZmXCIgfVxyXG5cclxuXHJcbmNvbnN0IEJ1eSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtidXlQcmljZSxzZXRCdXlQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3ZvbHVtZSxzZXRWb2x1bWVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHtzdGF0ZSxkaXNwYXRjaH0gPSB1c2VDb250ZXh0KFN0b3JlKVxyXG4gICAgY29uc29sZS5sb2coc3RhdGUubG9naW5fYm9vbGVhbiA9PSBmYWxzZSlcclxuXHJcbiAgICBjb25zdCBidXlBcGkgPSAoKSA9PntcclxuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2FwaS9jb2luL2J1eV9vcmRlclwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJpZDogXCJkYVwiLFxyXG4gICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXHJcbiAgICAgICAgICAgIHF0eTogdm9sdW1lLFxyXG4gICAgICAgICAgICBvcmRlcnR5cGU6IDAsXHJcbiAgICAgICAgICAgIHJlc3Q6IHZvbHVtZSxcclxuICAgICAgICAgICAgY29pbl9pZDogMVxyXG4gICAgICAgIH0seyBcclxuICAgICAgICAgICAgaGVhZGVyczp7IFxyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PmNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7Iuk7Yyo64Ks7J2MJyxlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwcmljZVVwID0gKCkgPT57XHJcbiAgICAgICAgc2V0QnV5UHJpY2UoKHByaWNlKT0+cHJpY2UrMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmljZURvd24gPSAgKCk9PntcclxuICAgICAgICBzZXRCdXlQcmljZSgocHJpY2UpPT5wcmljZT4wID8gcHJpY2UtMSA6IDApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgdm9sdW1lVXAgPSAoKSA9PntcclxuICAgICAgICBzZXRWb2x1bWUoKHZvbHVtZSk9PnZvbHVtZSsxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZvbHVtZURvd24gPSAgKCk9PntcclxuICAgICAgICBzZXRWb2x1bWUoKHZvbHVtZSk9PnZvbHVtZT4wID8gdm9sdW1lLTEgOiAwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+67O07JygPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEtSVzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+66ek7IiYIOqwgOuKpTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MCBLUlc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlQm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+6rCA6rKpKEtSVyk8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvaW5QcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57YnV5UHJpY2V9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbHVzTWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e3ByaWNlRG93bn0+LTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtwcmljZVVwfT4rPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VCb3hcIj5cclxuICAgICAgICAgICAgICAgIDxoNj7siJjrn4koR1JUKTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29pblByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2b2x1bWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbHVzTWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e3ZvbHVtZURvd259Pi08L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17dm9sdW1lVXB9Pis8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3VsPiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7so7zrrLgg6riI7JWhPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEtSVzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+66ek7IiYIOyImOufiTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MCBHUlQ8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7IHN0YXRlLmxvZ2luX2Jvb2xlYW4gPT09IDAgPyBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbG9naW5gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1eSBCdG4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J1eUFwaX0gY2xhc3NOYW1lPVwiYnV5IEJ0bjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg66ek7IiYXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNlbGwgPSAoKSA9PntcclxuICAgIGNvbnN0IFtzZWxsUHJpY2Usc2V0U2VsbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdm9sdW1lLHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5sb2dpbl9ib29sZWFuID09IGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHNlbGxBcGkgPSAoKSA9PntcclxuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2FwaS9jb2luL2J1eV9vcmRlclwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJpZDogXCJkYVwiLFxyXG4gICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxyXG4gICAgICAgICAgICBxdHk6IHZvbHVtZSxcclxuICAgICAgICAgICAgb3JkZXJ0eXBlOiAxLFxyXG4gICAgICAgICAgICByZXN0OiB2b2x1bWUsXHJcbiAgICAgICAgICAgIGNvaW5faWQ6IDFcclxuICAgICAgICB9LHsgXHJcbiAgICAgICAgICAgIGhlYWRlcnM6eyBcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5jb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yLpO2MqOuCrOydjCcsZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwID0gKCkgPT57XHJcbiAgICAgICAgc2V0U2VsbFByaWNlKChwcmljZSk9PnByaWNlKzEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Eb3duID0gICgpPT57XHJcbiAgICAgICAgc2V0U2VsbFByaWNlKChwcmljZSk9PnByaWNlPjAgPyBwcmljZS0xIDogMClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2b2x1bWVVcCA9ICgpID0+e1xyXG4gICAgICAgIHNldFZvbHVtZSgodm9sdW1lKT0+dm9sdW1lKzEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgdm9sdW1lRG93biA9ICAoKT0+e1xyXG4gICAgICAgIHNldFZvbHVtZSgodm9sdW1lKT0+dm9sdW1lPjAgPyB2b2x1bWUtMSA6IDApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7rs7TsnKA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjAgR1JUPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7rp6Trj4Qg6rCA64qlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEdSVDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VCb3hcIj5cclxuICAgICAgICAgICAgICAgIDxoNj7qsIDqsqkoS1JXKTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29pblByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPntzZWxsUHJpY2V9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbHVzTWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e29uRG93bn0+LTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtvblVwfT4rPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VCb3hcIj5cclxuICAgICAgICAgICAgICAgIDxoNj7siJjrn4koR1JUKTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29pblByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2b2x1bWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbHVzTWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e3ZvbHVtZURvd259Pi08L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17dm9sdW1lVXB9Pis8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3VsPiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7so7zrrLgg6riI7JWhPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4wIEtSVzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+66ek64+EIOq4iOyVoTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MCBLUlc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7IHN0YXRlLmxvZ2luX2Jvb2xlYW4gPT09IDAgPyBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbG9naW5gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlbGwgQnRuMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWxsQXBpfSBjbGFzc05hbWU9XCJzZWxsIEJ0bjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg66ek64+EXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYnV5QW5kU2VsbCA9ICgpPT57XHJcbiAgICBjb25zdCBbYnNCdG4sIHNldGJzQnRuXSA9IHVzZVN0YXRlKCdidXknKVxyXG5cclxuICAgIGNvbnN0IGJ1eSA9ICgpID0+e1xyXG4gICAgICAgIHNldGJzQnRuKCdidXknKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGwgPSAoKSA9PntcclxuICAgICAgICBzZXRic0J0bignc2VsbCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJidXlBbmRTZWxsQm94XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsoYnNCdG4gPT09ICdidXknKT8gYnV5Y29sb3IgOiB7fX0gb25DbGljaz17YnV5fSBjbGFzc05hbWU9XCJidXlCdG5cIj7rp6TsiJg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhic0J0biA9PT0gJ3NlbGwnKT8gc2VsbGNvbG9yIDoge319IG9uQ2xpY2s9e3NlbGx9IGNsYXNzTmFtZT1cInNlbGxCdG5cIj7rp6Trj4Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJzQnRuID09PSAnYnV5J1xyXG4gICAgICAgICAgICAgICAgICAgID8gPEJ1eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPFNlbGwgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXlBbmRTZWxsIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUmVhY3RBcGV4Q2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbmNvbnN0IHRpbWVzdGFtcCA9ICgpID0+IHtcclxuICBsZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKVxyXG4gIGxldCB1bml4U3RhcnRUaW1lID0gbmV3IERhdGUobG9jYWxEYXRlKS5nZXRUaW1lKClcclxufVxyXG5cclxuXHJcbmNvbnN0IGNoYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJlbCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCcxMTEnKTtcclxuICB9XHJcbiAgY29uc3QgW2RkYXRhLCBzZXRkZGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBsZXQgcHJpY2UgPSBbXTtcclxuICBsZXQgdGltZXMgID0gW107XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDMvYXBpL2NvaW4vZ3JhcGhcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zdCBpY2sgPSBkYXRhLmRhdGFcclxuXHJcbiAgICBpY2suZm9yRWFjaCh2ID0+IHtcclxuICAgICAgbGV0IG1heD0gT2JqZWN0LmVudHJpZXModilbMF1bMV1bJ2hhbGZfbWF4J107XHJcbiAgICAgIGxldCBtaW4gPSBPYmplY3QuZW50cmllcyh2KVswXVsxXVsnaGFsZl9taW4nXVxyXG4gICAgICBsZXQgc3RhcnQgPSBPYmplY3QuZW50cmllcyh2KVswXVsxXVsnaGFsZl9zdGFydCddXHJcbiAgICAgIGxldCBsYXN0ID0gT2JqZWN0LmVudHJpZXModilbMF1bMV1bJ2hhbGZfbGFzdCddXHJcbiAgICAgIGxldCB0aW1lID0gT2JqZWN0LmVudHJpZXModilbMF1bMV1bJ3RpbWUnXVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCIwMDAwMDAwMDBcIixtYXgsbWluLHN0YXJ0LGxhc3QsdGltZSk7XHJcbiAgICAgIC8vIGd5dW4ucHVzaChtYXgsbWluLHN0YXJ0LGxhc3QsIHRpbWUpO1xyXG4gICAgICBsZXQgbmV3YXJyID0gW21heCxtaW4sc3RhcnQsbGFzdF1cclxuXHJcbiAgICAgIHByaWNlLnB1c2goe25ld2Fycn0pXHJcbiAgICAgIHRpbWVzLnB1c2godGltZSlcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhcImRkZGRkXCIscHJpY2UpO1xyXG4gICAgY29uc29sZS5sb2coJ2NjY2MnLHRpbWVzKTtcclxuICAgIC8vIHNldGRkYXRhKGlja2d5dW4pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGRhdGEpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gICAgIGljay5tYXAoKHYsayk9PntcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyggIHYuaGFsZmhvdXIsXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1wiKTtcclxuICAgIC8vIHJldHVybjtcclxuICAgIC8vICAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2VyaWVzID0gW3tcclxuICAgIG5hbWU6ICdjYW5kbGUnLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODc3ODYwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MjkuODEsIDY2NTAuNSwgNjYyMy4wNCwgNjYzMy4zM11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg3ODA0MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjMyLjAxLCA2NjQzLjU5LCA2NjIwLCA2NjMwLjExXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODc4MjIwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MzAuNzEsIDY2NDguOTUsIDY2MjMuMzQsIDY2MzUuNjVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4Nzg0MDAwMDAwKSxcclxuICAgICAgICB5OiBbNjYzNS42NSwgNjY1MSwgNjYyOS42NywgNjYzOC4yNF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg3ODU4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjM4LjI0LCA2NjQwLCA2NjIwLCA2NjI0LjQ3XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODc4NzYwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MjQuNTMsIDY2MzYuMDMsIDY2MjEuNjgsIDY2MjQuMzFdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4Nzg5NDAwMDAwKSxcclxuICAgICAgICB5OiBbNjYyNC42MSwgNjYzMi4yLCA2NjE3LCA2NjI2LjAyXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODc5MTIwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MjcsIDY2MjcuNjIsIDY1ODQuMjIsIDY2MDMuMDJdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4NzkzMDAwMDAwKSxcclxuICAgICAgICB5OiBbNjYwNSwgNjYwOC4wMywgNjU5OC45NSwgNjYwNC4wMV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg3OTQ4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjA0LjUsIDY2MTQuNCwgNjYwMi4yNiwgNjYwOC4wMl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg3OTY2MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjA4LjAyLCA2NjEwLjY4LCA2NjAxLjk5LCA2NjA4LjkxXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODc5ODQwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDguOTEsIDY2MTguOTksIDY2MDguMDEsIDY2MTJdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODAwMjAwMDAwKSxcclxuICAgICAgICB5OiBbNjYxMiwgNjYxNS4xMywgNjYwNS4wOSwgNjYxMl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MDIwMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjEyLCA2NjI0LjEyLCA2NjA4LjQzLCA2NjIyLjk1XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgwMzgwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MjMuOTEsIDY2MjMuOTEsIDY2MTUsIDY2MTUuNjddXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODA1NjAwMDAwKSxcclxuICAgICAgICB5OiBbNjYxOC42OSwgNjYxOC43NCwgNjYxMCwgNjYxMC40XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgwNzQwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MTEsIDY2MjIuNzgsIDY2MTAuNCwgNjYxNC45XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgwOTIwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MTQuOSwgNjYyNi4yLCA2NjEzLjMzLCA2NjIzLjQ1XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgxMTAwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MjMuNDgsIDY2MjcsIDY2MTguMzgsIDY2MjAuMzVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODEyODAwMDAwKSxcclxuICAgICAgICB5OiBbNjYxOS40MywgNjYyMC4zNSwgNjYxMC4wNSwgNjYxNS41M11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MTQ2MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjE1LjUzLCA2NjE3LjkzLCA2NjEwLCA2NjE1LjE5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgxNjQwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MTUuMTksIDY2MjEuNiwgNjYwOC4yLCA2NjIwXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgxODIwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MTkuNTQsIDY2MjUuMTcsIDY2MTQuMTUsIDY2MjBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODIwMDAwMDAwKSxcclxuICAgICAgICB5OiBbNjYyMC4zMywgNjYzNC4xNSwgNjYxNy4yNCwgNjYyNC42MV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MjE4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjI1Ljk1LCA2NjI2LCA2NjExLjY2LCA2NjE3LjU4XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgyMzYwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MTksIDY2MjUuOTcsIDY1OTUuMjcsIDY1OTguODZdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODI1NDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5OC44NiwgNjU5OC44OCwgNjU3MCwgNjU4Ny4xNl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MjcyMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTg4Ljg2LCA2NjAwLCA2NTgwLCA2NTkzLjRdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODI5MDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5My45OSwgNjU5OC44OSwgNjU4NSwgNjU4Ny44MV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MzA4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTg3LjgxLCA2NTkyLjczLCA2NTY3LjE0LCA2NTc4XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgzMjYwMDAwMCksXHJcbiAgICAgICAgeTogWzY1NzguMzUsIDY1ODEuNzIsIDY1NjcuMzksIDY1NzldXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODM0NDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU3OS4zOCwgNjU4MC45MiwgNjU2Ni43NywgNjU3NS45Nl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4MzYyMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTc1Ljk2LCA2NTg5LCA2NTcxLjc3LCA2NTg4LjkyXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODgzODAwMDAwMCksXHJcbiAgICAgICAgeTogWzY1ODguOTIsIDY1OTQsIDY1NzcuNTUsIDY1ODkuMjJdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODM5ODAwMDAwKSxcclxuICAgICAgICB5OiBbNjU4OS4zLCA2NTk4Ljg5LCA2NTg5LjEsIDY1OTYuMDhdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODQxNjAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5Ny41LCA2NjAwLCA2NTg4LjM5LCA2NTk2LjI1XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg0MzQwMDAwMCksXHJcbiAgICAgICAgeTogWzY1OTguMDMsIDY2MDAsIDY1ODguNzMsIDY1OTUuOTddXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODQ1MjAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5NS45NywgNjYwMi4wMSwgNjU4OC4xNywgNjYwMl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4NDcwMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjAyLCA2NjA3LCA2NTk2LjUxLCA2NTk5Ljk1XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg0ODgwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDAuNjMsIDY2MDEuMjEsIDY1OTAuMzksIDY1OTEuMDJdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODUwNjAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5MS4wMiwgNjYwMy4wOCwgNjU5MSwgNjU5MV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4NTI0MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTkxLCA2NjAxLjMyLCA2NTg1LCA2NTkyXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg1NDIwMDAwMCksXHJcbiAgICAgICAgeTogWzY1OTMuMTMsIDY1OTYuMDEsIDY1OTAsIDY1OTMuMzRdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODU2MDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5My4zNCwgNjYwNC43NiwgNjU4Mi42MywgNjU5My44Nl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4NTc4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTkzLjg2LCA2NjA0LjI4LCA2NTg2LjU3LCA2NjAwLjAxXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg1OTYwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDEuODEsIDY2MDMuMjEsIDY1OTIuNzgsIDY1OTYuMjVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODYxNDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5Ni4yNSwgNjYwNC4yLCA2NTkwLCA2NjAyLjk5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg2MzIwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDIuOTksIDY2MDYsIDY1ODQuOTksIDY1ODcuODFdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODY1MDAwMDAwKSxcclxuICAgICAgICB5OiBbNjU4Ny44MSwgNjU5NSwgNjU4My4yNywgNjU5MS45Nl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4NjY4MDAwMDApLFxyXG4gICAgICAgIHk6IFs2NTkxLjk3LCA2NTk2LjA3LCA2NTg1LCA2NTg4LjM5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg2ODYwMDAwMCksXHJcbiAgICAgICAgeTogWzY1ODcuNiwgNjU5OC4yMSwgNjU4Ny42LCA2NTk0LjI3XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg3MDQwMDAwMCksXHJcbiAgICAgICAgeTogWzY1OTYuNDQsIDY2MDEsIDY1OTAsIDY1OTYuNTVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODcyMjAwMDAwKSxcclxuICAgICAgICB5OiBbNjU5OC45MSwgNjYwNSwgNjU5Ni42MSwgNjYwMC4wMl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4NzQwMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjAwLjU1LCA2NjA1LCA2NTg5LjE0LCA2NTkzLjAxXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg3NTgwMDAwMCksXHJcbiAgICAgICAgeTogWzY1OTMuMTUsIDY2MDUsIDY1OTIsIDY2MDMuMDZdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBuZXcgRGF0ZSgxNTM4ODc3NjAwMDAwKSxcclxuICAgICAgICB5OiBbNjYwMy4wNywgNjYwNC41LCA2NTk5LjA5LCA2NjAzLjg5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg3OTQwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDQuNDQsIDY2MDQuNDQsIDY2MDAsIDY2MDMuNV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4ODEyMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjAzLjUsIDY2MDMuOTksIDY1OTcuNSwgNjYwMy44Nl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IG5ldyBEYXRlKDE1Mzg4ODMwMDAwMDApLFxyXG4gICAgICAgIHk6IFs2NjAzLjg1LCA2NjA1LCA2NjAwLCA2NjA0LjA3XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogbmV3IERhdGUoMTUzODg4NDgwMDAwMCksXHJcbiAgICAgICAgeTogWzY2MDQuOTgsIDY2MDYsIDY2MDQuMDcsIDYwMDZdXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfV1cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdGV4dDogJ2dyb290Y29pbl9DaGFydCcsXHJcbiAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgIH0sXHJcbiAgICBhbm5vdGF0aW9uczoge1xyXG4gICAgICB4YXhpczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6ICdPY3QgMDYgMTQ6MDAnLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBFMzk2JyxcclxuICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwRTM5NicsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDBFMzk2J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA3LFxyXG4gICAgICAgICAgICB0ZXh0OiAnQW5ub3RhdGlvbiBUZXN0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICBsYWJlbHM6IHtcclxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgIHJldHVybiBkYXlqcyh2YWwpLmZvcm1hdCgnTU1NIEREIEhIOm1tJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB5YXhpczoge1xyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY2hhcnRCb3hcIj5cclxuICAgICAgPGRpdiBpZD1cImNoYXJ0XCI+XHJcbiAgICAgICAgPFJlYWN0QXBleENoYXJ0XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgc2VyaWVzPXtzZXJpZXN9XHJcbiAgICAgICAgICB0eXBlPVwiY2FuZGxlc3RpY2tcIlxyXG4gICAgICAgICAgaGVpZ2h0PXs2MDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJ0IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgcHJlQ29udHJhY3Rjb2xvciA9IHsgXCJib3JkZXJCb3R0b21cIjogXCIzcHggc29saWQgcmdiYSgzMiwgMjAxLCAxNTApXCIsIFwiY29sb3JcIjogXCIjMzMzXCIgfVxyXG5jb25zdCBjb250cmFjdGVkY29sb3IgPSB7IFwiYm9yZGVyQm90dG9tXCI6IFwiM3B4IHNvbGlkIHJnYmEoMzIsIDIwMSwgMTUwKVwiLCBcImNvbG9yXCI6IFwiIzMzM1wiIH1cclxuXHJcbmNvbnN0IFByZUNvbnRyYWN0ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIlByZUNvbnRyYWN0Qm94XCI+XHJcbiAgICAgICAgICAgIDx1bCBpZD1cIlByZUNvbnRyYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPuunpOyImCDso7zrrLg8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjM4MDAgS1JXPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGlkPVwiUHJlQ29udHJhY3RRdHlcIj5cclxuICAgICAgICAgICAgICAgIDxsaT7so7zrrLjsiJjrn4k8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPuyjvOusuOyelOufiTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+7KO866y47J287IucPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGlkPVwiUHJlQ29udHJhY3RRdHkyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+MTAgR1JUPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4xMCBHUlQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjIwMjEuMTAuMDYgMTE6NDA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDb250cmFjdGVkID0gKCkgPT57XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDMvYXBpL2NvaW4vc2VhcmNoX2RlYWxcIix7IFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LCBcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB1c2VyaWQ6IFwiZGFcIixcclxuICAgICAgICAgICAgaWQ6XCIxXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHNldERhdGEoZGF0YS5kZWFsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRlYWwpXHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdGVkRGF0YSA9IGRhdGEubWFwKCh2LGspPT57XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gMTYzMzQxOTc5OFxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAqMTAwMClcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTQpXHJcbiAgICAgICAgY29uc3QgbW9udGggPSAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsxICkpLnNsaWNlKC0yKVxyXG4gICAgICAgIGNvbnN0IGRheSA9IChcIjBcIiArIChkYXRlLmdldERhdGUoKSArMSApKS5zbGljZSgtMilcclxuICAgICAgICBjb25zdCBob3VyID0gKFwiMFwiICsgKGRhdGUuZ2V0SG91cnMoKSArMSApKS5zbGljZSgtMilcclxuICAgICAgICBjb25zdCBtaW51dGUgPSAoXCIwXCIgKyAoZGF0ZS5nZXRNaW51dGVzKCkgKzEgKSkuc2xpY2UoLTIpXHJcbiAgICAgICAgY29uc29sZS5sb2coeWVhcixtb250aCxkYXksaG91cixtaW51dGUpXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiQ29udHJhY3RlZEJveFwiIGtleT17a30+XHJcbiAgICAgICAgICAgICAgICB7di5vcmRlcnR5cGUgPT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udHJhY3RlZFByaWNlIGNvbnRyYWN0ZWRiXCI+QnV5IHt2LnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cIkNvbnRyYWN0ZWRQcmljZSBjb250cmFjdGVkc1wiPlNlbGwge3YucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIkNvbnRyYWN0ZWRRdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+7LK06rKwIOyImOufiTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPuyytOqysCDsnbzsi5w8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIkNvbnRyYWN0ZWRRdHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LnF0eX0gR1JUPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3llYXJ9Lnttb250aH0ue2RheX0ge2hvdXJ9OnttaW51dGV9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKX0pXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250cmFjdGVkRGF0YX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udHJhY3QgPSAoKSA9PntcclxuICAgIGNvbnN0IFtjb250cmFjdCxzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBwcmVDb250cmFjdCA9ICgpID0+e1xyXG4gICAgICAgIHNldENvbnRyYWN0KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYWN0ZWQgPSAoKSA9PntcclxuICAgICAgICBzZXRDb250cmFjdCh0cnVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250cmFjdEJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KGNvbnRyYWN0ID09PSBmYWxzZSApPyBwcmVDb250cmFjdGNvbG9yIDoge319IG9uQ2xpY2s9e3ByZUNvbnRyYWN0fSBjbGFzc05hbWU9XCJwcmVDb250cmFjdFwiPuuvuOyytOqysCDso7zrrLg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyhjb250cmFjdCA9PT0gdHJ1ZSApPyBjb250cmFjdGVkY29sb3IgOiB7fX0gb25DbGljaz17Y29udHJhY3RlZH0gY2xhc3NOYW1lPVwiY29udHJhY3RlZFwiPuyytOqysOuCtOyXrTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3QgPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8UHJlQ29udHJhY3QgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxDb250cmFjdGVkIC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0IiwiY29uc3QgZm9vdGVyID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICBmb290ZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuXHJcbmNvbnN0IGhlYWRlciA9ICgpPT57XHJcblxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5sb2dpbl9ib29sZWFuID09IGZhbHNlKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9PjxhPjxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9ncm9vdGNvaW4ucG5nXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2AvYH0+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17YC9jb2luL2NvaW5OZXdzYH0+PGE+7L2U7J2464m07IqkPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtgL2NvaW4vYXNzZXRzYH0+PGE+7J6Q7IKwPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtgL2NvaW4vY29pbkluZm9gfT48YT7ik5hncm9vdGNvaW48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyBzdGF0ZS5sb2dpbl9ib29sZWFuID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbG9naW5gfT48YSBjbGFzc05hbWU9XCJsb2dpbiBCdG5cIj7roZzqt7jsnbg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avam9pbkFncmVlYH0+PGEgY2xhc3NOYW1lPVwiam9pbiBCdG5cIj7tmozsm5DqsIDsnoU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2xvZ291dGB9PjxhIGNsYXNzTmFtZT1cImxvZ291dCBCdG5cIj7roZzqt7jslYTsm4M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyIiwiY29uc3QgaGlzdG9yeSA9ICgpPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5Qm94XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmaXhlZEhlYWRlclwiPuyytOqysOyLnOqwhDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZml4ZWRIZWFkZXJcIj7qsIDqsqk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZpeGVkSGVhZGVyXCI+7IiY65+JPC90aD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0xXCI+MTI6MTI6MTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMlwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtMVwiPjEyOjEyOjExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTJcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLTFcIj4xMjoxMjoxMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0yXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhpc3RvcnkiLCJjb25zdCBvcmRlckJvb2sgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwib3JkZXJCb29rQm94XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZml4ZWRIZWFkZXJcIj7qsIDqsqk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmaXhlZEhlYWRlclwiPuyImOufiTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZpeGVkSGVhZGVyXCI+64iE7KCB7IiY65+JPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0xXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTJcIj4wLjAwMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0xXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTJcIj4wLjAwMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0xXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTJcIj4wLjAwMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0xXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTJcIj4wLjAwMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0xXCI+NTMsMTY4LDAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTJcIj4wLjAwMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTNcIj4wLjAzMDc8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLTFcIj41MywxNjgsMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMlwiPjAuMDAzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItM1wiPjAuMDMwNzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPiAgICBcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItMVwiPjUzLDE2OCwwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0yXCI+MC4wMDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci0zXCI+MC4wMzA3PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT7rp6Trj4Qg7J6U65+JPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4xLjIzNDU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+66ek7IiYIOyelOufiTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MS4yMzQ1PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJCb29rIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xyXG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XHJcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHByZWZldGNoZWQgPSB7XHJcbn07XHJcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XHJcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XHJcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXHJcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXHJcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcclxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxyXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcclxuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXHJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XHJcbn1cclxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcclxuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcclxuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcclxuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xyXG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XHJcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcclxuICAgICAgICBzaGFsbG93LFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBzY3JvbGxcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xyXG4gICAgICAgICAgICBocmVmOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcclxuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcclxuICAgICAgICAgICAgYXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXHJcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xyXG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xyXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XHJcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xyXG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxyXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHByb3BzLmhyZWYsXHJcbiAgICAgICAgcHJvcHMuYXNcclxuICAgIF0pO1xyXG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xyXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXHJcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcclxuICAgIGxldCBjaGlsZDtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xyXG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xyXG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xyXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XHJcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGNoaWxkUmVmLFxyXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxyXG4gICAgXSk7XHJcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xyXG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcclxuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgYXMsXHJcbiAgICAgICAgaHJlZixcclxuICAgICAgICBpc1Zpc2libGUsXHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIHAsXHJcbiAgICAgICAgcm91dGVyXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XHJcbiAgICAgICAgcmVmOiBzZXRSZWYsXHJcbiAgICAgICAgb25DbGljazogKGUpPT57XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XHJcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xyXG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xyXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXHJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xyXG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcclxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XHJcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XHJcbn1cclxudmFyIF9kZWZhdWx0ID0gTGluaztcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XHJcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xyXG59XHJcbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XHJcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XHJcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcclxuICAgIH1cclxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xyXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XHJcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2Ioe1xyXG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIDEpO1xyXG59O1xyXG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xyXG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcclxufTtcclxuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcclxuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XHJcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XHJcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcclxudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcclxudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcclxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XHJcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xyXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cclxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xyXG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcclxuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcclxuICAgIH1cclxuICAgIGxldCByZXNvbHZlcjtcclxuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICB9KTtcclxuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcclxuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcclxuICAgICAgICBmdXR1cmU6IHByb21cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXHJcbiAgICApIDogcHJvbTtcclxufVxyXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxyXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XHJcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XHJcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxyXG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xyXG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcclxuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcclxuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcclxuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XHJcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcclxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XHJcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcclxuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XHJcbn1cclxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxyXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cclxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXHJcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXHJcbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcclxuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxyXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxyXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cclxubGV0IGRldkJ1aWxkUHJvbWlzZTtcclxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cclxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgcC50aGVuKChyKT0+e1xyXG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XHJcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc29sdmUocik7XHJcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXHJcbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIG1zKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XHJcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxyXG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xyXG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XHJcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xyXG4gICAgICAgICAgICBzY3JpcHRzOiBbXHJcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XHJcbiAgICAgICAgICAgIGNzczogW11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XHJcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcclxuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xyXG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcclxuICAgICAgICBpZiAocHJvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xyXG4gICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcclxuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcclxuICAgICAgICBpZiAocHJvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXHJcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICwgKGVycik9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XHJcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcclxuICAgICAgICAgICAgbGV0IGNuO1xyXG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXHJcbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcclxuICAgICAgICAgICAgICAgICkgOiBbXSlcclxuICAgICAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xyXG4gICAgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xyXG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcclxuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xyXG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcclxudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XHJcbiAgICByb3V0ZXI6IG51bGwsXHJcbiAgICByZWFkeUNhbGxiYWNrczogW10sXHJcbiAgICByZWFkeSAoY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcclxuICAgICdwYXRobmFtZScsXHJcbiAgICAncm91dGUnLFxyXG4gICAgJ3F1ZXJ5JyxcclxuICAgICdhc1BhdGgnLFxyXG4gICAgJ2NvbXBvbmVudHMnLFxyXG4gICAgJ2lzRmFsbGJhY2snLFxyXG4gICAgJ2Jhc2VQYXRoJyxcclxuICAgICdsb2NhbGUnLFxyXG4gICAgJ2xvY2FsZXMnLFxyXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxyXG4gICAgJ2lzUmVhZHknLFxyXG4gICAgJ2lzUHJldmlldycsXHJcbiAgICAnaXNMb2NhbGVEb21haW4nLFxyXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcclxuXTtcclxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xyXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxyXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxyXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxyXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxyXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXHJcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXHJcbl07XHJcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXHJcbiAgICAncHVzaCcsXHJcbiAgICAncmVwbGFjZScsXHJcbiAgICAncmVsb2FkJyxcclxuICAgICdiYWNrJyxcclxuICAgICdwcmVmZXRjaCcsXHJcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcclxuXTtcclxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcclxuICAgIH1cclxufSk7XHJcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxyXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXHJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcclxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xyXG4gICAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XHJcbiAgICB9O1xyXG59KTtcclxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XHJcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XHJcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xyXG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcclxufVxyXG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XHJcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXHJcbiAgICApO1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XHJcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcclxufVxyXG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XHJcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcclxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xyXG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcclxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XHJcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcclxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xyXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xyXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcclxuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xyXG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcclxuICAgICAgICAgICAgLCB7XHJcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBpc0Rpc2FibGVkLFxyXG4gICAgICAgIHJvb3RNYXJnaW4sXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXSk7XHJcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHNldFJlZixcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICBdO1xyXG59XHJcbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XHJcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xyXG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XHJcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcclxuICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBvcHRpb25zKTtcclxuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG9ic2VydmVyLFxyXG4gICAgICAgIGVsZW1lbnRzXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XHJcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxyXG4gICAgICAgIH0sIHByb3BzKSkpO1xyXG4gICAgfVxyXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xyXG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcclxuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcclxuICAgIH1cclxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xyXG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xyXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xyXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xyXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXHJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xyXG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XHJcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcclxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIDtcclxufVxyXG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XHJcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xyXG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcclxuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxyXG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xyXG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxyXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcclxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxyXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxyXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcclxuICAgICAgICA7XHJcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xyXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcclxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxyXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xyXG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcclxuICAgICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xyXG4gICAgICAgIC8vIEVycm9yIGlmIHJlYWN0IHJvb3QgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xyXG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xyXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xyXG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxyXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcclxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcclxuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XHJcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xyXG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XHJcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcclxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xyXG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xyXG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xyXG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XHJcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcclxudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XHJcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcclxudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XHJcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcclxudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xyXG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XHJcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcclxudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xyXG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XHJcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xyXG59XHJcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcclxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcclxuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XHJcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcclxuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xyXG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xyXG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XHJcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcclxuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcclxuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXHJcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XHJcbn1cclxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcclxuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcclxuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcclxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xyXG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XHJcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xyXG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XHJcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcclxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcclxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cclxuICAgIHF1ZXJ5O1xyXG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xyXG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcclxuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XHJcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXHJcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxyXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XHJcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxyXG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XHJcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxyXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXHJcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXHJcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcclxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XHJcbiAgICB9KSkge1xyXG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcclxuICAgICAgICA7XHJcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxyXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xyXG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcclxuICAgIGxldCBiYXNlO1xyXG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xyXG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxyXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXHJcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XHJcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xyXG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcclxuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xyXG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXHJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcclxuICAgICAgICAgICAgdXJsQXNTdHJpbmdcclxuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXHJcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcclxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xyXG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXHJcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXHJcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcclxuICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xyXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xyXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcclxuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XHJcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xyXG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXHJcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxyXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcclxuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xyXG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcclxuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxyXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xyXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XHJcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcclxuICAgIH1cclxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcclxuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXHJcbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcclxuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcclxufVxyXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKG4pIHtcclxuICAgIH1cclxufSgpO1xyXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xyXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cclxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcclxuICAgICAgICAvLyA+IG9wdGlvbi5cclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxyXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcclxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xyXG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXHJcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcclxuICAgICAgICAvLyBsb29wLlxyXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcclxuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfSk7XHJcbn1cclxuY2xhc3MgUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcclxuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxyXG4gICAgICAgIHRoaXMuc2RjID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcclxuICAgICAgICB0aGlzLnNkciA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXHJcbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcclxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxyXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcclxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxyXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxyXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxyXG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXHJcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxyXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcclxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcclxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XHJcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XHJcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcclxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxyXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XHJcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcclxuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcclxuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxyXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xyXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XHJcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxyXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxyXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xyXG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxyXG4gICAqLyBiYWNrKCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcclxuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxyXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXHJcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cclxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xyXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXHJcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcclxuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XHJcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XHJcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XHJcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cclxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XHJcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xyXG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcclxuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcclxuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcclxuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XHJcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxyXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcclxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XHJcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XHJcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xyXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxyXG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXHJcbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xyXG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcclxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXHJcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xyXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxyXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcclxuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXHJcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxyXG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XHJcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xyXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcclxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxyXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XHJcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcclxuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cclxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XHJcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSA6IG51bGw7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcclxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXHJcbiAgICAgICAgICAgICcnLCBhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XHJcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcclxuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcclxuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXHJcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cclxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cclxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcclxuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xyXG4gICAgICAgICAgICBsZXQgcHJvcHM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgZXJyLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XHJcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xyXG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XHJcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcclxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcclxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcclxuICAgICAgICB0aGlzLl9icHMgPSBjYjtcclxuICAgIH1cclxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XHJcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xyXG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcclxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXHJcbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxyXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXHJcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cclxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvSGFzaChhcykge1xyXG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxyXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcclxuICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XHJcbiAgICAgICAgaWYgKG5hbWVFbCkge1xyXG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXHJcbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcclxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxyXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxyXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XHJcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcclxuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xyXG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xyXG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XHJcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xyXG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xyXG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2dldERhdGEoZm4pIHtcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xyXG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xyXG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XHJcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcclxuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XHJcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XHJcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xyXG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcclxuICAgICAgICAgICAgQXBwVHJlZSxcclxuICAgICAgICAgICAgQ29tcG9uZW50LFxyXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYygpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxufVxyXG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3N9IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG4vLyBpbXBvcnQgeyB3M2N3ZWJzb2NrZXQgYXMgVzNDV2ViU29ja2V0IH0gZnJvbSBcIndlYnNvY2tldFwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuICAgXHJcbiAgICBjb25zdCB3cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjE6ODA4MFwiKTtcclxuICAgICAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgd3MuY3VycmVudC5vbmNsb3NlID0gKCkgPT4gY29uc29sZS5sb2coKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJwdywgc2V0VXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFthY2NvdW50LCBzZXRhY2NvdW50XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt3YWxsZXQsIHNldHdhbGxldF0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW51c2VycHcsIHNldGxvZ2ludXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnJlc3VsdCwgc2V0bG9naW5yZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9naW5wdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VycHcoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJwdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlYWNjb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YWNjb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZXdhbGxldCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0d2FsbGV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9oaXN0b3J5J1xyXG5pbXBvcnQgT3JkZXJCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJCb29rJ1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydCdcclxuaW1wb3J0IEJ1eUFuZFNlbGwgZnJvbSAnLi4vY29tcG9uZW50cy9idXlBbmRTZWxsJyBcclxuaW1wb3J0IENvbnRyYWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udHJhY3QnIFxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJyBcclxuXHJcbmNvbnN0IG1haW4gPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNvbjFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGFydCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW5Db24yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PEhpc3RvcnkgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxPcmRlckJvb2sgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxCdXlBbmRTZWxsIC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluQ29uM1wiPjxDb250cmFjdCAvPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdENvblwiPjxGb290ZXIgLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbiIsImV4cG9ydCBjb25zdCB1c2VyX3VybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDMvYXBpL3VzZXInIiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbG9naW5fYm9vbGVhbjowLFxyXG4gICAgdXNlcmlkOicnLFxyXG4gICAgdXNlcnB3OicnLFxyXG4gICAgdXNlcm5hbWU6JycsXHJcbiAgICBhY2NvdW50OjAsXHJcbiAgICB3YWxsZXQ6MCxcclxuICAgIG1zZzonJyxcclxufTtcclxuXHJcblxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidXNlcl91cmwiLCJqb2luX3N1Y2Nlc3MiLCJib2R5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJTdG9yZSIsImJ1eWNvbG9yIiwic2VsbGNvbG9yIiwiQnV5IiwiYnV5UHJpY2UiLCJzZXRCdXlQcmljZSIsInZvbHVtZSIsInNldFZvbHVtZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2dpbl9ib29sZWFuIiwiYnV5QXBpIiwicG9zdCIsInVzZXJpZCIsInByaWNlIiwicXR5Iiwib3JkZXJ0eXBlIiwicmVzdCIsImNvaW5faWQiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsInByaWNlVXAiLCJwcmljZURvd24iLCJ2b2x1bWVVcCIsInZvbHVtZURvd24iLCJTZWxsIiwic2VsbFByaWNlIiwic2V0U2VsbFByaWNlIiwic2VsbEFwaSIsIm9uVXAiLCJvbkRvd24iLCJidXlBbmRTZWxsIiwiYnNCdG4iLCJzZXRic0J0biIsImJ1eSIsInNlbGwiLCJkeW5hbWljIiwiUmVhY3RBcGV4Q2hhcnQiLCJzc3IiLCJkYXlqcyIsInRpbWVzdGFtcCIsImxvY2FsRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bml4U3RhcnRUaW1lIiwiZ2V0VGltZSIsImNoYXJ0IiwiYmVsIiwiZGRhdGEiLCJzZXRkZGF0YSIsInRpbWVzIiwiZGF0YSIsImpzb24iLCJpY2siLCJmb3JFYWNoIiwidiIsIm1heCIsIk9iamVjdCIsImVudHJpZXMiLCJtaW4iLCJzdGFydCIsImxhc3QiLCJ0aW1lIiwibmV3YXJyIiwicHVzaCIsInNlcmllcyIsIm5hbWUiLCJ4IiwieSIsInRpdGxlIiwidGV4dCIsImFsaWduIiwiYW5ub3RhdGlvbnMiLCJ4YXhpcyIsImJvcmRlckNvbG9yIiwibGFiZWwiLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwib3JpZW50YXRpb24iLCJvZmZzZXRZIiwidG9vbHRpcCIsImVuYWJsZWQiLCJ0eXBlIiwibGFiZWxzIiwiZm9ybWF0dGVyIiwidmFsIiwiZm9ybWF0IiwieWF4aXMiLCJwcmVDb250cmFjdGNvbG9yIiwiY29udHJhY3RlZGNvbG9yIiwiUHJlQ29udHJhY3QiLCJDb250cmFjdGVkIiwic2V0RGF0YSIsImlkIiwiZGVhbCIsImNvbnRyYWN0ZWREYXRhIiwibWFwIiwiayIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInByZUNvbnRyYWN0IiwiY29udHJhY3RlZCIsImZvb3RlciIsIlJlYWN0IiwiaGVhZGVyIiwiaGlzdG9yeSIsIm9yZGVyQm9vayIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJpc0xvY2FsVVJMIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0Iiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vU1NSIiwiX2xvYWRhYmxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwibG9hZGFibGVGbiIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsImxvYWRhYmxlR2VuZXJhdGVkIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiTWFpbiIsIkhlYWRlciIsImluZGV4Iiwid3MiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJvbmNsb3NlIiwiY2xvc2UiLCJzZXRVc2VyaWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcnB3Iiwic2V0VXNlcnB3IiwiYWNjb3VudCIsInNldGFjY291bnQiLCJ3YWxsZXQiLCJzZXR3YWxsZXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVsb2dpbiIsImxvZ2luIiwibG9naW5wdyIsImNoYW5nZVVzZXJpZCIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCIsIkhpc3RvcnkiLCJPcmRlckJvb2siLCJDaGFydCIsIkJ1eUFuZFNlbGwiLCJDb250cmFjdCIsIkZvb3RlciIsIm1haW4iLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==