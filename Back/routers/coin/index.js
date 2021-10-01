   
const express = require('express');
const router = express.Router();
const controller = require('./coin.controller');


router.post('/buy_order',controller.buy_order);
router.post('/sell_order',controller.sell_order);
router.get('/start_price',controller.start_price);
router.post('/transaction',controller.transaction);

module.exports = router;