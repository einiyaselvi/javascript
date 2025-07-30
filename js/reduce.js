//Reduce in javascript
//this is very powerful method
//it is used to reduce an array to a single value

/*
array.reduce(function(acculumator, currentvalue, currentIndex, array){
//return statement
}, initialValue);

*/




let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator+currentValue);
console.log(sum); // Output: 15