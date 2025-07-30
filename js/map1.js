//map in javascript
/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers=numbers.map(number=>number*2);
console.log(doubledNumbers);
syntax:
originalArray.map(current_value,index,originalArray);

//2. modifying array elements
const words = ['hello', 'world', 'javascript'];
console.log(words);
const uppercasedWords = words.map(word => word.toUpperCase());
console.log(uppercasedWords);


//3. combining array

const fruits = ['John', 'Jane', 'Jim'];
const colors = ['Doe', 'Smith', 'Brown'];
const fruitColors=fruits.map((fruit, index) => fruit+"-"+colors[index]);
console.log(fruitColors);

//4.Filtering an array
const number = [1, 2, 3, 4, 5];
const evenNumbers=numbers.map(num=>num%2===0);
console.log(evenNumbers); // This will return an array of boolean values indicating if the number is even or not

//Extracting specific properties from objects in an array

const users = [
  { name: 'Alice', age: 25, city: 'New York' },     
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 20, city: 'Chicago' }
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']

//6. Modifying an array of objects
console.log(users);

const updatedUsers = users.map(user => {
    return{
        name:user.name,
        age:user.age+1
    }
});

console.log(updatedUsers); // Output: Array of users with incremented ages
console.table(updatedUsers); // Output: Array of users with incremented ages

*/

const words = ['hello', 'world', 'javascript'];
const wordsstats = words.map(function(currectValue, index, array) {
    return{
        word:currectValue,
        length: currectValue.length,
        position:index,
        totalWords:array.length
    };
});
console.log(wordsstats);
console.table(wordsstats);


















