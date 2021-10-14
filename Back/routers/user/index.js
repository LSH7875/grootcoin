const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/join_success', controller.join_success);
router.post('/login_success', controller.login_success);
router.get('/login_check',controller.login_check)
router.get('/assets',controller.assets)

module.exports = router;