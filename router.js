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
	//put id of specific post in url e.g. /posts/3  whereas 3 is in Ember called the dynamic segment 
	this.resource('post', {path: 'posts/:post_id'});

	this.resource('new-post');
	
});