// $(document).ready(function(){
// 	var myDataRef = new Firebase('https://tainanfood.firebaseio.com/');
// 	var ref=new Firebase('https://test123-456.firebaseio.com/');
// 	myDataRef.on('value', function(snapshot) {
// 	  var data=snapshot.val();
// 	  ref.push(data);
// 	  console.log(data);
// 	});
// });

// $(document).ready(function(){
// 	var myDataRef = new Firebase('https://test123-456.firebaseio.com/');
// 	var ref = new Firebase('https://ractive456.firebaseio.com/');
// 	myDataRef.on('value', function(snapshot){
// 	var data=snapshot.val();
// 	// console.log(data);
// 	for (var key in data){
// 		// console.log(data[key]);
// 		var arr=data[key];
// 		// console.log(arr[1]);
// 		// console.log(Object.keys(data));
// 	};
// 	ref.set(arr);
// 	})
// })