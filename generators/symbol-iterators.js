// Symbol iterator is a tool that teaches objects 
// how to respond to a for-of loop

const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	}
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
};

const names = [];
for (let name of engineeringTeam) {
	names.push(name);
}
names;
