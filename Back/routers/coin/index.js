   
const express = require('express');
const router = express.Router();
const controller = require('./coin.controller');
const controller2= require('./coin.controller2')

router.post('/buy_order',controller.buy_order);
router.post('/sell_order',controller.sell_order);
router.get('/start_price',controller.start_price);
router.post('/transaction',controller.transaction);

//승희 
//유저의 자산 알아보기---웹소켓
router.get('/check_balance/:id',controller2.check_balance);
//유저의 예약금 조회하기---웹소켓
router.get('/check_reservation/:id',controller2.check_reservation);
//유저의 미체결 주문 내역---웹소켓
router.get('/unexecuted_transaction/:id/:coin',controller2.check_unexecuted);
//유저의 체결 주문 내역---웹소켓
router.get('/executed_transaction/:id/:coin',controller2.check_executed);



module.exports = router;