$(document).ready(function(){
var ref = new Firebase("https://test123-456.firebaseio.com/");
	ref.on("value", function(snapshot) {
	// console.log(snapshot.val());
	var data=snapshot.val();
	// console.log(data);
	for (var key in data){
		// console.log(data[key]);
		var arr=data[key];
		// console.log(arr[1]);
		// console.log(Object.keys(data));
	};
		// console.log(arr[1]['address']);
		for (i=1; i<= arr.length; i++){
			for (var prop in arr[i]){
				// console.log(arr[i][prop]);
				// $('body').append(arr[i][prop]);
				var s ;
				s = "<p>"+prop + " : " + arr[i][prop]+"</p>";
				s1 =$("<p>"+prop + " : " + arr[i][prop]+"</p>");
				// console.log(s);
				$('body').append(s1);
			}
		}
	});
});
// 	var ref=new Firebase('https://luminous-inferno-7278.firebaseio.com/');
// 	ref.on('value', function(snapshot) {
// 		 data=snapshot.val();
// 		 console.log(data);
// 		 for (key in data){
// 		 	console.log(key);
// 		 	console.log(data[key]);
// 		 	var arr=[];
// 		 	arr=data[key];
// 		 	// for(int i=0;i<arr.length;i++){
// 		 	// 	console.log(arr[i]);
// 		 	// }
// 		 	console.log(arr);
// 		 }
		

	
