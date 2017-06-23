const Promise = require('bluebird');
var levelup = require('levelup');

class Level {
	constructor(name) {
		this.counter = 0;
		this.db = levelup(name);
	}

	put(data) {
		return new Promise((resolve, reject) => {
			this.getCounter()
				.then(counter => {
					counter = +counter;
					this.db.put(counter, data, err => {
						if (err) return reject(err);
						this.updateCounter().then(() => {
							return resolve(counter);
						}).catch(err => (reject(err)));
					})
				})
				.catch(err => (reject(err)))
		})
	}
	get(key) {
		return new Promise((resolve, reject) => {
			this.db.get(key, (err, data) => {
				if (err) return reject(err);
				return resolve(data);
			})
		})
	}

	delete(key) {
		return new Promise((resolve, reject) => {
			this.db.del(key, (err) => {
				if (err) return reject(err);
				return resolve();
			})
		})
	}

	getCounter() {
		return new Promise((resolve, reject) => {
			this.get('counter')
				.then(counter => {
					this.counter = +counter;
					resolve(counter)
				})
				.catch(err => {
					if (err.notFound) {
						this.counter = 1;
						return resolve(1);
					}
					return reject(err);
				})
		});
	}

	updateCounter() {
		return new Promise((resolve, reject) => {
			this.db.put('counter', this.counter + 1, err => {
				if (err) return reject(err);
				this.counter++;
				resolve();
			})
		});
	};
}

module.exports = Level;
