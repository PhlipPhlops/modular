var express = require('express');
var router = express.Router();

/* GET bookmarks listing. */
router.get('/bookmarks', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET search results. */
router.get('/search', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
