// every and some
var computers = [
	{ name: 'Apple', ram: '24' },
	{ name: 'Compaq', ram: '4' },
	{ name: 'Acer', ram: '32' }
];

var allComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

computers.every((computer) => {
	return computer.ram > 16;
})

computers.some((computer) => {
	return computer.ram > 16;
})

var names = [
	"Alexandria",
	"Matthew",
	"Joe"
];

names.every((name) => {
	return name.length > 4
})

names.some((name) => {
	return name.length > 4
})

function Field(value) {
	this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

var username = new Field('foo');
var password = new Field('bar');
var birthdate = new Field('10/10/1990')

var fields = [username, password, birthdate];

var formIsValid = fields.every((field) => {
	return field.validate()
})

formIsValid