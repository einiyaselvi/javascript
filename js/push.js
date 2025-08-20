let n=[1,2,3,4,5];
console.log(n); //[1, 2, 3, 4, 5]
console.log(n.push(600));
console.log(n); //[1, 2, 3, 4, 5, 600]

console.log(n);
console.log(n.push(90));
console.log(n);

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange']

//Merging arrays
let user1 = ['strawberry', 'blueberry'];
let user2= ['kiwi', 'mango'];
user1.push(...user2); //using spread operator to merge
console.log(user1); // ['strawberry', 'blueberry', 'kiwi', 'mango']