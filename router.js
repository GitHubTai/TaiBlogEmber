Blogger.Router.map(function() {
	this.resource('posts', {path: '/'});
	this.resource('about');

	this.resource('contact', function() {
		this.resource('phone');
		this.resource('email');
	});

	this.resource('news', function() {
		this.resource('newsOne');
	});

	this.resource('recent-comments');
	
});