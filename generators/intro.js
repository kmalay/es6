// Asterisk denotes a generator

function* shopping() {
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store
	const stuffFromStore = yield 'cash';

	// walking to laundromat
	const cleanClothes = yield 'laundry';

	// walking back home
	return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
gen.next();	// leaving our house
// walked into the store
// walking up and down the aisles
// purchase our stuff

gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');
