Blogger.PostsRoute = Ember.Route.extend({

	// make the posts array available to this controller and template
	model: function () {
		return posts;
	}
});