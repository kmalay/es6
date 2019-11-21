function createBookShop(inventory) {
	return {
		// no need for key/value if they are the same
		inventory,
		// if key/value pair with function as value, then colon/function keyword
		// can be dropped
		inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	}
}

const inventory = [
	{ title: 'Harry Potter', price: 10 },
	{ title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue()
bookShop.priceForTitle('Harry Potter')
