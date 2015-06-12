// always singular name for Ember model
// each model add script tag in index.html

Blogger.Post = DS.Model.extend({

	// no id as Ember sets id automatically
	title: DS.attr(),
	body: DS.attr(),

	//create 
	//create comments property that returns all comments for that post
	comments: DS.hasMany('comment', {async:true})

});