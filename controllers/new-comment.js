Blogger.NewCommentController = Ember.Controller.extend ({

	/* 'needs' hook gives acces to another Controller, here we need the PostController

	*/
	needs: ['post'],

	actions : {

		save: function() {
			var comment = this.store.createRecord('comment', {

				text: this.get('text')
			});
			comment.save();

			/* this 'new-comment' route is nested in the 'post' route,
			  need to associate the comment with the post we are looking at,
			  to get access to the corresponding post we need acces to the PostController
			*/
			var post = this.get('controllers.post.model');
			post.get('comments').pushObject(comment);
			post.save();

			this.transitionToRoute('post', post.id);
		}
	}
});