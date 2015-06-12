Blogger.RecentCommentsRoute = Ember.Route.extend({

	model: function() {

		///this.store returns the DataStore DS, then call the find method and pass the name of the model as a string i.e 'comment'
		return this.store.find('comment');
	}

});