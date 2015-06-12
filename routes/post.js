Blogger.PostRoute = Ember.Route.extend({

	model: function(params) {

		//passed 2nd argument being the id of the post to be retrieved
		// that will return that single post
		return this.store.find('post', params.post_id);
	}
});