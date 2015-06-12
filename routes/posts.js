Blogger.PostsRoute = Ember.Route.extend({

	// make the posts array available to this controller and template
	model: function () {

		//this.store returns the DataStore DS, then call the find method and pass the name of the model as a string i.e 'post'
		return this.store.find('post');
	}
});