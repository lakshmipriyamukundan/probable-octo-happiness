const jokes = require('./jokes.json');

let random = function() {
	let joke = jokes.jokes;
	var item = joke[Math.floor(Math.random() * joke.length)];
	return item;
};

let addJoke = function(joke) {
	let jokez = jokes.jokes;
	jokez.push(joke);
	return true;
};

module.exports = {
	random,
	addJoke
};
