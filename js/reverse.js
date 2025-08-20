const n = [ 1, 2, 3, 4, 5 ];
console.log("Befor :",  n);
n.reverse();
console.log("After :", n);

const names = ["kumar", "kavi", "kiran", "varun"];
console.log("Befor :", names);
names.reverse();
console.log("After :", names);

//Array elements with length property
const x = { 0: "apple", 1: "banana", 2: "cherry", length: 3 };
console.log(x);
 Array.prototype.reverse.call(x); // array like object
 console.log(x);

