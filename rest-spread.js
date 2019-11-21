// example using the rest (...) operator
// to capture all function arguments into numbers array
function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0)
}

addNumbers(1,2,3,4,5)


// example using the spread (...) operator
// to concatenate multiple arrays and custom element
const defaultColors = ['red', 'green'];
const favoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

[ 'blue', ...fallColors, ...defaultColors, ...favoriteColors ]


// new example
function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
		return [ 'milk', ...items ];
	}
}

validateShoppingList('oranges', 'bread', 'eggs')


// yet another example
const MathLibrary = {
	calculateProduct(...rest) {
		console.log('Please use the multiply method instead')
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	}
};
