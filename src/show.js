var levelup = require('levelup');
let db = levelup('./jokesDb');

db.createReadStream()
	.on('data', function(data) {
		console.log(data.key, '=', data.value)
	})
	.on('error', function(err) {
		console.log('Oh my!', err)
	})
	.on('close', function() {
		console.log('Stream closed')
	})
	.on('end', function() {
		console.log('Stream ended')
	})
