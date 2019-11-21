// ES5
var expense = {
	type: 'Business',
	amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6
const { type, amount } = expense;


// another example destructuring function argument into 
// the specific properties we want
var savedFile = {
	extension: 'jpg',
	name: 'repost',
	size: 14040
};

function fileSummary({name, extension, size}, { color }) {
	return `${color} The file ${name}.${extension} is of size ${size}`
}

fileSummary(savedFile, { color: 'red' })


// destructuring arrays
const companies = [
	'Google',
	'Facebook',
	'Uber'
];

const [ name ] = companies;

/* 
 * To destructure a property, use curly braces {}
 *		see line 11
 * To destructure an element, use square braces []
 *		see line 36
 */


// new example
const companies = [
	{ name: 'Google', location: 'Mountain View' },
	{ name: 'Facebook', location: 'Menlo Park' },
	{ name: 'Uber', location: 'San Francisco' }
];

const [{location}] = companies;


const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

const { locations: [location] } = Google;
location;


// practical example
// using destructuring to eliminate requiring a specific order 
// of function arguments
function signUp({username, password, email, dateOfBirth, city}) {
	// create new user
}

// other code
// other code
// other code
// other code

const user = {
	username: 'myname',
	password: 'mypass',
	email: 'myemail',
	dateOfBirth: '01/01/1990',
	city: 'New York'
};

signUp(user)



// practical example
// using destructuring with arrays

// this is an example result from an api call
const points = [
	[4, 5],
	[10, 1],
	[0, 40]
];

// we need the data in this format instead
/*
[
	{ x: 4, y: 5 },
	{ x: 10, y: 1 },
	{ x: 0, y: 40 }
]
*/

points.map(([ x, y ]) => {
	return { x, y };
});
