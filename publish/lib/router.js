Router.route('/',function(){
	this.render('accountlist');
});
Router.route('/food',{
	waitOn:function(){
		return Meteor.subscribe('accountsInCategory',{cate:'cM8gGTy8tFPnzLZbC'});
	},
	template:'food',
	data:function(){
		return {
			accounts:AccountBook.find({category:'cM8gGTy8tFPnzLZbC'})
		};
	}
});
Router.route('/traffic',{
	waitOn:function(){
		return Meteor.subscribe('accountsInCategory',{cate:'JkqcWJ9ZpdBGRjZwA'});
	},
	template:'traffic',
	data:function(){
		return {
			accounts:AccountBook.find({category:'JkqcWJ9ZpdBGRjZwA'})
		};
	}
});
Router.route('/life',{
	waitOn:function(){
		return Meteor.subscribe('accountsInCategory',{cate:'GDz5qbzeEFmkwutNa'});
	},
	template:'life',
	data:function(){
		return {
			accounts:AccountBook.find({category:'GDz5qbzeEFmkwutNa'})

		};
	}

});
Router.route('/add',function(){
	this.render('add');
});