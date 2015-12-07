$(document).ready(function(){
var ref = new Firebase("https://test123-456.firebaseio.com/");
	ref.on("value", function(snapshot) {
		var data = snapshot.val();
		for (var key in data) {
			var arr = data[key];
		};
		var template = "<h3><i class='fa fa-certificate'> </i> {{name}}</h3><h4><i class='fa fa-map-marker'> </i> ：{{address}}</h4><h4><i class='fa fa-clock-o'> </i>：{{openHour}}</h4><h4><i class='fa fa-phone'> </i>：{{tel}}</h4><div class='simple'>簡介：<p>{{brief}}</p></div>"
		for (i=1; i<= arr.length; i++){
			$("section[data-role='main']").append(Mustache.render(template, arr[i]))
		};
	});
// console.log(arr[1]);
// console.log(Object.keys(arr));
});
