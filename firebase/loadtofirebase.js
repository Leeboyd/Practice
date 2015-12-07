$(document).ready(function(){
	var myDataRef = new Firebase('https://tainanfood.firebaseio.com/');
	var ref=new Firebase('https://test123-456.firebaseio.com/');
	myDataRef.on('value', function(snapshot) {
	  var data=snapshot.val();
	  ref.push(data);
	  console.log(data);
	});
	
});