const levelup = require('levelup');

const db = levelup('./jokesDb');

db.createReadStream()
	.on('data', data => {
		console.log(data.key, '=', data.value);
	})
	.on('error', err => {
		console.log('Oh my!', err);
	})
	.on('close', () => {
		console.log('Stream closed');
	})
	.on('end', () => {
		console.log('Stream ended');
	});
