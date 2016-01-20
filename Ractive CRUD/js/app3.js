// var ref = new Firebase("https://ractive456.firebaseio.com/");
// ref.on('value', function(snapshot) {

// 	var shopList=snapshot.val();
// 	console.log(shopList);
// 	var ractive = new Ractive({
// 		el: '#container',
// 		template: '#template',
// 		//modifyArrays: false,
// 		data: {shop: shopList}
// 	})
// 	var newShop ={
// 		name: 'Kokiri Shop',
// 		address: 'Kokiri Forest',
// 		tel:'886-6-2137966',
// 		openHour: "週一~週日12：00~18：00"
// 	};
// 	ractive.push('shop', newShop);  //Alternative way
// 	shopList.push( newShop ); //push
// })
var refFoods = new Firebase('https://ractive456.firebaseio.com/');

var ractive = new Ractive({
	el: '#container',
	template: '#template',
	foods:[] //似乎有無都沒影響...
});

ractive.on({
	submit: function(event,  InputName, InputAddress){
		event.original.preventDefault();
		if (InputName.length>0 && InputAddress.length > 0 ){
			refFoods.push({name: InputName, address: InputAddress});
		}
		//document.getElementById('MVName').value = '';
		//document.getElementById('TVName').value = '';
		$('#storeName').val('');
		$('#storeAddress').val('');
		return false;
	},
	edit: function(e,  key, data){
		//console.log(e);
		var updateRef = new Firebase('https://ractive456.firebaseio.com/' + key);
		if(e.node.innerText === "Edit Store "){
			var newName = prompt("Enter a new name", data);
			if (newName && newName.length> 0){
				updateRef.update({name: newName});
			}
		}else if(e.node.innerText === "Edit Address "){
			var newAdd = prompt("請輸入新的地址", data);
			if(newAdd && newAdd.length > 0){
				updateRef.update({address: newAdd});
			}
		}
	},
	del: function(e, key, name){
		var answer = confirm('要刪掉\"' + name + '\"這筆資料嗎?');
		if (answer){
			var delRef = new Firebase('https://ractive456.firebaseio.com/' + key);
			delRef.remove();
		}
	}
});
// function refreshUI(list) {
//     var lis = '';
//     for (var i = 0; i < list.length; i++) {
//         lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
//     };
//     document.getElementById('favMovies').innerHTML = lis;
// };
refFoods.on('value', function(snapshot){
	var rawdata = snapshot.val();
	//console.log(rawdata);
	var list= [];
	for (var key in rawdata){
		name = rawdata[key].name;
		address = rawdata[key].address;
		if(name.trim().length > 0 && address.trim().length > 0){
			list.push({
				name: name,
				address: address,
				key: key
			}) 
		}
	}
	ractive.set('foods', list); //更新movie資料順利...
	//console.log(list);
    	//refreshUI(list);
});
