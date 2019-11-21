url1 = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
	.then(response => response.json())
	.catch(() => console.log('error'));

