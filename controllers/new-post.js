Blogger.NewPostController = Ember.Controller.extend({

	actions: {
		save: function() {

			// 1st arg = the name of the model u want 2 create
			var newPost = this.store.createRecord('post', {
				title: this.get('title'),
				body: this.get('body')
				
			});

			newPost.save();
			this.transitionToRoute('posts');

		}
	}
});