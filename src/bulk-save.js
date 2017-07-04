const async = require('async');
const jokes = require('./jokes');
const Joke = require('./index');

Joke.initialize().then(firstKey => {
	async.eachSeries(jokes.jokes, (joke, cbJoke) => {
		Joke.add(joke.text).then(key => {
			console.log(key);
			cbJoke();
		}).catch(err => {
			cbJoke(err);
		});
	}, err => {
		if (err) {
			console.log(err);
		}
		console.log(firstKey);
	});
}).catch(err => {
	console.log(err);
});
