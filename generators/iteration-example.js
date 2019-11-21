// Create a generator to be used with a for-of loop 
// to return specific properties of a custom object (engineeringTeam)
const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave'
};

function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
	names.push(name);
}
names;
