// find
var users = [
	{ name: 'Jill' },
	{ name: 'Alex' },
	{ name: 'Bill' }
];
var user;

users.find(function(user) {
	return user.name === 'Alex';
})

function Car(model) {
	this.model = model;
}

var cars = [
	new Car('Buick'),
	new Car('Camaro'),
	new Car('Focus')
];

cars.find((car) => {
	return car.model === 'Focus'
})

var posts = [
	{ id: 1, title: 'New post' },
	{ id: 2, title: 'Old post' }
];

var comment = { postId: 1, content: 'Great post' };

function postForComment(posts, comment) {
	return posts.find((post) => { return post.id === comment.postId })
}

postForComment(posts, comment);
