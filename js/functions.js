/*
//function in javascript

function add(a,b){
     return a + b;
}
console.log(add(25,10));
console.log(add(25,80));

//Function with arbitrary number of arguments

function sum()
{
    let total=0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];//total=toal+arguments[i]
    }
    return total;
}
console.log(sum(10, 10));
console.log(sum(23,23, 23, 10));

//spread operator
function total(...args)
{
    let total=0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];//total=toal+arguments[i]
    }
    return total;
}
console.log(sum(10, 10));
console.log(sum(23,23, 89, 10));

//function as expression

const add=function(a,b){
    return a + b;
}
console.log(add(20, 10));


//Arrow function
//const functionname = (parameters) => { statements }

const add=(a,b)=>{return a + b};
console.log(add(25,10)); 
*/
//1. arrow function with map()

let numbers=[1,2,3,4,5];
console.log(numbers);

let doubledNumbers=numbers.map(number=>number * 2);
console.log(doubledNumbers);

//2. using arrow function with filter()

let words=["apple", "banana", "cherry", "date"];
console.log(words);
let filteredWords=words.filter(word=>word.length > 5);
console.log(filteredWords);


//3. using arrow function with reduce()
console.log(numbers);
let total=numbers.reduce((sum,number)=>sum+number,0);
console.log(total);

//4. using arrow function to create a closure

let createCounter=()=>{
    let count=0;
    return () => {
        count++;
        return count;
    }
};
 
let counter=createCounter();
console.log(counter); //1
console.log(counter()); //1