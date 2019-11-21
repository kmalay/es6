const add = (a, b) => { a + b; }

add(1, 2);

// omitting the parens if there's a single function argument
const double = number => 2 * number;

double(8);

const numbers = [1, 2, 3];

numbers.map(number => 2 * number);

const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.members.map((member) => {
			return `${member} is on team ${this.teamName}`;
		})
	}
}

team.teamSummary();
