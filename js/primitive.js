//primitive and reference data type

let names = "Einiya selvi";
console.log(typeof names);

let age = 30;
console.log(typeof age);
let isStudent=true;
console.log(typeof isStudent);

let x;
console.log(typeof x);
let id=Symbol();
console.log(typeof id);

let a= 20;
let b = a;
console.log(a);
console.log(b);
a=5
console.log(a);
console.log(b);

//Reference Type 
//object type
let user = {name : "Joe", age:30};
let user2 = user;
console.log("User1 " ,user);
console.log("User2" ,user2);
user.age=20;
console.log("User1 " ,user);
console.log("User2" ,user2);  

/*
***stock memory la user1 , user 2 nu rendu variable iruku Athula values iruku heap memory la values store ayirukum 
***Stock memory la values store agathu namaluku antha variable oda address tha irukum!!
*/



