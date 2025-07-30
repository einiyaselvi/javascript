//filter method in javascript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers=numbers.filter(number=>number%2==0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


let users = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 20, city: 'Chicago' }
];

let eligible=users.filter(user=>user.age>30);
console.log(eligible); // Output: [] 


let words = ['hello', 'world', 'javascript', 'filter', 'method'];
let wordsWithFourLetters=words.filter(word=>word.length===4);
console.log(wordsWithFourLetters); // Output: ['filter', 'word']