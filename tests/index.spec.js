/* eslint no-undef: 0 */
const jf = require('../src/index');

let key;
describe('testing joke factory', () => {
	it('Adding new joke to the level db', done => {
		jf.add('Define Vajahath, the man who only knows infinity!!!!..').then(data => {
			key = data;
			done();
		}).catch(err => {
			done(err);
		});
	});

	it('Getting the joke corresponding to given key', done => {
		jf.get(key).then(data => {
			console.log(data);
			done();
		}).catch(err => {
			console.log(err);
			done(err);
		});
	});

	it('Deleting created joke from db', done => {
		jf.delete(key).then(data => {
			console.log(data);
			done();
		}).catch(err => {
			done(err);
		});
	});
});
