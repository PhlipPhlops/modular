let TwitterQueries = require('./twitter_queries/twitter_queries.js')

let tq = new TwitterQueries();

exports.getBookmarks = function() {
    return tq.getBookmarks();
}