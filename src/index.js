const jokes = require('./jokes.json');
const Promise = require('bluebird');

var levelup = require('levelup');
levelup = promisifyAll(levelup);

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = levelup('./jokesDb');


// 2) put a key & value

let random = function() {
	let joke = jokes.jokes;
	var item = joke[Math.floor(Math.random() * joke.length)];
	return item;
};

let addJoke = function(joke) {
	return new Promise((resolve, reject) => {

		db.put('text', 'NewLvelUp', function(err) {
			if (err) {
				return reject(err);

			}
			resolve();
		});
	});
};

class Counter {
	constructor() {
		db.get('counter', (err, counter) => {
			if (err) return reject(err);
			return resolve(counter);
		});
	}
	static get() {
		return new Promise((resolve, reject) => {
			db.get('counter', (err, counter) => {
				if (err) return reject(err);
				return resolve(counter);
			});
		});
	};

	static update() {
		return new Promise((resolve, reject))
	}

}


module.exports = {
	random,
	addJoke
};

addJoke();
