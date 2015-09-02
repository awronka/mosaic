'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/comment', require('./comment/comment.router'));
router.use('/page', require('./page/page.router'));

router.use(function (req, res) {
    res.status(404).end();
});