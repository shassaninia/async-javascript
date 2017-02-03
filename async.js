window.onload = function () {

    /* Promises */
    //What is a promise? A promise is an object that represents an 
    //action that hasn't finished yet, but will do at some point.
    //It is a placeholder for some asynchronous operation
    //As soon as an asynchronous operation has started, the Promise
    //is returnd right away before the data is returned.
    //We can register callbacks in the promise to handle what happens
    //when the data comes back.  Promise is a new feature in ECMA Script 6
    //and isn't supported in all browsers, however, there are libraries such as
    //q that give more support.
    //The native promise library is not supported in many browsers
    //If you want full production support, probably stick to something like
    //q for now.
  /*  function get(url) {
        //resolve is what happens when promise is success
        //reject is what happens when promise is an error
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            //Open connection
            xhttp.open("GET", url, true);
            //If browser supports browser, onload will be supported as
            //well as onerror. No need to worry about onreadystatechanged
            xhttp.onload = function () {
                if (xhttp.status == 200) { //OK
                    //resolve
                    resolve(JSON.parse(xhttp.response))
                } else {
                    //reject
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function () {
                reject(xhttp.statusText);
            };
            xhttp.send();
        });
    }

    //When get is called, the promise is return to use right away
    //before the data is returned.
    var promise = get("data/tweets.json");

    //We can register a callback with this promise to handle the data
    //by using then.
    //This basically says once I have the data, then I want to do this, 
    //in this case console.log the tweets
    //Chain the catch to the promise to handle errors
    //We can chain multiple requests together by returning another promise
    //Once we the data for tweets is returned, console it
    //Then once the data for friends is returned, console it
    //Then once the data for videos is returned, console it
    //
    promise.then(function (tweets) {
        console.log(tweets);
        return get("data/friends.json").then(function (friends) {
            console.log(friends);
            return get("data/videos.json").then(function (videos) {
                console.log(videos);
            })
        })
    }).catch(function (error) {
        console.log(error)
    }); */

    //Promises in jquery
    $.get("data/tweets.json").then(function(tweets){
        console.log(tweets);
         return  $.get("data/friends.json");
    }).then(function(friends){
        console.log(friends);
        return $.get("data/videos.json");
    }).then(function(videos){
        console.log(videos);
    })
};