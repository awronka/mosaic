'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/comment', require('./comment/comment.router'));
router.use('/page', require('./page/page.router'));
router.use('/user', require('./user/user.router'));