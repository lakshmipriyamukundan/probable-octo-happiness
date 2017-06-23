const Joke = require('./index');
const jokes = require('./jokes');
const async = require('async');


Joke.initialize().then((firstKey) => {
	async.eachSeries(jokes.jokes, function(joke, cbJoke) {
		Joke.add(joke.text).then(key => {
			console.log(key);
			cbJoke();
		}).catch(err => {
			cbJoke(err);
		})
	}, function(err) {
		if (err) {
			console.log(err);
			return;
		}
		return;
	})

}).catch(err => {
	console.log(err);
});
