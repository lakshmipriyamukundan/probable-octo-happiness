var quotes = require('./quotes.js');

var feelMore = function (feel){
    quotes.forEach(function(emotion){
        if(emotion.feel === feel){
            console.log(emotion.quotes);
        }
    })
};

module.exports = feelMore('sad');