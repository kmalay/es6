//var name = 'Jane';
//var title = 'Software Engineer';
//var hourlyWage = 40;

// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

`${name} ${title} ${hourlyWage}`


function count(targetString) {
	const characters = ['a', 'e', 'i', 'o', 'u'];
	let number = 0;

	for (var i = 0; i < targetString.length; i++) {
		if (characters.includes(targetString[i])) {
			number++;
		}
	}

	return number;
}

count('aeiou')

