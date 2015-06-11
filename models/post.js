Blogger.Post = DS.Model.extend({

	// no id as Ember sets id automatically
	title: DS.attr(),
	body: DS.attr()

});