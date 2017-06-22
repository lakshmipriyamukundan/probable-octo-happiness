const expect = require('chai').expect;
const jf = require('../src/index');

describe('testing joke factory', () => {

	// it('should return a random joke', done => {
	// 	expect(jf.random())
	// 		.to
	// 		.be
	// 		.an('object');
	// 	done();
	// });

	it('should add a new joke to the db', done => {
		expect(jf.addJoke({
			"author": "Lakshmipriya",
			"text": "Define Vajahath.. the man who only knows infinity"
		})).to.be.true;
		done();
	});


});
