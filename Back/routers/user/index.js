const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/join_success', controller.join_success);
router.post('/login_success', controller.login_success);

module.exports = router;