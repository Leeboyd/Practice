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
var refMovies = new Firebase('https://ractivemovie123.firebaseio.com/');

var ractive = new Ractive({
	el: '#container',
	template: '#template',
	movie:[] //似乎有無都沒影響...
});

ractive.on({
	saveToList: function(event){
		if (event.original.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
			var movieName = document.getElementById('movieName').value.trim();
			if (movieName.length > 0) {
	        			//this.observe('movieName', this.saveToFB, {defer: true});
			refMovies.push({name: movieName });
			}
			document.getElementById('movieName').value = '';
			return false;
		}		
	},
	edit: function(e,  key, name){
		var newName = prompt("Update the movie name", name);
		if (newName && newName.length> 0){
			var updateRef = new Firebase('https://ractivemovie123.firebaseio.com/' + key);
			updateRef.update({name: newName});	
		}
		
	},
	del: function(e, key, name){
		var answer = confirm('要刪掉\"' + name + '\"這筆資料嗎?');
		if (answer){
			var delRef = new Firebase('https://ractivemovie123.firebaseio.com/' + key);
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
refMovies.on('value', function(snapshot){
	var rawdata = snapshot.val();
	//console.log(rawdata);
	var list= [];
	for (var key in rawdata){
		name = rawdata[key].name;
		if(name.trim().length > 0){
			list.push({
				name: name,
				key: key
			}) 
		}
	}
	ractive.set('movie', list); //更新movie資料順利...
	//console.log(list);
    	//refreshUI(list);
});
