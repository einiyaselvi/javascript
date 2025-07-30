//filter method in javascript
/*
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


let items = [
    {name: 'Apple', price: 1.2, category: 'fruit' },
    {name: 'Banana', price: 0.5, category: 'fruit' },
    {name: 'Carrot', price: 0.8, category: 'vegetable' },
];

let fruits=items.filter(item=>item.category==='fruit');
console.log(fruits); // Output: [{name: 'Apple', price: 1.

*/
//-----------------------------------------------------------
/*
let words = ['hello', 'world', 'javascript', 'filter', 'method','eat', 'elephant'];
let wordStartsWithE = words.filter(word => word.startsWith('e'));
console.log(wordStartsWithE); // Output: ['eat', 'elephant']
*/
//--------------------------------------------------------
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Phone', price: 500, category: 'electronics' },
  { name: 'Shirt', price: 30, category: 'clothing' },
  { name: 'Shoes', price: 60, category: 'clothing' }
];

const expensiveProducts = products.filter(product => product.name === 'Laptop');
console.log(expensiveProducts);
// Output: [{ name: 'Laptop', price: 1000, category: 'electronics' }]

//-------------------------------
let books = [
  { title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
  { title: 'Advanced JavaScript', author: 'Jane Smith', year: 2019 },
  { title: 'Learning Python', author: 'Alice Johnson', year: 2021 }
];

const searchTerm = 'JavaScript';
const filteredBooks = books.filter(book => book.title.includes(searchTerm));
console.log(filteredBooks);
// Output: 
// [{ title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
//  { title: 'Advanced JavaScript', author: 'Jane Smith', year:


