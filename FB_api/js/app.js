$( document ).ready(function() {
    FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
         
      } else if (response.status === "not_authorized") {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
     });  
$("#fb-login").click(function() {
    //initiate OAuth Login
    FB.login(function(response) {
        // if login was successful, execute the following code
        if (response.authResponse) {
            FB.api("/me/posts?limit=1000", function(details) {
                // output the response
                //$("#userdata").html(JSON.stringify(details, null, '\t'));
                $("#fb-login").attr("style", "display:none;");

                var allPost = details.data;
                var template = "<tr><td>{{id}}</td><td>{{created_time}}</td><td>{{message}}</td></tr>"



                // "<h4><i class='fa fa-pencil-square-o'> </i>文章ID：{{id}}</h4>"+
                // "<h4><i class='fa fa-clock-o'> </i>文章時間：{{created_time}}</h4>"+
                // "<div class='simple'>文章內容：<p>{{message}}</p></div>"
                for (i=0; i<76 ; i++){
                  //$("section[data-role='main']").append(Mustache.render(template, allPost[i]))
                  $("tbody[data-role='main']").append(Mustache.render(template, allPost[i]))
                };


            });
        }
    }, {
        scope: "user_posts"
    });
});     
});
