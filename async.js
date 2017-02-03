window.onload = function () {

    /*  var http = new XMLHttpRequest();

      http.onreadystatechange = function(){
          if(http.readyState == 4 && http.status == 200)
          {
              //console.log(JSON.parse(http.response));
          }
      }
      http.open("GET","data/tweets.json", true);
      http.send();

     //jquery method
     $.get("data/tweets.json",function(data){
      console.log(data);
     }) */


    /* var fruits = ['banana','apple','pear'];

     //the function inside foreach is a callback function
     //This function will be called for each fruit inside the fruits array
     //val will hold the value of each fruit
     //This callback function is inline
     //It can be declared outside like function callback(){}
     //This is a synchronous callback, "test" will be printed after all the fruits
     fruits.forEach(function(val){
          console.log(val);
     });
     console.log("test");
     */

    /*
      //async example
      //This is an async callback
      //The request is sent outside of javascript and
      //when it is returned, the callback is executed on the data.
      //Since this is async, "test" might be printed before the callback executes.
      $.get("data/tweets.json",function(data){
        console.log(data);
      });
      console.log("test");

      */

    //what callback hell looks like
    //Get tweets.
    //Once we have tweets, get friends.
    //Once we have tweets and friends, get videos
    //This results in a triangle of death because of the shape
    //This is very hard to work with
    //Refactor this by moving out the error handler into a separate function
    //and breaking the success callbacks into separate functions.



    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    function cbTweets(data) {
        console.log(data);
        
        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError
        });
    }

    function cbFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function (data) {
                console.log(data);
            },
            error: handleError
        });
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    });
};