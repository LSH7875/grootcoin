const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/login_success', controller.login_success);
router.post('/join_success', controller.join_success);


module.exports = router;