const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/join_success', controller.join_success);
router.post('/login_success', controller.login_success);
router.get('/info',controller.info)

module.exports = router;