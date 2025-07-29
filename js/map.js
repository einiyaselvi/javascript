//map function in javascript
const numbers=[1,2,3,4,5,6,7,8,9,10];

//map(value, index, array) method creates a new array populated with the results of calling a provided function on every element in the calling array.
const sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2); //toFixed(2) is used to format the number to 2 decimal places;
});
console.log(sqrt);
console.table(sqrt);

const users = [
    {full_name: "John Doe", age: 30, city: "New York",},
    {full_name: "Jane Smith", age: 25, city: "Los Angeles",},
    {full_name: "Sam Brown", age: 17, city: "Chicago",},
    {full_name: "Emily Johnson", age: 28, city: "Houston",}

];
console.table(users);

let eligible_Status=users.map((user)=>({
    /*full_name:users.name,
    age : users.age,
    city : users.city*/
    ...user, //spread operator to copy all properties from user object
    Status:user.age>=18?"Eligible":"Not Eligible"
}));
console.table(eligible_Status);