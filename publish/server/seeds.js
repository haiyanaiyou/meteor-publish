if(AccountBook.find().count() === 0 && AccountCategory.find().count()=== 0){
	var food =AccountCategory.insert({name:'食物'});
	var traffic =AccountCategory.insert({name:'交通 '});
	var life =AccountCategory.insert({name:'生活'});

	AccountBook.insert({
		memo:'和朋友吃火锅',
		money:200,
		category:food,
		createtime:"2016-06-01"

	});
	AccountBook.insert({
		memo:'工作餐',
		money:20,
		category:food,
		createtime:"2016-06-02"

	});
	AccountBook.insert({
		memo:'打车',
		money:100,
		category:traffic,
		createtime:"2016-06-03"

	});
	AccountBook.insert({
		memo:'同事聚餐',
		money:300,
		category:food,
		createtime:"2016-06-05"

	});
	AccountBook.insert({
		memo:'买新手机',
		money:2000,
		category:life,
		createtime:"2016-06-04"

	});
	AccountBook.insert({
		memo:'手机充值',
		money:200,
		category:life,
		createtime:"2016-06-06"

	});
	

}