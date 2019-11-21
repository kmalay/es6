// filter
var products = [
	{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
	{ name: 'banana', type: 'fruit', quantity: 10, price: 15 },
	{ name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
	{ name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

var filteredProducts = products.filter(function(product) {
	return product.type === 'fruit';
})

var newProducts = products.filter(function(product) {
	return product.type === 'vegetable'
		&& product.quantity > 0
		&& product.price < 10
})

var post = { id: 4, title: 'New post' }
var comments = [
	{ postId: 4, content: 'Awesome post' },
	{ postId: 3, content: 'It was ok' },
	{ postId: 4, content: 'Neat' }
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
		return comment.postId === post.id
	})
}

commentsForPost(post, comments)
