Blogger.Comment = DS.Model.extend({

	// no id as Ember sets id automatically
	text: DS.attr(),

	//post property relationship
	//if u take a 'comment' object and access this newly created 'post' property
	// it will return the post whose id matches the post id stored in the commment
	post: DS.belongsTo('post', {async: true})
});