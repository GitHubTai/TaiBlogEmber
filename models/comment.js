Blogger.Comment = DS.Model.extend({

	// no id as Ember sets id automatically
	text: DS.attr(),

	//post property relationship
	post: DS.belongsTo('post', {async: true})
});