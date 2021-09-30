const express = require('express');
const router = express.Router();
const userRouter = require('./user/index');
const coinRouter = require('./coin/index');

router.use('/user',userRouter)
router.use('/coin',coinRouter)

module.exports = router;
