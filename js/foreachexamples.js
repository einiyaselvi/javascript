//forEach method in javascript

/*
//1. print each element of an array
const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits);
fruits.forEach(fruit=>console.log(fruit));


//2. sum all elements of an array
const numbers = [10, 20, 30, 40, 50];
let total=0;
numbers.forEach(number => {
    total += number;
});
console.log(total);

//3. create a new array from an existing one:

const doubledNumbers = [];
numbers.forEach(number => {
    doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

//4. to find the max element of an array:
console.log(numbers);
let max=numbers[0];
numbers.forEach(number => {
    if (number > max) {
        max = number;
    }
});
console.log(max);

//5. to find the min element of an array:
let min = numbers[0];       
numbers.forEach(number => {
    if (number < min) {
        min = number;
    }
}); 
console.log(min);

//6. Calculate the average of an array:
console.log(numbers);    
total=0;
let count = 0;
numbers.forEach(number => {
    total += number;
});
console.log(total/numbers.length);
console.log(total/count);

//6. to fileter an array:
const numbers = [10, 20, 30, 40, 50];
const evenNumbers = [];
numbers.forEach(number=>{
    if(number%2==0){
        evenNumbers.push(number);
    }
});
console.log(evenNumbers);
*/

const names=["Alice", "Bob", "Charlie", "David"];
names.forEach((name1, index)=>{
    console.log(name1, index);
    names[index]=name1.toUpperCase();
});
console.log(names);