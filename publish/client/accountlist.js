//在session中设置limit值，初始值为3
Session.setDefault('limit',3);

Template.accountlist.onCreated(function(){
	// this.subscribe('allaccounts');
	//实现响应式订阅，session变化后自动重新执行订阅操作
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
	'click span.remove'(e,tpl){
		if(confirm('确定删除？')){
			  AccountBook.remove({_id:this._id});

		}
	},
	'click span.edit'(e,tpl){

	},
	'click button.more'(e,tpl){
		var lmt=Session.get('limit')+3;
		Session.set('limit',lmt);

	}

});