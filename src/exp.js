const jokes = require('./jokes.json');
const Promise = require('bluebird');

// var levelup = require('levelup');
var levelup = Promise.promisifyAll(require('levelup'));

var db = levelup('./jokesDb');

db.put('text1', "fdfgd").then(() => {
	console.log("success");
}).catch(err => {
	console.log(err);
})
