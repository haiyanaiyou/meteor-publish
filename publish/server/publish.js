Meteor.publish('allaccounts',function(){
	return AccountBook.find();
});
//发送部分消费记录
Meteor.publish('accounts',function(options){
	var queryCondition={};
	var queryOptions={
		limit:options.limit
	};
	return AccountBook.find(queryCondition,queryOptions);

});
//发布某个分类下的消费记录
Meteor.publish('accountsInCategory',function(options){
	var queryCondition={category:options.cate};
	return AccountBook.find(queryCondition);

});
