// default the method argument
function makeAjaxRequest(url, method = 'GET') {
	return method;
	// logic to make the request
}

makeAjaxRequest('http://fileupload.com');
makeAjaxRequest('http://fileupload.com', 'POST');
makeAjaxRequest('http://fileupload.com', null);


function User(id) {
	this.id = id;
}

function generateId() {
	return Math.random() * 9999999
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;

	return user;
}

createAdminUser();
