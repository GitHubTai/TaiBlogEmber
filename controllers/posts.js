Blogger.PostsController = Ember.ArrayController.extend ({

	// sort by default:
	// sortProperties : ['date', 'time']

	actions: {

		sortByTitle: function() {
			this.set('sortProperties', ['title']);
		}
	}


});