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