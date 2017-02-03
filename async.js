window.onload = function () {
/*
//Generators are new to ECMAScript 6

//Make a generator, put an * after the funciton keywor
//We can pause generators by use the yield keyword
//In this case, javascript will grab the 10, hit the yield and pause hit
//We can use the genrator by using the .next() method
//10 is passed outside of the generator, we can use it by using .next();
function* gen(){
    var x = yield 10;
}

//Get the generator ready
var myGen = gen(); //This does not fire the gen() function

//Run the gen function
//This will fire the gen() function and
//return 10 to use
myGen.next();

//we can pass in data to next, in this case 10 and use it in the gen function
myGen.next(10);
*/

genWrap(function*(){

    var tweets = yield $.get("data/tweets.json");
    console.log(tweets);

    var friends = yield $.get("data/friends.json");
    console.log(friends);

    var videos = yield $.get("data/videos.json");
    console.log(videos);
});

function genWrap(generator){
   var  gen = generator();

    function handle(yielded){
        if(!yielded.done){
            yielded.value.then(function(data){
                return handle(gen.next(data));
            })
        }
    }

    return handle(gen.next());
}

// 
//1. We call handle(gen.next())
//2. gen.next() has an object with a done property
//3. Because we have a done property, we can check for it in the handle
//function yielded.done
//4. If the generator is not done, get the value from the yielded object
//5. The value of the object is the promise, so we can use .then()
//6. We call handle again passingg in the data to gen.next()
//7. which will put the data into tweets, friends, videos
//Confusing!!!
}; 