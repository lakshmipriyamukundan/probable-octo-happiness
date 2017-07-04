const Promise = require('bluebird');
const Level = require('./level');

// Initialize db
const db = new Level('./jokesDb');

class Joke {
	static add(joke) {
		return new Promise((resolve, reject) => {
			db.put(joke).then(key => {
				return resolve(key);
			}).catch(err => {
				return reject(err);
			});
		});
	}

	static get(key) {
		return new Promise((resolve, reject) => {
			db.get(key).then(joke => {
				resolve(joke);
			}).catch(err => {
				reject(err);
			});
		});
	}

	static delete(key) {
		return new Promise((resolve, reject) => {
			db.delete(key).then(() => {
				return resolve(true);
			}).catch(err => {
				return reject(err);
			});
		});
	}

	static initialize() {
		return db.getCounter();
	}
}

module.exports = Joke;

// Joke.add('Hello World 123!!').then(key => {
// 	console.log(key);
// });

// Joke.get(14).then(joke => console.log(joke));
