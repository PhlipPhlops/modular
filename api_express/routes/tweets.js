var express = require('express');
var router = express.Router();

var tweets_controller = require('../controllers/tweets_controller');

/* GET bookmarks listing. */
router.get('/', function(req, res, next) {
    console.log("in the root")
});

/* GET bookmarks listing. */
router.get('/bookmarks', async function(req, res) {
    res.json(await tweets_controller.getBookmarks());
});

/* GET search results. */
router.get('/search', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;
