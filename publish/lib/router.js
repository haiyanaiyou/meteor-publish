Router.route('/',function(){
	this.render('accountlist');
});
Router.route('/food',{
	waitOn:function(){
		return Meteor.subscribe('accountsInCategory',{cate:'mgyZueWDu4HvogApj'});
	},
	template:'food',
	data:function(){
		return {
			accounts:AccountBook.find({category:'mgyZueWDu4HvogApj'})
		};
	}
});