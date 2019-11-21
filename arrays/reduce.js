// reduce
var numbers = [10, 20, 30];

var sum = 0;

numbers.reduce((sum, number) => {
	return sum + number
}, 0)

var primaryColors = [
	{ color: 'red' },
	{ color: 'yellow' },
	{ color: 'blue' }
];

primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);

	return previous;
}, []);

function balancedParens(string) {
	return !string.split("").reduce(function(previous, char) {
		if (previous < 0) { return previous; }
		if (char == '(') { return ++previous; }
		if (char == ')') { return --previous; }
		
		return previous;
	}, 0)
}

balancedParens('(((())))');
