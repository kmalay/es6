promise = new Promise((resolve, reject) => {
	resolve();
});

promise
	.then(() => console.log('success!'))
	.then(() => console.log('also ran this!'))
	.catch(() => console.log('error'));
