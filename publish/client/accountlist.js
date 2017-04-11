Session.setDefault('limit',4);

Template.accountlist.onCreated(function(){
	// this.subscribe('allaccounts');
	Tracker.autorun(function(computation){
		Meteor.subscribe('accounts',{limit:Session.get('limit')});

	});
});
Template.accountlist.helpers({
	accounts:function(){
		return AccountBook.find();
	}
});
Template.accountlist.events({
	'click button.more'(e,tpl){
		var lmt=Session.get('limit') +4;
		Session.set('limit',lmt);

	},
	'click button.remove'(){
		if(confirm('确定删除？')){
			var id=this._id;
			AccountBook.remove({_id:id});
		}
	},
});