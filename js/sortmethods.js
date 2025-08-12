// sort() methods


const users = [
    {full_name: "John Doe", age: 30, city: "New York",},
    {full_name: "Jane Smith", age: 25, city: "Los Angeles",},
    {full_name: "Sam Brown", age: 22, city: "Chicago",},
    {full_name: "Emily Johnson", age: 28, city: "Houston",}
];

console.table(users);
users.sort((a,b)=> {
    return a.age - b.age;
});

console.table(users);

console.table(users);
users.sort((a,b)=> {
    if (a.full_name < b.full_name){
        return 1;
    }else if (a.full_name > b.full_name){
        return -1;
    }else{
        return 0;
    }
});

console.log(users);
console.table(users);