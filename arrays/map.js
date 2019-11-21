// map
var numbers = [1, 2, 3];

var doubledNumbers = numbers.map((number) => {
	return number * 2;
})

doubledNumbers;

var cars = [
	{ model: 'Buick', price: 'cheap'},
	{ model: 'Camaro', price: 'expensive'}
];

var prices = cars.map((car) => {
	return car.price;
});
