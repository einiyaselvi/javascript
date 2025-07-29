/* //mycallback function

function myCallback() {
   console.log("hi am einiya"); 
}

function test(myCallback){
    myCallback();
}
test(myCallback);
*/

function higherOrderFunction(myCallback){
    myCallback();
}
higherOrderFunction(myCallback);

//setTimeout(function, 1000);
setTimeout(function() {
    console.log("This is a callback function executed after 2 seconds");
}, 2000);


//forEach with callback function
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    console.log(number);
});

