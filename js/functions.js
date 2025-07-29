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

