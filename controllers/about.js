Blogger.AboutController = Ember.Controller.extend({

	isPictureShowing: false,

	actions: {
		showRealName: function() {

			alert("Louis Van Gaal is the gaffer!");
		},

		showPicture: function() {

			this.set('isPictureShowing', true);
		},

		hidePicture: function() {

			this.set('isPictureShowing', false);
		}



	}

});