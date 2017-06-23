const Promise = require('bluebird');
const Level = require('./level-promise');

// initialize db
let db = new Level('./JOKES');

db.put('hi', 'hello')
	.then(() => {
		console.log('done!')
	})
	.catch(err => {
		console.log(err);
	})
