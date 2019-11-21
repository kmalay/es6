promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 2000);
});

promise
	.then(() => console.log('success!'))
	.then(() => console.log('also ran this!'))
	.catch(() => console.log('error'));
