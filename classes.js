//ES5
function Car(options) {
	this.title = options.title;
}

Car.prototype.drive = function() {
	return 'vroom';
}

function Toyota(options) {
	this.color = options.color;
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'})


//ES6 with classes
class Car {
	constructor({ title }) {
		this.title = title;
	}

	drive() {
		return 'vroom';
	}
}

class Toyota extends Car {
	constructor(options) {
		super(options); // Car.constructor
		this.color = options.color;
	}

	honk() {
		return 'beep';
	}
}

const toyota = new Toyota({ color: 'red', title: 'My new Toyota' });

