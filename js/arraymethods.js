//array methods
//25 methods
//1. forEach

const numbers = [1, 2, 3, 4, 5];
//value --> compulsory , index, array --> optional
numbers.forEach((value)=>
{
    console.log(value);
});


//index, array --> optional
numbers.forEach((value, index)=>
{
    console.log("index is: " + index+ " and value is: " + numbers[index]);
});


const users = [
    {full_name: "John Doe", age: 30, city: "New York",},
    {full_name: "Jane Smith", age: 25, city: "Los Angeles",},
    {full_name: "Sam Brown", age: 22, city: "Chicago",},
    {full_name: "Emily Johnson", age: 28, city: "Houston",}

];
users.forEach((values) => {
    console.log(value.full_name);
});

