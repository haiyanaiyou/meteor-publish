Template.add.events({
	'submit form.form-add'(e,tpl){
		e.preventDefault();
		var money=tpl.$('#account_money').val();
		var createtime=tpl.$('#account_createtime').val();
		var memo=tpl.$('#account_memo').val();
		AccountBook.insert({money:money,createtime:createtime,memo:memo},function(err){
			if(!err){
				tpl.$('#account_money').val('');
				tpl.$('#account_createtime').val('');
				tpl.$('#account_memo').val('');
				Router.go('/');


			}

		});

	}
});