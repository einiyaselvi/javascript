n = [10, 20, 49, 56, 28];

let result=n.every((value)=>{
    return value%2==0;
});
console.log(result); // all numbers are even means true will be output else false

result=n.every((value)=>{
    return value%2==0;
});
console.log(result); // all numbers are even means true will be output else false


//directly call function
function checkEven(value){
    return value % 2 == 0;
}

result =n.every(checkEven);

console.log(result);

